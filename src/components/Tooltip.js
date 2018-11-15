import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { TimelineMax } from 'gsap/TweenMax';

import { generateUUID, isTouchDevice } from '../helpers/utility';
import { config } from '../helpers/config';

class Tooltip extends React.Component {
  // @NOTE Attaching event listeners here is not ideal, but `onMouseEnter` (and `onMouseOver`) is not reliably fired; as well as the context of the currentTarget being incorrect.
  componentDidMount() {
    const tooltipTrigger = this.getTooltipTrigger();

    // Add event listeners
    // Tooltips are not triggered on touch-devices to not interfere with actionable items
    if (!isTouchDevice()) {
      tooltipTrigger.addEventListener('mouseenter', this.createTooltip.bind(this));
      tooltipTrigger.addEventListener('mouseleave', this.closeTooltip.bind(this));
    }
  }

  componentWillUnmount() {
    const tooltipTrigger = this.getTooltipTrigger();

    // Force remove tooltip
    const $tooltip = document.querySelector(`#${this.tooltipId}`);

    if ($tooltip) $tooltip.remove();

    // Remove event listeners from non-touch devices
    if (!isTouchDevice()) {
      tooltipTrigger.removeEventListener('mouseenter', this.createTooltip.bind(this));
      tooltipTrigger.removeEventListener('mouseleave', this.closeTooltip.bind(this));
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
  }

  /**
   * Create tooltip
   * @return {void}
   */
  createTooltip = (e) => {
    e.preventDefault();

    const { content, placement } = this.props;

    // Random ID
    this.tooltipId = `tooltip-${generateUUID()}`;

    const $tooltip = document.createElement('div');
    const $tooltipContent = document.createElement('div');

    $tooltip.setAttribute('id', this.tooltipId);
    $tooltip.setAttribute('role', 'tooltip');
    $tooltip.classList.add('tooltip');

    $tooltipContent.classList.add('tooltip-inner');

    // If tooltip content is valid HTMl (wrapped in object), convert to HTML and inject
    $tooltipContent.innerHTML = typeof content === 'object' ? ReactDOMServer.renderToStaticMarkup(content) : content;

    $tooltip.appendChild($tooltipContent);
    // Set placement as parameter
    $tooltip.placement = placement;

    document.body.appendChild($tooltip);

    // Attach GSAP
    $tooltip.timeline = new TimelineMax({
      paused: true,
      onStart: () => {
        this.touchOpen = true;
      },
      onReverseComplete: () => {
        this.touchOpen = false;
        this.removeTooltip($tooltip);
      },
    });

    let transformOrigin;

    switch ($tooltip.placement) { // eslint-disable-line default-case
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

    $tooltip.timeline.set($tooltip, {
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

    this.styleTooltip($tooltip);
  }

  /**
   * Figure out direciton and position
   * @return {void}
   */
  styleTooltip = (tooltip) => {
    const $tooltip = tooltip;
    const tooltipTrigger = this.getTooltipTrigger();

    const rect = tooltipTrigger.getBoundingClientRect();

    $tooltip.classList.add(`tooltip--${$tooltip.placement}`);

    // Grab dimensions of link
    const linkDim = { w: rect.width, h: rect.height };

    // Tooltip dimensions
    const tooltipDim = { w: $tooltip.offsetWidth, h: $tooltip.offsetHeight };

    const scrollYOffset = window.pageYOffset || document.documentElement.scrollTop;
    const scrollXOffset = window.pageXOffset || document.documentElement.scrollLeft;

    // Apply styling
    switch ($tooltip.placement) { // eslint-disable-line default-case
      case 'top':
        $tooltip.style.top = `${(rect.top + scrollYOffset) - tooltipDim.h}px`;
        $tooltip.style.left = `${(rect.left + scrollXOffset + (linkDim.w / 2)) - (tooltipDim.w / 2)}px`;
        break;
      case 'bottom':
        $tooltip.style.top = `${(rect.top + scrollYOffset) + linkDim.h}px`;
        $tooltip.style.left = `${(rect.left + scrollXOffset + (linkDim.w / 2)) - (tooltipDim.w / 2)}px`;
        break;
      case 'left':
        $tooltip.style.top = `${(rect.top + scrollYOffset + (linkDim.h / 2)) - (tooltipDim.h / 2)}px`;
        $tooltip.style.left = `${(rect.left + scrollXOffset) - tooltipDim.w}px`;
        break;
      case 'right':
        $tooltip.style.top = `${(rect.top + scrollYOffset + (linkDim.h / 2)) - (tooltipDim.h / 2)}px`;
        $tooltip.style.left = `${rect.left + scrollXOffset + linkDim.w}px`;
        break;
    }

    this.openTooltip($tooltip);
  }

  /**
   * Open tooltip
   * @param  {node} tooltip
   * @return {void}
   */
  openTooltip(tooltip) {
    const { delay } = this.props;

    if (delay) {
      // Takes care of multiple PropTypes
      const delayDuration = Number.isInteger(delay) ? delay : 1000;

      setTimeout(() => {
        tooltip.timeline.play();
      }, delayDuration);
    } else {
      tooltip.timeline.play();
    }
  }

  /**
   * Close tooltip
   * @param  {node} tooltip
   * @return {void}
   */
  closeTooltip() {
    document.querySelector(`#${this.tooltipId}`).timeline.reverse();
  }

  /**
   * Force close tooltip
   * @param  {node} tooltip
   * @return {void}
   */
  forceCloseTooltip() {
    document.querySelector(`#${this.tooltipId}`).timeline.progress(0);
  }

  /**
   * Remove tooltip from DOM
   * @param  {node} tooltip
   * @return {void}
   */
  removeTooltip(tooltip) {
    tooltip.remove();
  }

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
    return React.Children.only(this.renderChildren());
  }
}

Tooltip.propTypes = {
  delay: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.number.isRequired,
  ]),
  children: PropTypes.node.isRequired,
  content: PropTypes.any.isRequired,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

Tooltip.defaultProps = {
  delay: false,
  placement: 'top',
};

export default Tooltip;
