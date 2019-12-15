import { Children, cloneElement, Fragment, useRef, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { keyframes } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { createPortal } from 'react-dom';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';

const StylesTooltipVariables = (theme, variation) => ({
  arrowSize: 10,
  background:
    variation === 'light' ? theme.color.light.base : theme.color.dark.base,
  border: variation === 'light' ? theme.border.base : theme.color.dark.base,
  borderRadius: theme.settings.ui.radius && theme.borderRadius.base,
  color: variation === 'light' ? theme.fontColor.base : theme.contrast.base,
});

const tooltipKeyframes = keyframes({
  from: {
    transform: 'scale(0.75)',
    opacity: 0,
  },

  to: {
    transform: 'scale(1)',
    opacity: 1,
  },
});

const Tooltip = ({ children, className, content, placement, variation }) => {
  const theme = useTheme();

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

  const renderTooltip = () => {
    const $tooltip = tooltipRef.current;
    const $tooltipTrigger = tooltipTriggerRef.current;

    const rect = $tooltipTrigger.getBoundingClientRect();

    // Grab dimensions of link
    const linkDim = { w: rect.width, h: rect.height };

    // Tooltip dimensions
    const tooltipDim = { w: $tooltip.offsetWidth, h: $tooltip.offsetHeight };

    const scrollYOffset = window.pageYOffset;
    const scrollXOffset = window.pageXOffset;

    // Apply styling
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
        break;
      case 'bottom':
        $tooltip.style.top = `${rect.top + scrollYOffset + linkDim.h}px`;
        $tooltip.style.left = `${rect.left +
          scrollXOffset +
          linkDim.w / 2 -
          tooltipDim.w / 2}px`;
        break;
      case 'left':
        $tooltip.style.top = `${rect.top +
          scrollYOffset +
          linkDim.h / 2 -
          tooltipDim.h / 2}px`;
        $tooltip.style.left = `${rect.left + scrollXOffset - tooltipDim.w}px`;
        break;
      case 'right':
        $tooltip.style.top = `${rect.top +
          scrollYOffset +
          linkDim.h / 2 -
          tooltipDim.h / 2}px`;
        $tooltip.style.left = `${rect.left + scrollXOffset + linkDim.w}px`;
        break;
    }
  };

  const renderChildren = Children.map(children, child =>
    cloneElement(child, {
      ref: tooltipTriggerRef,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
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
        createPortal(
          <div
            css={[
              {
                position: 'absolute',
                zIndex: 10,
                display: 'block',
                fontSize: theme.fontSize.small,
                padding: StylesTooltipVariables(theme, variation).arrowSize + 1,
                animation: `${tooltipKeyframes} 0.25s ${theme.transition.bounce}`,
              },
              placement === 'top' && {
                transformOrigin: 'center bottom',
              },
              placement === 'right' && {
                transformOrigin: 'left center',
              },
              placement === 'bottom' && {
                transformOrigin: 'center top',
              },
              placement === 'left' && {
                transformOrigin: 'right center',
              },
            ]}
            className={cx('CK__Tooltip', className)}
            ref={tooltipRef}
            role="tooltip"
          >
            <div
              css={[
                {
                  color: StylesTooltipVariables(theme, variation).color,
                  maxWidth: 250,
                  padding: theme.space.small,
                  background: StylesTooltipVariables(theme, variation)
                    .background,
                  border: theme.border.base,
                  borderRadius: StylesTooltipVariables(theme, variation)
                    .borderRadius,
                  wordWrap: 'break-word',
                  textAlign: 'center',
                  position: 'relative',
                  boxShadow: theme.boxShadow.base,

                  '&::after': {
                    content: "''",
                    width: StylesTooltipVariables(theme, variation).arrowSize,
                    height: StylesTooltipVariables(theme, variation).arrowSize,
                    position: 'absolute',
                    background: StylesTooltipVariables(theme, variation)
                      .background,
                    border: theme.border.base,
                    borderBottomLeftRadius:
                      StylesTooltipVariables(theme, variation).borderRadius / 2,
                    borderRight: 0,
                    borderTop: 0,
                  },
                },

                placement === 'top' && {
                  '&::after': {
                    bottom:
                      -StylesTooltipVariables(theme, variation).arrowSize / 2 -
                      1,
                    left: '50%',
                    transform: 'translateX(-50%) rotate(-45deg)',
                  },
                },

                placement === 'right' && {
                  '&::after': {
                    left:
                      -StylesTooltipVariables(theme, variation).arrowSize / 2 -
                      1,
                    top: '50%',
                    transform: 'translateY(-50%) rotate(45deg)',
                  },
                },

                placement === 'bottom' && {
                  '&::after': {
                    top:
                      -StylesTooltipVariables(theme, variation).arrowSize / 2 -
                      1,
                    left: '50%',
                    transform: 'translateX(-50%) rotate(135deg)',
                    borderBottomLeftRadius: StylesTooltipVariables(
                      theme,
                      variation
                    ).borderRadius,
                  },
                },

                placement === 'left' && {
                  '&::after': {
                    right:
                      -StylesTooltipVariables(theme, variation).arrowSize / 2 -
                      1,
                    top: '50%',
                    transform: 'translateY(-50%) rotate(-135deg)',
                  },
                },
              ]}
              className="CK__Tooltip__Inner"
            >
              {content}
            </div>
          </div>,
          document.body
        )}
    </Fragment>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  content: PropTypes.any.isRequired,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  variation: PropTypes.oneOf(['light', 'dark']),
};

Tooltip.defaultProps = {
  placement: 'top',
  variation: 'light',
};

export default Tooltip;
