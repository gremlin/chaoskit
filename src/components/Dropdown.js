import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { TimelineMax } from 'gsap/TweenMax';

import { config } from '../helpers/config';
import Button from './Button';
import Icon from './Icon';

class Dropdown extends React.Component {
  dropdownRef = React.createRef();

  dropdownPanelRef = React.createRef();

  dropdownTriggerRef = React.createRef();

  componentDidMount() {
    this.attachTimeline();
  }

  attachTimeline = () => {
    const $dropdown = this.dropdownRef.current;
    const $trigger = this.dropdownTriggerRef.current;
    const $panel = this.dropdownPanelRef.current;

    const {
      onStart,
      onReverseStart,
      onComplete,
      onReverseComplete,
    } = this.props;
    const checkInsideBound = this._checkInside.bind(this);

    let forward = true;
    let lastTime = 0;

    // Attach GSAP
    $dropdown.timeline = new TimelineMax({
      paused: true,
      onStart() {
        onStart();

        $dropdown.classList.add(config.classes.open);
        // Toggle aria state
        $dropdown.setAttribute('aria-expanded', true);
        // Add active class from trigger
        $trigger.classList.add(config.classes.active);
      },
      onComplete() {
        onComplete();

        document.addEventListener('click', checkInsideBound, false);
      },
      onUpdate: () => {
        const newTime = $dropdown.timeline.time();

        if (
          (forward && newTime < lastTime)
          || (!forward && newTime > lastTime)
        ) {
          forward = !forward;
          if (!forward) {
            onReverseStart();

            $dropdown.classList.remove(config.classes.open);
            // Toggle aria state
            $dropdown.setAttribute('aria-expanded', false);
            // Remove active class from trigger
            $trigger.classList.remove(config.classes.active);
          }
        }
        lastTime = newTime;
      },
      onReverseComplete() {
        onReverseComplete();

        document.removeEventListener('click', checkInsideBound, false);
      },
    });

    $dropdown.timeline
      .set($panel, {
        display: 'block',
      })
      .to($panel, 0.175, {
        css: {
          y: 0,
          scale: 1,
          opacity: 1,
        },
        ease: config.easingBounce,
      });
  };

  handleDropdownToggle = () => {
    const $dropdown = this.dropdownRef.current;

    if ($dropdown.timeline.progress() === 1) {
      this.dropdownClose();
    } else {
      this.dropdownOpen();
    }
  };

  dropdownOpen = () => {
    const $dropdown = this.dropdownRef.current;

    if ($dropdown) $dropdown.timeline.play();
  };

  dropdownClose = () => {
    const $dropdown = this.dropdownRef.current;

    if ($dropdown) $dropdown.timeline.reverse();
  };

  /**
   * Determine if click originates from outside `.dropdown-panel`
   * @param  {event} e
   * @return {false}
   */
  _checkInside(e) {
    if (e.target.closest('.dropdown-panel') === null) {
      this.dropdownClose();

      return;
    }

    return false;
  }

  render() {
    const {
      children,
      className,
      panelClassName,
      position,
      trigger,
      showArrow,
    } = this.props;
    const classes = cx(
      'dropdown',
      {
        'dropdown--center': position === 'center',
        'dropdown--right': position === 'right',
        'dropdown--up': position === 'up-left',
        'dropdown--up dropdown--center': position === 'up-center',
        'dropdown--up dropdown--right': position === 'up-right',
      },
      className,
    );
    const panelClasses = cx('dropdown-panel', panelClassName);

    return (
      <div
        className={classes}
        aria-haspopup="true"
        aria-expanded="false"
        ref={this.dropdownRef}
      >
        <Button
          onClick={this.handleDropdownToggle}
          {...trigger.props}
          ref={this.dropdownTriggerRef}
        >
          {trigger.label}
          {showArrow && (
            <Icon size="small" icon="caret-down" className="dropdown-arrow" />
          )}
        </Button>
        <div className={panelClasses} ref={this.dropdownPanelRef}>
          {children}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  panelClassName: PropTypes.string,
  onComplete: PropTypes.func,
  onReverseComplete: PropTypes.func,
  onReverseStart: PropTypes.func,
  onStart: PropTypes.func,
  position: PropTypes.oneOf([
    'left',
    'center',
    'right',
    'up-left',
    'up-center',
    'up-right',
  ]),
  trigger: PropTypes.shape({
    props: PropTypes.object,
    label: PropTypes.any.isRequired,
  }),
  showArrow: PropTypes.bool,
};

Dropdown.defaultProps = {
  onComplete: () => {},
  onReverseComplete: () => {},
  onReverseStart: () => {},
  onStart: () => {},
  position: 'left',
};

export default Dropdown;
