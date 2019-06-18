import cx from 'classnames';
import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import useLockBodyScroll from 'react-use/lib/useLockBodyScroll';
import useClickAway from 'react-use/lib/useClickAway';
import ReactDOM from 'react-dom';
import { TimelineMax } from 'gsap/TweenMax';
import { withTheme } from 'emotion-theming';

import { misc } from '../assets/styles/utility';

export const StylesModalVariables = theme => ({
  padding: theme.space.large,
  size: {
    base: 600,
    small: 400,
    large: 800,
  },
});

const Modal = ({
  children,
  className,
  size,
  open,
  onOutsideModalClick,
  onComplete,
  onReverseComplete,
  onReverseStart,
  onStart,
  theme,
  ...opts
}) => {
  const modalRef = useRef();
  const modalDialogRef = useRef();

  const [renderModal, setRenderModal] = useState(open);

  const openModal = () => {
    const $modal = modalRef.current;

    $modal.timeline.play();
  };

  const closeModal = () => {
    const $modal = modalRef.current;

    $modal.timeline.reverse();
  };

  const handleOnReverseComplete = () => {
    setRenderModal(false);
  };

  const attachTimeline = () => {
    const $modal = modalRef.current;
    const $modalDialog = modalDialogRef.current;

    let forward = true;
    let lastTime = 0;

    // Attach timeline to each instance
    $modal.timeline = new TimelineMax({
      paused: !open,
      onStart: () => {
        onStart();
      },
      onUpdate: () => {
        const newTime = $modal.timeline.time();
        if (
          (forward && newTime < lastTime)
          || (!forward && newTime > lastTime)
        ) {
          forward = !forward;
          if (!forward) {
            onReverseStart();
          }
        }
        lastTime = newTime;
      },
      onComplete: () => {
        // Focus on active modal for screen readers
        $modal.focus();

        onComplete();
      },
      onReverseComplete: () => {
        handleOnReverseComplete();
      },
    });

    $modal.timeline
      .set($modal, {
        display: 'block',
      })
      .to($modal, theme.gsap.timing.base, {
        css: {
          opacity: 1,
        },
      })
      .to($modalDialog, theme.gsap.timing.base, {
        css: {
          opacity: 1,
          y: 0,
        },
        ease: theme.gsap.transition.bounce,
      });
  };

  useEffect(
    () => {
      if (open) {
        setRenderModal(true);
      }
    },
    [open],
  );

  useUpdateEffect(
    () => {
      if (renderModal) {
        attachTimeline();

        openModal();
      } else {
        onReverseComplete();
      }
    },
    [renderModal],
  );

  useUpdateEffect(
    () => {
      if (!open) {
        closeModal();
      }
    },
    [open],
  );

  useClickAway(modalDialogRef, () => onOutsideModalClick());
  useLockBodyScroll(renderModal);

  if (!renderModal) return null;

  return ReactDOM.createPortal(
    <div
      css={[
        misc.overflow,
        {
          // 1. GSAP
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: theme.color.dark.overlay,
          zIndex: 10,

          // 1
          opacity: 0,
          display: 'none',
        },
      ]}
      className={cx('CK__Modal', className)}
      ref={modalRef}
      {...opts}
    >
      <div
        css={[
          {
            // 1. GSAP
            background: theme.color.light.base,
            borderRadius: theme.borderRadius.base,
            margin: theme.space.base,
            zIndex: 5,
            boxShadow: theme.boxShadow.large,
            // 1
            transform: 'translateY(25%)',
            transformOrigin: 'center bottom',
            opacity: 0,
          },

          ['small', 'base'].includes(size) && {
            [theme.mq.medium]: {
              maxWidth: StylesModalVariables(theme).size[size],
              margin: `${theme.space.xlarge}px auto`,
            },
          },

          size === 'large' && {
            [theme.mq.large]: {
              maxWidth: StylesModalVariables(theme).size[size],
              margin: `${theme.space.xlarge}px auto`,
            },
          },
        ]}
        className="UK__Modal__Dialog"
        ref={modalDialogRef}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['base', 'small', 'large']),
  open: PropTypes.bool,
  onOutsideModalClick: PropTypes.func,
  /** GSAP callback */
  onComplete: PropTypes.func,
  /** GSAP callback */
  onReverseComplete: PropTypes.func,
  /** GSAP callback */
  onReverseStart: PropTypes.func,
  /** GSAP callback */
  onStart: PropTypes.func,
  theme: PropTypes.object.isRequired,
};

Modal.defaultProps = {
  onOutsideModalClick: () => {},
  onComplete: () => {},
  onReverseComplete: () => {},
  onReverseStart: () => {},
  onStart: () => {},
  size: 'base',
};

export default withTheme(Modal);
