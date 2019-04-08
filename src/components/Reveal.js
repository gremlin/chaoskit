import React, {
  Fragment, useEffect, useCallback, useRef,
} from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap/TweenMax';

import { config } from '../helpers/config';
import { Button } from '.';

const Reveal = ({
  onStart,
  onReverseStart,
  onComplete,
  onReverseComplete,
  reveal,
  children,
  className,
  trigger,
}) => {
  const triggerRef = useRef();
  const revealRef = useRef();

  const attachTimeline = () => {
    const $reveal = revealRef.current;
    const $trigger = triggerRef.current;

    let forward = true;
    let lastTime = 0;

    // Attach GSAP
    $reveal.timeline = new TimelineMax({
      paused: true,
      onStart: () => {
        onStart();

        // Set initial height to `auto`
        $reveal.style.height = 'auto';
        // Add open class
        $reveal.classList.add(config.classes.open);
        // Toggle aria state
        $reveal.setAttribute('aria-hidden', false);
        // Add active class on trigger
        $trigger.classList.add(config.classes.active);
      },
      onUpdate: () => {
        const newTime = $reveal.timeline.time();

        if (
          (forward && newTime < lastTime)
          || (!forward && newTime > lastTime)
        ) {
          forward = !forward;
          if (!forward) {
            onReverseStart();

            // Remove active class
            $reveal.classList.remove(config.classes.open);
            // Toggle aria state
            $reveal.setAttribute('aria-hidden', true);
            // Remove active class on trigger
            $trigger.classList.remove(config.classes.active);
          }
        }
        lastTime = newTime;
      },
      onComplete() {
        // Allow height to fill-up space
        $reveal.style.height = 'auto';

        onComplete();
      },
      onReverseComplete() {
        // Set height of content
        $reveal.style.height = '0';

        onReverseComplete();
      },
    });

    $reveal.timeline
      .set($reveal, {
        css: {
          display: 'block',
          height: 'auto',
        },
      })
      .from($reveal, 0.5, {
        css: {
          height: 0,
          opacity: 0,
        },
        ease: config.easing,
      });

    if (reveal) {
      $reveal.timeline.play();
    }
  };

  const revealOpen = () => {
    const $reveal = revealRef.current;

    if ($reveal) $reveal.timeline.play();
  };

  const revealClose = () => {
    const $reveal = revealRef.current;

    if ($reveal) $reveal.timeline.reverse();
  };

  const handleRevealToggle = () => {
    const $reveal = revealRef.current;

    if ($reveal.timeline.progress() === 1) {
      revealClose();
    } else {
      revealOpen();
    }
  };

  useEffect(() => {
    attachTimeline();
  }, []);

  useCallback(
    () => {
      console.log('fired');
      if (reveal) {
        revealOpen();
      } else {
        revealClose();
      }
    },
    [reveal],
  );

  const classes = cx('reveal-content', className);

  return (
    <Fragment>
      <Button onClick={handleRevealToggle} {...trigger.props} ref={triggerRef}>
        {trigger.label}
      </Button>
      <div className="reveal" ref={revealRef} aria-hidden="true">
        <div className={classes}>{children}</div>
      </div>
    </Fragment>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  reveal: PropTypes.bool,
  onComplete: PropTypes.func,
  onReverseComplete: PropTypes.func,
  onReverseStart: PropTypes.func,
  onStart: PropTypes.func,
  trigger: PropTypes.shape({
    props: PropTypes.object,
    label: PropTypes.any.isRequired,
  }),
};

Reveal.defaultProps = {
  onComplete: () => {},
  onReverseComplete: () => {},
  onReverseStart: () => {},
  onStart: () => {},
  reveal: false,
};

export default Reveal;
