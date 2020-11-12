import { useRef } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import clsx from 'clsx'

import { misc, text } from '../assets/styles/utility'

import Close from './Close'

export const StylesAlertBase = (theme) => [
  misc.fluidSize({
    theme,
    property: 'padding',
    from: theme.space.base,
    to: theme.space.large,
  }),
  {
    borderLeft: '8px solid transparent',
    color: theme.fontColor.base,
    borderRadius: theme.borderRadius.base,

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

  const ref = useRef()

  if (!reveal && typeof setReveal === 'function') return null

  return (
    <div
      css={[
        StylesAlertBase(theme),

        typeof setReveal === 'function' && {
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: theme.space.small,
        },

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
        {title && <h4 className="CK__Alert__Title">{title}</h4>}
        {children}
      </div>
      {typeof setReveal === 'function' && (
        <Close className="CK__Alert__Close" onClick={() => setReveal(false)} />
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
