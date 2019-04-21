import cx from 'classnames';
import PropTypes from 'prop-types';
import React, {
  Fragment, useRef, useState, useEffect,
} from 'react';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import useLockBodyScroll from 'react-use/lib/useLockBodyScroll';
import ReactDOM from 'react-dom';
import { TimelineMax } from 'gsap/TweenMax';

import { config } from '../helpers/config';

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

  const handleOutsideModalClick = (e) => {
    // If click originates outside of modal dialog
    if (e.target.hasAttribute('data-modalroot')) {
      onOutsideModalClick();
    }

    return false;
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
        $modal.classList.add(config.classes.open);

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

            $modal.classList.remove(config.classes.open);
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
      .to($modal, 0.25, {
        css: {
          opacity: 1,
        },
      })
      .to($modalDialog, 0.25, {
        css: {
          opacity: 1,
          y: 0,
        },
        ease: config.easingBounce,
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

  const modalClasses = cx(
    'modal',
    {
      'modal--small': size === 'small',
      'modal--large': size === 'large',
    },
    className,
  );

  return (
    <Fragment>
      {useLockBodyScroll(renderModal)}
      {renderModal
        && ReactDOM.createPortal(
          <div /* eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
            className={modalClasses}
            onClick={handleOutsideModalClick}
            ref={modalRef}
            data-modalroot
            {...opts}
          >
            <div className="modal-dialog" ref={modalDialogRef}>
              {children}
            </div>
          </div>,
          document.body,
        )}
    </Fragment>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  open: PropTypes.bool,
  onOutsideModalClick: PropTypes.func,
  onComplete: PropTypes.func,
  onReverseComplete: PropTypes.func,
  onReverseStart: PropTypes.func,
  onStart: PropTypes.func,
};

Modal.defaultProps = {
  open: false,
  onOutsideModalClick: () => {},
  onComplete: () => {},
  onReverseComplete: () => {},
  onReverseStart: () => {},
  onStart: () => {},
};

export default Modal;
