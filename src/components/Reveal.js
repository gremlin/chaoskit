import { Fragment, useEffect, useRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import { useTheme } from 'emotion-theming';

import Button from './Button';

const Reveal = ({
  onStart,
  onReverseStart,
  onComplete,
  onReverseComplete,
  reveal,
  children,
  className,
  trigger,
  ...opts
}) => {
  const theme = useTheme();

  const revealRef = useRef();
  const triggerRef = useRef();

  const attachTimeline = () => {
    const $reveal = revealRef.current;
    const $trigger = triggerRef.current;

    // Attach GSAP
    $reveal.timeline = gsap.timeline({
      paused: true,
      onStart: () => {
        // Add active class to trigger
        $trigger.classList.add([theme.settings.classes.active]);
        // Toggle aria state
        $reveal.setAttribute('aria-hidden', false);

        onStart();
      },
      onComplete: () => {
        onComplete();
      },
      onReverseComplete: () => {
        onReverseComplete();
      },
    });

    $reveal.timeline.to($reveal, {
      duration: theme.gsap.timing.long,
      height: 'auto',
      opacity: 1,
      ease: theme.gsap.transition.base,
    });

    if (reveal) {
      $reveal.timeline.progress(1);
    }
  };

  const handleOnReverseStart = () => {
    const $reveal = revealRef.current;
    const $trigger = triggerRef.current;

    // Remove active class on trigger
    $trigger.classList.remove([theme.settings.classes.active]);
    // Toggle aria state
    $reveal.setAttribute('aria-hidden', true);
  };

  const revealOpen = () => {
    const $reveal = revealRef.current;

    if ($reveal && $reveal.timeline) {
      $reveal.timeline.play();
    }
  };

  const revealClose = () => {
    const $reveal = revealRef.current;

    if ($reveal && $reveal.timeline) {
      $reveal.timeline.reverse();

      handleOnReverseStart();
    }
  };

  const handleRevealToggle = () => {
    const $reveal = revealRef.current;

    if ($reveal.timeline.progress() === 1) {
      revealClose();
    } else {
      revealOpen();
    }
  };

  useUpdateEffect(() => {
    const $reveal = revealRef.current;

    if ($reveal.timeline.progress() === 1) {
      revealClose();
    } else {
      revealOpen();
    }
  }, [reveal]);

  useEffect(() => {
    attachTimeline();
  }, []);

  return (
    <Fragment>
      <Button ref={triggerRef} onClick={handleRevealToggle} {...trigger.props}>
        {trigger.label}
      </Button>
      <div
        css={{
          // Take care of overflowing content
          overflow: 'hidden',
          opacity: 0,
          height: 0,
        }}
        className={cx('CK__Reveal', className)}
        ref={revealRef}
        aria-hidden={reveal ? 'false' : 'true'}
        {...opts}
      >
        <div className={`CK__Reveal__Content ${theme.settings.classes.trim}`}>
          {children}
        </div>
      </div>
    </Fragment>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  reveal: PropTypes.bool,
  /** GSAP callback */
  onComplete: PropTypes.func,
  /** GSAP callback */
  onReverseComplete: PropTypes.func,
  /** GSAP callback */
  onReverseStart: PropTypes.func,
  /** GSAP callback */
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
