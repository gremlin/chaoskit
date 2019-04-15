import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useMount from 'react-use/lib/useMount';
import { TimelineMax } from 'gsap/TweenMax';

import { config } from '../helpers/config';
import { Button, Icon } from '.';

const Dropdown = ({
  children,
  className,
  panelClassName,
  onComplete,
  onReverseComplete,
  onReverseStart,
  onStart,
  position,
  trigger,
  showArrow,
  ...opts
}) => {
  const dropdownRef = useRef();
  const dropdownPanelRef = useRef();
  const dropdownTriggerRef = useRef();

  const dropdownOpen = () => {
    const $dropdown = dropdownRef.current;

    if ($dropdown) $dropdown.timeline.play();
  };

  const dropdownClose = () => {
    const $dropdown = dropdownRef.current;

    if ($dropdown) $dropdown.timeline.reverse();
  };

  /**
   * Determine if click originates from outside `.dropdown-panel`
   * @param  {event} e
   * @return {false}
   */
  const checkInside = (e) => {
    if (e.target.closest('.dropdown-panel') === null) {
      dropdownClose();

      return;
    }

    return false;
  };

  const attachTimeline = () => {
    const $dropdown = dropdownRef.current;
    const $trigger = dropdownTriggerRef.current;
    const $panel = dropdownPanelRef.current;

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

        document.addEventListener('click', checkInside, false);
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

        document.removeEventListener('click', checkInside, false);
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

  useMount(() => {
    attachTimeline();
  });

  const handleDropdownToggle = () => {
    const $dropdown = dropdownRef.current;

    if ($dropdown.timeline.progress() === 1) {
      dropdownClose();
    } else {
      dropdownOpen();
    }
  };

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
      ref={dropdownRef}
      {...opts}
    >
      <Button
        onClick={handleDropdownToggle}
        {...trigger.props}
        ref={dropdownTriggerRef}
      >
        {trigger.label}
        {showArrow && (
          <Icon size="small" icon="caret-down" className="dropdown-arrow" />
        )}
      </Button>
      <div className={panelClasses} ref={dropdownPanelRef}>
        {children}
      </div>
    </div>
  );
};

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
