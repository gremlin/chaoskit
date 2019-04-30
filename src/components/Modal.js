import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import useLockBodyScroll from 'react-use/lib/useLockBodyScroll';
import useClickAway from 'react-use/lib/useClickAway';
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

  useClickAway(modalDialogRef, () => onOutsideModalClick());
  useLockBodyScroll(renderModal);

  return (
    renderModal
    && ReactDOM.createPortal(
      <div className={modalClasses} ref={modalRef} {...opts}>
        <div className="modal-dialog" ref={modalDialogRef}>
          {children}
        </div>
      </div>,
      document.body,
    )
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
