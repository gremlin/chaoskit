import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { TimelineMax } from 'gsap/TweenMax';

import { isTouchDevice } from '../helpers/utility';
import { config } from '../helpers/config';

class Tooltip extends React.Component {
  state = {
    renderTooltip: false,
  };

  // @NOTE Attaching event listeners here is not ideal, but `onMouseEnter` (and `onMouseOver`) is not reliably fired; as well as the context of the currentTarget being incorrect.
  componentDidMount() {
    const { mobileTap } = this.props;
    const $tooltipTrigger = this.getTooltipTrigger();

    // Add event listeners
    // Tooltips are not triggered on touch-devices to not interfere with actionable items
    // This can be overidden with the `mobileTap` prop
    if (!isTouchDevice() || mobileTap) {
      $tooltipTrigger.addEventListener(
        'mouseenter',
        this.renderTooltip.bind(this),
      );
      $tooltipTrigger.addEventListener(
        'mouseleave',
        this.closeTooltip.bind(this),
      );
    }
  }

  componentWillUnmount() {
    const { mobileTap } = this.props;
    const $tooltipTrigger = this.getTooltipTrigger();

    // Remove event listeners from non-touch devices
    if (!isTouchDevice() || mobileTap) {
      $tooltipTrigger.removeEventListener(
        'mouseenter',
        this.renderTooltip.bind(this),
      );
      $tooltipTrigger.removeEventListener(
        'mouseleave',
        this.closeTooltip.bind(this),
      );
    }
  }

  /**
   * Get tooltip trigger
   * @return {void} [description]
   */
  getTooltipTrigger = () => {
    const { tooltipTrigger } = this;

    // If this a React component; get DOM reference
    if (typeof this.tooltipTrigger === 'object') {
      return ReactDOM.findDOMNode(this.tooltipTrigger);
    }

    return tooltipTrigger;
  };

  /**
   * Figure out direciton and position
   * @return {void}
   */
  styleTooltip = () => {
    const { placement } = this.props;

    const $tooltip = this.tooltip;
    const $tooltipTrigger = this.getTooltipTrigger();

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

    this.openTooltip();
  };

  openTooltip = () => {
    const $tooltip = this.tooltip;

    $tooltip.timeline.play();
  };

  closeTooltip = () => {
    const $tooltip = this.tooltip;

    if ($tooltip) $tooltip.timeline.reverse();
  };

  renderTooltip = () => {
    this.setState(
      {
        renderTooltip: true,
      },
      () => this.attachTimeline(),
    );
  };

  attachTimeline = () => {
    const $tooltip = this.tooltip;
    const { placement } = this.props;

    // Attach GSAP
    $tooltip.timeline = new TimelineMax({
      paused: true,
      onReverseComplete: () => {
        this.setState({
          renderTooltip: false,
        });
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

    this.styleTooltip();
  };

  renderChildren = () => {
    const { children } = this.props;

    const returnChild = React.cloneElement(React.Children.only(children), {
      ref: (node) => {
        this.tooltipTrigger = node;
      },
    });

    return returnChild;
  };

  render() {
    const { renderTooltip } = this.state;
    const { content } = this.props;

    return (
      <Fragment>
        {React.Children.only(this.renderChildren())}
        {renderTooltip
          && ReactDOM.createPortal(
            <div
              className="tooltip"
              ref={(ref) => {
                this.tooltip = ref;
              }}
              role="tooltip"
            >
              <div className="tooltip-inner">{content}</div>
            </div>,
            document.body,
          )}
      </Fragment>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.any.isRequired,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  mobileTap: PropTypes.bool,
};

Tooltip.defaultProps = {
  placement: 'top',
  mobileTap: false,
};

export default Tooltip;
