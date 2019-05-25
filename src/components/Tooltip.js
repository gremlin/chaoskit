import React, {
  Fragment, useRef, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import { TimelineMax } from 'gsap/TweenMax';

import { isTouchDevice } from '../helpers/utility';
import { config } from '../helpers/config';

const Tooltip = ({
  children, content, placement, mobileTap,
}) => {
  const tooltipRef = useRef();
  const tooltipTriggerRef = useRef();

  const [renderTooltip, setRenderTooltip] = useState(false);

  const handleMouseEnter = () => {
    setRenderTooltip(true);
  };

  const openTooltip = () => {
    const $tooltip = tooltipRef.current;

    $tooltip.timeline.play();
  };

  const closeTooltip = () => {
    const $tooltip = tooltipRef.current;

    if ($tooltip) $tooltip.timeline.reverse();
  };

  /**
   * Figure out direciton and position
   * @return {void}
   */
  const styleTooltip = () => {
    const $tooltip = tooltipRef.current;
    const $tooltipTrigger = tooltipTriggerRef.current;

    const rect = $tooltipTrigger.getBoundingClientRect();

    $tooltip.classList.add(`tooltip--${placement}`);

    // Grab dimensions of link
    const linkDim = { w: rect.width, h: rect.height };

    // Tooltip dimensions
    const tooltipDim = { w: $tooltip.offsetWidth, h: $tooltip.offsetHeight };

    const scrollYOffset = window.pageYOffset || document.documentElement.scrollTop;
    const scrollXOffset = window.pageXOffset || document.documentElement.scrollLeft;

    // Apply styling
    // eslint-disable-next-line default-case
    switch (
      placement // eslint-disable-line default-case
    ) {
      case 'top':
        $tooltip.style.top = `${rect.top + scrollYOffset - tooltipDim.h}px`;
        $tooltip.style.left = `${rect.left
          + scrollXOffset
          + linkDim.w / 2
          - tooltipDim.w / 2}px`;
        break;
      case 'bottom':
        $tooltip.style.top = `${rect.top + scrollYOffset + linkDim.h}px`;
        $tooltip.style.left = `${rect.left
          + scrollXOffset
          + linkDim.w / 2
          - tooltipDim.w / 2}px`;
        break;
      case 'left':
        $tooltip.style.top = `${rect.top
          + scrollYOffset
          + linkDim.h / 2
          - tooltipDim.h / 2}px`;
        $tooltip.style.left = `${rect.left + scrollXOffset - tooltipDim.w}px`;
        break;
      case 'right':
        $tooltip.style.top = `${rect.top
          + scrollYOffset
          + linkDim.h / 2
          - tooltipDim.h / 2}px`;
        $tooltip.style.left = `${rect.left + scrollXOffset + linkDim.w}px`;
        break;
    }

    openTooltip();
  };

  const attachTimeline = () => {
    const $tooltip = tooltipRef.current;

    // Attach GSAP
    $tooltip.timeline = new TimelineMax({
      paused: true,
      onReverseComplete: () => {
        setRenderTooltip(false);
      },
    });

    let transformOrigin;

    // eslint-disable-next-line default-case
    switch (
      placement // eslint-disable-line default-case
    ) {
      case 'top':
        transformOrigin = 'center bottom';
        break;
      case 'bottom':
        transformOrigin = 'center top';
        break;
      case 'left':
        transformOrigin = 'right center';
        break;
      case 'right':
        transformOrigin = 'left center';
        break;
    }

    $tooltip.timeline
      .set($tooltip, {
        transformOrigin,
        scale: 0.75,
      })
      .to($tooltip, 0.175, {
        css: {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
        },
        ease: config.easingBounce,
      });

    styleTooltip();
  };

  const renderChildren = React.Children.map(children, child => React.cloneElement(child, {
    ref: tooltipTriggerRef,
  }));

  // @NOTE Attaching event listeners here is not ideal, but `onMouseEnter` (and `onMouseOver`) is not reliably fired; as well as the context of the currentTarget being incorrect.
  useEffect(
    () => {
      const $tooltipTrigger = tooltipTriggerRef.current;

      // Add event listeners
      // Tooltips are not triggered on touch-devices to not interfere with actionable items
      // This can be overidden with the `mobileTap` prop
      if (!isTouchDevice() || mobileTap) {
        $tooltipTrigger.addEventListener('mouseenter', handleMouseEnter, false);
        $tooltipTrigger.addEventListener('mouseleave', closeTooltip, false);
      }

      return () => {
        // Remove event listeners from non-touch devices
        if (!isTouchDevice() || mobileTap) {
          $tooltipTrigger.removeEventListener(
            'mouseenter',
            handleMouseEnter,
            false,
          );
          $tooltipTrigger.removeEventListener(
            'mouseleave',
            closeTooltip,
            false,
          );
        }
      };
    },
    [tooltipTriggerRef],
  );

  useUpdateEffect(
    () => {
      if (renderTooltip) {
        attachTimeline();
      }
    },
    [renderTooltip],
  );

  return (
    <Fragment>
      {renderChildren}
      {renderTooltip
        && ReactDOM.createPortal(
          <div className="tooltip" ref={tooltipRef} role="tooltip">
            <div className="tooltip-inner">{content}</div>
          </div>,
          document.body,
        )}
    </Fragment>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.any.isRequired,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  /** Disables tooltips on touch devices to not interfere with interactive elements */
  mobileTap: PropTypes.bool,
};

Tooltip.defaultProps = {
  placement: 'top',
  mobileTap: false,
};

export default Tooltip;
