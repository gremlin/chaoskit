import { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import useUpdateEffect from 'react-use/lib/useUpdateEffect'
import gsap from 'gsap'
import { kebabCase, toLower } from 'lodash-es'
import { useTheme } from 'emotion-theming'

import { misc, text } from '../assets/styles/utility'

import Close from './Close'

export const StylesAlertBase = theme => ({
  display: 'flex',
  padding: theme.space.base,
  borderLeft: '8px solid transparent',
  color: theme.fontColor.base,

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
})

export const StylesAlertDefault = theme => ({
  borderColor: theme.border.base,
  background: theme.color.panel.base,
})

export const StylesAlertPrimary = theme => ({
  borderColor: theme.color.primary.base,
  background: theme.color.primary.light,
})

export const StylesAlertWarning = theme => ({
  borderColor: theme.color.warning.base,
  background: theme.color.warning.light,
})

export const StylesAlertDanger = theme => ({
  borderColor: theme.color.danger.base,
  background: theme.color.danger.light,

  '.CK__Alert__Title, .CK__Alert__Close': {
    color: theme.color.danger.base,
  },
})

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
  ...rest
}) => {
  const theme = useTheme()

  const alertRef = useRef()
  const [hidden, setHidden] = useState(false)

  const handleOnComplete = () => {
    setHidden(true)

    onComplete()
  }

  const handleOnReverseStart = () => {
    setHidden(false)

    onReverseStart()
  }

  const attachTimeline = () => {
    const $alert = alertRef.current

    let forward = true
    let lastTime = 0

    // Attach GSAP
    $alert.timeline = gsap.timeline({
      paused: true,
      onStart: () => {
        onStart()
      },
      onUpdate: () => {
        const newTime = $alert.timeline.time()

        if (
          (forward && newTime < lastTime) ||
          (!forward && newTime > lastTime)
        ) {
          forward = !forward
          if (!forward) {
            handleOnReverseStart()
          }
        }
        lastTime = newTime
      },
      onComplete: () => {
        handleOnComplete()
      },
      onReverseComplete: () => {
        onReverseComplete()
      },
    })

    $alert.timeline.to($alert, {
      duration: theme.gsap.timing.long,
      marginTop: -$alert.offsetHeight,
      transformOrigin: 'center center',
      y: '50%',
      opacity: 0,
      ease: theme.gsap.transition.base,
    })

    if (collapse) {
      $alert.timeline.progress(1)
    }
  }

  const collapseAlert = () => {
    const $alert = alertRef.current

    if ($alert && $alert.timeline) $alert.timeline.play()
  }

  const openAlert = () => {
    const $alert = alertRef.current

    if ($alert && $alert.timeline) $alert.timeline.reverse()
  }

  useEffect(() => {
    attachTimeline()
  }, [])

  useUpdateEffect(() => {
    if (collapse) {
      collapseAlert()
    } else {
      openAlert()
    }
  }, [collapse])

  return (
    <div
      css={[
        StylesAlertBase(theme),

        hidden && misc.hide,

        type === 'default' && StylesAlertDefault(theme),
        type === 'primary' && StylesAlertPrimary(theme),
        type === 'warning' && StylesAlertWarning(theme),
        type === 'danger' && StylesAlertDanger(theme),
      ]}
      className={cx('CK__Alert', className)}
      role="alert"
      ref={alertRef}
      aria-hidden={hidden ? 'true' : 'false'}
      {...rest}
    >
      <div
        css={{
          flex: 1,
        }}
        className={`CK__Alert__Content ${theme.settings.classes.trim}`}
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
          css={{
            flex: 0,
            paddingLeft: theme.space.small,
          }}
        >
          <Close className="CK__Alert__Close" onClick={collapseAlert} />
        </div>
      )}
    </div>
  )
}

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
}

Alert.defaultProps = {
  onComplete: () => {},
  onReverseComplete: () => {},
  onReverseStart: () => {},
  onStart: () => {},
  collapse: false,
  type: 'default',
}

export default Alert
