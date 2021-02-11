import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'

import asterisk from '../assets/icons/asterisk.svg'
import { form } from '../assets/styles/utility'

// @NOTE These are separated out so we can plug into Marketo styles more cleanly

export const StylesControlWrapperVariables = (theme) => ({
  iconSize: theme.fontSize.xxsmall,
})

export const StylesControlWrapperRequired = (theme) => ({
  '&::after': {
    content: "''",
    backgroundImage: `url(${asterisk})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: form.variables(theme).controlOffset,
    width: StylesControlWrapperVariables(theme).iconSize,
    height: StylesControlWrapperVariables(theme).iconSize,
    opacity: theme.opacity.base,
    pointerEvents: 'none',
  },
})

export const StylesControlWrapperError = (theme) => ({
  borderColor: theme.color.danger.base,
  color: theme.color.danger.base,
})

export const StylesControlWrapperDisabled = (theme) => ({
  opacity: theme.opacity.base,
})

export const StylesControlWrapper = (theme, props = {}) => [
  {
    position: 'relative',
    borderRadius: theme.borderRadius.base,
    boxShadow: theme.boxShadow.inset,
    background: theme.color.light.base,
    color: theme.fontColor.muted,
    border: theme.border.base,
  },

  props.required && StylesControlWrapperRequired(theme),
  props.error && StylesControlWrapperError(theme),
  props.disabled && StylesControlWrapperDisabled(theme),
]

const ControlWrapper = ({ required, error, disabled, ...rest }) => {
  const theme = useTheme()

  return (
    <div
      css={StylesControlWrapper(theme, { required, error, disabled })}
      {...rest}
    />
  )
}

ControlWrapper.propTypes = {
  error: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default ControlWrapper
