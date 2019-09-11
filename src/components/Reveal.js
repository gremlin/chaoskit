import { Fragment, useRef, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import useMount from 'react-use/lib/useMount';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import { TimelineMax } from 'gsap/TweenMax';
import { useTheme } from 'emotion-theming';

import Button from './Button';
import { misc } from '../assets/styles/utility';

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
  const [hidden, setHidden] = useState(true);

  const handleOnStart = () => {
    setHidden(false);

    onStart();
  };

  const handleOnReverseStart = () => {
    setHidden(true);

    onReverseStart();
  };

  const attachTimeline = () => {
    const $reveal = revealRef.current;

    let forward = true;
    let lastTime = 0;

    // Attach GSAP
    $reveal.timeline = new TimelineMax({
      paused: true,
      onStart: () => {
        handleOnStart();

        // Set initial height to `auto`
        $reveal.style.height = 'auto';
      },
      onUpdate: () => {
        const newTime = $reveal.timeline.time();

        if (
          (forward && newTime < lastTime) ||
          (!forward && newTime > lastTime)
        ) {
          forward = !forward;
          if (!forward) {
            handleOnReverseStart();
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
      .from($reveal, theme.gsap.timing.long, {
        css: {
          height: 0,
          opacity: 0,
        },
        ease: theme.gsap.transition.base,
      });

    if (reveal) {
      $reveal.timeline.progress(1);
    }
  };

  const revealOpen = () => {
    const $reveal = revealRef.current;

    if ($reveal && $reveal.timeline) $reveal.timeline.play();
  };

  const revealClose = () => {
    const $reveal = revealRef.current;

    if ($reveal && $reveal.timeline) $reveal.timeline.reverse();
  };

  const handleRevealToggle = () => {
    const $reveal = revealRef.current;

    if ($reveal.timeline.progress() === 1) {
      revealClose();
    } else {
      revealOpen();
    }
  };

  useMount(() => {
    attachTimeline();
  });

  useUpdateEffect(() => {
    if (reveal) {
      revealOpen();
    } else {
      revealClose();
    }
  }, [reveal]);

  return (
    <Fragment>
      <Button active={!hidden} onClick={handleRevealToggle} {...trigger.props}>
        {trigger.label}
      </Button>
      <div
        css={{
          // Take care of overflowing content
          overflow: 'hidden',
          display: 'none',
        }}
        className={cx('CK__Reveal', className)}
        ref={revealRef}
        aria-hidden={hidden ? 'true' : 'false'}
        {...opts}
      >
        <div css={misc.trimChildren} className="CK__Reveal__Content">
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
