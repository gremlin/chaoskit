import cx from 'classnames';
import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import useLockBodyScroll from 'react-use/lib/useLockBodyScroll';
import useClickAway from 'react-use/lib/useClickAway';
import ReactDOM from 'react-dom';
import { TimelineMax } from 'gsap/TweenMax';
import { useTheme } from 'emotion-theming';

import { misc } from '../assets/styles/utility';

export const StylesModalVariables = theme => ({
  padding: theme.space.large,
  size: {
    base: 600,
    small: 400,
    large: 800,
  },
});

const MODAL_ANIMATE_PROPERTIES = {
  bottom: {
    label: 'center bottom',
    transform: 'translateY(25%)',
  },
  top: {
    label: 'center top',
    transform: 'translateY(-25%)',
  },
};

const Modal = ({
  animateFrom,
  children,
  className,
  size,
  open,
  onOutsideModalClick,
  onComplete,
  onReverseComplete,
  onReverseStart,
  onStart,
  ...opts
}) => {
  const theme = useTheme();

  const modalRef = useRef();
  const modalDialogRef = useRef();

  const [renderModal, setRenderModal] = useState(open);

  const openModal = () => {
    const $modal = modalRef.current;

    if ($modal && $modal.timeline) $modal.timeline.play();
  };

  const closeModal = () => {
    const $modal = modalRef.current;

    if ($modal && $modal.timeline) $modal.timeline.reverse();
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
          (forward && newTime < lastTime) ||
          (!forward && newTime > lastTime)
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

  useEffect(() => {
    if (open) {
      setRenderModal(true);
    }
  }, [open]);

  useUpdateEffect(() => {
    if (renderModal) {
      attachTimeline();

      openModal();
    } else {
      onReverseComplete();
    }
  }, [renderModal]);

  useUpdateEffect(() => {
    if (!open) {
      closeModal();
    }
  }, [open]);

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
            opacity: 0,
            transform: MODAL_ANIMATE_PROPERTIES[animateFrom].transform,
            transformOrigin: MODAL_ANIMATE_PROPERTIES[animateFrom].label,
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
        className="CK__Modal__Dialog"
        ref={modalDialogRef}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  /** Change entrance direction */
  animateFrom: PropTypes.oneOf(['bottom', 'top']),
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
};

Modal.defaultProps = {
  animateFrom: 'bottom',
  onOutsideModalClick: () => {},
  onComplete: () => {},
  onReverseComplete: () => {},
  onReverseStart: () => {},
  onStart: () => {},
  size: 'base',
};

export default Modal;
