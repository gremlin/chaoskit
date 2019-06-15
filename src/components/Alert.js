import cx from 'classnames';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import useMount from 'react-use/lib/useMount';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import { TimelineMax } from 'gsap/TweenMax';
import { kebabCase, toLower } from 'lodash-es';

import { config } from '../helpers/config';
import { misc, text } from '../assets/styles/utility';
import Close from './Close';

export const StylesAlertDefault = theme => ({
  borderColor: theme.border.base,
  background: theme.color.panel.base,
});

export const StylesAlertPrimary = theme => ({
  borderColor: theme.color.primary.base,
  background: theme.color.primary.light,
});

export const StylesAlertWarning = theme => ({
  borderColor: theme.color.warning.base,
  background: theme.color.warning.light,
});

export const StylesAlertDanger = theme => ({
  borderColor: theme.color.danger.base,
  background: theme.color.danger.light,

  '.CK__Alert__Title, .CK__Alert__Close': {
    color: theme.color.danger.base,
  },
});

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
        pointerEvents: 'none',
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

  return (
    <div
      css={theme => [
        {
          display: 'flex',
          padding: theme.space.base,
          borderLeft: '8px solid transparent',

          '&:not(:last-child)': {
            marginBottom: theme.space.base,
          },

          [theme.mq.medium]: {
            padding: theme.space.medium,
          },

          'a:not([class]), .u-link': [
            text.underline,
            {
              color: 'currentColor',

              '&:hover, &:focus': {
                color: 'currentColor',
              },
            },
          ],
        },

        type === 'default' && StylesAlertDefault(theme),
        type === 'primary' && StylesAlertPrimary(theme),
        type === 'warning' && StylesAlertWarning(theme),
        type === 'danger' && StylesAlertDanger(theme),
      ]}
      className={cx('CK__Alert', className)}
      role="alert"
      ref={alertRef}
      {...opts}
    >
      <div
        css={[
          misc.trimChildren,
          {
            flex: 1,
          },
        ]}
        className="CK__Alert__Content"
      >
        {title && (
          <h4 id={kebabCase(toLower(title))} className="CK__Alert__Title">
            {title}
          </h4>
        )}
        {children}
      </div>
      {close && (
        <div
          css={theme => ({
            flex: 0,
            paddingLeft: theme.space.small,
          })}
        >
          <Close className="CK__Alert__Close" onClick={collapseAlert} />
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
  type: 'default',
};

export default Alert;
