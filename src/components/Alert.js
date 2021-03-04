import * as React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import clsx from 'clsx'

import { text } from '../assets/styles/utility'

import Close from './Close'

export const StylesAlertBase = (theme) => [
  {
    borderLeft: '8px solid transparent',
    color: theme.fontColor.base,
    borderRadius: theme.borderRadius.base,
    padding: theme.space.base,
    position: 'relative',

    [theme.mq.medium]: {
      padding: theme.space.large,
    },

    'a:not([class]), a[class=""], .u-link': [
      text.underline,
      {
        color: 'currentColor',

        '&:hover, &:focus': {
          color: 'currentColor',
        },
      },
    ],
  },
]

export const StylesAlertDefault = (theme) => ({
  borderColor: theme.color.border.base,
  background: theme.color.panel.base,
})

export const StylesAlertPrimary = (theme) => ({
  borderColor: theme.color.primary.base,
  background: theme.color.primary.light,
})

export const StylesAlertWarning = (theme) => ({
  borderColor: theme.color.warning.base,
  background: theme.color.warning.light,
})

export const StylesAlertDanger = (theme) => ({
  borderColor: theme.color.danger.base,
  background: theme.color.danger.light,

  '.CK__Alert__Title, .CK__Alert__Close': {
    color: theme.color.danger.base,
  },
})

const Alert = ({
  children,
  className,
  reveal,
  setReveal,
  title,
  type = 'default',
  ...rest
}) => {
  const theme = useTheme()

  const ref = React.useRef()

  if (!reveal && typeof setReveal === 'function') return null

  return (
    <div
      css={[
        StylesAlertBase(theme),

        type === 'default' && StylesAlertDefault(theme),
        type === 'primary' && StylesAlertPrimary(theme),
        type === 'warning' && StylesAlertWarning(theme),
        type === 'danger' && StylesAlertDanger(theme),
      ]}
      className={clsx('CK__Alert', className)}
      role="alert"
      ref={ref}
      {...rest}
    >
      <div className={`CK__Alert__Content ${theme.settings.classes.trim}`}>
        {title && (
          <div
            css={{
              ...theme.text.xlarge__fluid,
              fontWeight: theme.fontWeight.bold,
            }}
            className="CK__Alert__Title"
          >
            {title}
          </div>
        )}
        {children}
      </div>
      {typeof setReveal === 'function' && (
        <Close
          css={{
            position: 'absolute',
            top: theme.space.small,
            right: theme.space.small,
            zIndex: 1,

            [theme.mq.medium]: {
              top: theme.space.base,
              right: theme.space.base,
            },
          }}
          className="CK__Alert__Close"
          onClick={() => setReveal(false)}
        />
      )}
    </div>
  )
}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Animation callback */
  onComplete: PropTypes.func,
  /** Animation callback */
  onReverseComplete: PropTypes.func,
  reveal: PropTypes.bool,
  setReveal: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.oneOf(['default', 'primary', 'warning', 'danger']),
}

export default Alert
