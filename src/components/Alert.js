import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import useMount from 'react-use/lib/useMount';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import { TimelineMax } from 'gsap/TweenMax';
import { kebabCase, toLower } from 'lodash-es';

import { config } from '../helpers/config';
import Close from './Close';

const Alert = ({
  children,
  className,
  collapse,
  onComplete,
  onReverseComplete,
  onReverseStart,
  onStart,
  close,
  title,
  type,
  ...opts
}) => {
  const alertRef = useRef();

  const attachTimeline = () => {
    const $alert = alertRef.current;

    let forward = true;
    let lastTime = 0;

    // Attach GSAP
    $alert.timeline = new TimelineMax({
      paused: true,
      onStart: () => {
        onStart();

        $alert.setAttribute('aria-hidden', true);
      },
      onUpdate: () => {
        const newTime = $alert.timeline.time();
        if (
          (forward && newTime < lastTime)
          || (!forward && newTime > lastTime)
        ) {
          forward = !forward;
          if (!forward) {
            onReverseStart();

            $alert.classList.remove(config.classes.hidden);
            $alert.classList.remove(config.classes.uHidden);

            $alert.setAttribute('aria-hidden', false);
          }
        }
        lastTime = newTime;
      },
      onComplete: () => {
        onComplete();

        $alert.classList.add(config.classes.hidden);
      },
      onReverseComplete: () => {
        onReverseComplete();
      },
    });

    $alert.timeline.to($alert, 0.5, {
      css: {
        marginTop: -$alert.offsetHeight,
        transformOrigin: 'center center',
        y: '50%',
        opacity: 0,
      },
      ease: config.easing,
    });

    if (collapse) {
      $alert.timeline.progress(1);
    }
  };

  const collapseAlert = () => {
    const $alert = alertRef.current;

    $alert.timeline.play();
  };

  const openAlert = () => {
    const $alert = alertRef.current;

    $alert.timeline.reverse();
  };

  useMount(() => {
    attachTimeline();
  });

  useUpdateEffect(
    () => {
      if (collapse) {
        collapseAlert();
      } else {
        openAlert();
      }
    },
    [collapse],
  );

  const classes = cx(
    'alert',
    {
      'alert--primary': type === 'primary',
      'alert--warning': type === 'warning',
      'alert--danger': type === 'danger',
    },
    className,
  );

  return (
    <div className={classes} role="alert" ref={alertRef} {...opts}>
      <div className="alert-content">
        {title && (
          <h4 id={kebabCase(toLower(title))} className="alert-title">
            {title}
          </h4>
        )}
        {children}
      </div>
      {close && (
        <div className="alert-right">
          <Close className="alert-close" onClick={collapseAlert} />
        </div>
      )}
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  collapse: PropTypes.bool,
  /** GSAP callback */
  onComplete: PropTypes.func,
  /** GSAP callback */
  onReverseComplete: PropTypes.func,
  /** GSAP callback */
  onReverseStart: PropTypes.func,
  /** GSAP callback */
  onStart: PropTypes.func,
  close: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.oneOf(['default', 'primary', 'warning', 'danger']),
};

Alert.defaultProps = {
  onComplete: () => {},
  onReverseComplete: () => {},
  onReverseStart: () => {},
  onStart: () => {},
  collapse: false,
};

export default Alert;
