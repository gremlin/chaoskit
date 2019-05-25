import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import useLockBodyScroll from 'react-use/lib/useLockBodyScroll';
import useClickAway from 'react-use/lib/useClickAway';
import ReactDOM from 'react-dom';
import { TimelineMax } from 'gsap/TweenMax';

import Close from './Close';
import { config } from '../helpers/config';

const OffCanvas = ({
  children,
  className,
  align,
  open,
  onOffCanvasToggle,
  onComplete,
  onReverseComplete,
  onReverseStart,
  onStart,
  ...opts
}) => {
  const offCanvasRef = useRef();
  const offCanvasPanelRef = useRef();

  const [renderOffCanvas, setRenderOffCanvas] = useState(open);

  const openOffCanvas = () => {
    const $offCanvas = offCanvasRef.current;

    $offCanvas.timeline.play();
  };

  const closeOffCanvas = () => {
    const $offCanvas = offCanvasRef.current;

    $offCanvas.timeline.reverse();
  };

  const handleOnReverseComplete = () => {
    setRenderOffCanvas(false);
  };

  const attachTimeline = () => {
    const $offCanvas = offCanvasRef.current;
    const $panel = offCanvasPanelRef.current;

    let forward = true;
    let lastTime = 0;

    // Attach timeline to each instance
    $offCanvas.timeline = new TimelineMax({
      paused: !open,
      onStart: () => {
        $offCanvas.classList.add(config.classes.open);

        onStart();
      },
      onUpdate: () => {
        const newTime = $offCanvas.timeline.time();
        if (
          (forward && newTime < lastTime)
          || (!forward && newTime > lastTime)
        ) {
          forward = !forward;
          if (!forward) {
            onReverseStart();

            $offCanvas.classList.remove(config.classes.open);
          }
        }
        lastTime = newTime;
      },
      onComplete: () => {
        // Focus on active offCanvas for screen readers
        $offCanvas.focus();

        onComplete();
      },
      onReverseComplete: () => {
        handleOnReverseComplete();
      },
    });

    $offCanvas.timeline
      .set($offCanvas, {
        display: 'block',
      })
      .to(
        $offCanvas,
        0.25,
        {
          css: {
            opacity: 1,
          },
        },
        'offCanvas',
      )
      .to(
        $panel,
        0.5,
        {
          css: {
            x: 0,
          },
          ease: config.easing,
        },
        'offCanvas',
      );
  };

  useEffect(
    () => {
      if (open) {
        setRenderOffCanvas(true);
      }
    },
    [open],
  );

  useUpdateEffect(
    () => {
      if (renderOffCanvas) {
        attachTimeline();

        openOffCanvas();
      } else {
        onReverseComplete();
      }
    },
    [renderOffCanvas],
  );

  useUpdateEffect(
    () => {
      if (!open) {
        closeOffCanvas();
      }
    },
    [open],
  );

  const classes = cx(
    'offCanvas',
    {
      'offCanvas--right': align === 'right',
    },
    className,
  );

  useClickAway(offCanvasPanelRef, () => onOffCanvasToggle());
  useLockBodyScroll(renderOffCanvas);

  return (
    renderOffCanvas
    && ReactDOM.createPortal(
      <div className={classes} ref={offCanvasRef} {...opts}>
        <div className="offCanvas-panel" ref={offCanvasPanelRef}>
          <Close onClick={onOffCanvasToggle} className="offCanvas-close" />
          {children}
        </div>
      </div>,
      document.body,
    )
  );
};

OffCanvas.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right']),
  open: PropTypes.bool,
  onOffCanvasToggle: PropTypes.func.isRequired,
  onComplete: PropTypes.func,
  onReverseComplete: PropTypes.func,
  onReverseStart: PropTypes.func,
  onStart: PropTypes.func,
};

OffCanvas.defaultProps = {
  open: false,
  onComplete: () => {},
  onReverseComplete: () => {},
  onReverseStart: () => {},
  onStart: () => {},
};

export default OffCanvas;
