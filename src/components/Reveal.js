import React, { Fragment } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap/TweenMax';

import { config } from '../helpers/config';
import Button from './Button';

class Reveal extends React.Component {
  triggerRef = React.createRef();

  revealRef = React.createRef();

  componentDidMount() {
    this.attachTimeline();
  }

  componentWillReceiveProps(nextProps) {
    const { reveal } = this.props;

    if (reveal !== nextProps.reveal) {
      if (nextProps.reveal) {
        this.revealOpen();
      } else {
        this.revealClose();
      }
    }
  }

  attachTimeline = () => {
    const { reveal } = this.props;
    const $reveal = this.revealRef.current;
    const $trigger = this.triggerRef.current;

    const {
      onStart,
      onReverseStart,
      onComplete,
      onReverseComplete,
    } = this.props;

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

    // If reveal has open class onload, open by default
    if (reveal) {
      $reveal.timeline.progress(1);
    }
  };

  revealOpen = () => {
    const $reveal = this.revealRef.current;

    if ($reveal) $reveal.timeline.play();
  };

  revealClose = () => {
    const $reveal = this.revealRef.current;

    if ($reveal) $reveal.timeline.reverse();
  };

  handleRevealToggle = () => {
    const $reveal = this.revealRef.current;

    if ($reveal.timeline.progress() === 1) {
      this.revealClose();
    } else {
      this.revealOpen();
    }
  };

  render() {
    const { children, className, trigger } = this.props;
    const classes = cx('reveal-content', className);

    return (
      <Fragment>
        <Button
          onClick={this.handleRevealToggle}
          {...trigger.props}
          ref={this.triggerRef}
        >
          {trigger.label}
        </Button>
        <div className="reveal" ref={this.revealRef} aria-hidden="true">
          <div className={classes}>{children}</div>
        </div>
      </Fragment>
    );
  }
}

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
};

export default Reveal;
