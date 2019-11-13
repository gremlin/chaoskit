import React, { Fragment, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';

const Tooltip = ({ children, content, placement }) => {
  const tooltipRef = useRef();
  const tooltipTriggerRef = useRef();
  const [isHovered, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setHover(false);
    }, 250);
  };

  useEffect(() => {
    const $tooltipTrigger = tooltipTriggerRef.current;

    if ($tooltipTrigger) {
      $tooltipTrigger.addEventListener('mouseenter', handleMouseEnter, false);
      $tooltipTrigger.addEventListener('mouseleave', handleMouseLeave, false);
    }

    return () => {
      if ($tooltipTrigger) {
        $tooltipTrigger.removeEventListener(
          'mouseenter',
          handleMouseEnter,
          false
        );
        $tooltipTrigger.removeEventListener(
          'mouseleave',
          handleMouseLeave,
          false
        );
      }
    };
  }, []);

  const renderTooltip = () => {
    const $tooltip = tooltipRef.current;
    const $tooltipTrigger = tooltipTriggerRef.current;

    const rect = $tooltipTrigger.getBoundingClientRect();

    $tooltip.classList.add(`tooltip--${placement}`);

    // Grab dimensions of link
    const linkDim = { w: rect.width, h: rect.height };

    // Tooltip dimensions
    const tooltipDim = { w: $tooltip.offsetWidth, h: $tooltip.offsetHeight };

    const scrollYOffset =
      window.pageYOffset || document.documentElement.scrollTop;
    const scrollXOffset =
      window.pageXOffset || document.documentElement.scrollLeft;

    // eslint-disable-next-line default-case
    switch (
      placement // eslint-disable-line default-case
    ) {
      case 'top':
        $tooltip.style.top = `${rect.top + scrollYOffset - tooltipDim.h}px`;
        $tooltip.style.left = `${rect.left +
          scrollXOffset +
          linkDim.w / 2 -
          tooltipDim.w / 2}px`;
        $tooltip.style.transformOrigin = 'center bottom';
        break;
      case 'bottom':
        $tooltip.style.top = `${rect.top + scrollYOffset + linkDim.h}px`;
        $tooltip.style.left = `${rect.left +
          scrollXOffset +
          linkDim.w / 2 -
          tooltipDim.w / 2}px`;
        $tooltip.style.transformOrigin = 'center top';
        break;
      case 'left':
        $tooltip.style.top = `${rect.top +
          scrollYOffset +
          linkDim.h / 2 -
          tooltipDim.h / 2}px`;
        $tooltip.style.left = `${rect.left + scrollXOffset - tooltipDim.w}px`;
        $tooltip.style.transformOrigin = 'right center';
        break;
      case 'right':
        $tooltip.style.top = `${rect.top +
          scrollYOffset +
          linkDim.h / 2 -
          tooltipDim.h / 2}px`;
        $tooltip.style.left = `${rect.left + scrollXOffset + linkDim.w}px`;
        $tooltip.style.transformOrigin = 'left center';
        break;
    }
  };

  const renderChildren = React.Children.map(children, child =>
    React.cloneElement(child, {
      ref: tooltipTriggerRef,
    })
  );

  useUpdateEffect(() => {
    if (isHovered) {
      renderTooltip();
    }
  }, [isHovered]);

  return (
    <Fragment>
      {renderChildren}
      {isHovered &&
        ReactDOM.createPortal(
          <div className="tooltip" ref={tooltipRef} role="tooltip">
            <div className="tooltip-inner">{content}</div>
          </div>,
          document.body
        )}
    </Fragment>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.any.isRequired,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

Tooltip.defaultProps = {
  placement: 'top',
};

export default Tooltip;
