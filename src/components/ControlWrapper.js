import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import clsx from 'clsx'

import asterisk from '../assets/icons/asterisk.svg'
import { form } from '../assets/styles/utility'

// @NOTE These are separated out so we can plug into Marketo styles more cleanly

export const StylesControlWrapperVariables = (theme) => ({
  iconSize: theme.fontSize['2xsmall'],
})

export const StylesControlWrapperRequired = (theme, props = {}) => ({
  '&::after': [
    {
      content: "''",
      backgroundImage: `url(${asterisk})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      position: 'absolute',
      right: form.variables(theme).controlOffset,
      width: StylesControlWrapperVariables(theme).iconSize,
      height: StylesControlWrapperVariables(theme).iconSize,
      opacity: theme.opacity.base,
      filter: theme.fontColor.base__filter,
      pointerEvents: 'none',
      zIndex: 2,
    },

    props.iconAlignment === 'center' && {
      top: '50%',
      transform: 'translateY(-50%)',
    },

    props.iconAlignment === 'top' && {
      top: form.variables(theme).controlOffset,
    },
  ],
})

export const StylesControlWrapperError = (theme) => ({
  borderColor: theme.color.danger.base,
  color: theme.color.danger.base,

  '&::after': {
    filter: theme.color.danger.filter,
  },
})

export const StylesControlWrapperDisabled = (theme) => ({
  opacity: theme.opacity.base,
})

export const StylesControlWrapper = (theme, props = {}) => [
  {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'minmax(auto, 1fr)',
    borderRadius: theme.borderRadius.base,
    background: theme.color.light.base,
    color: theme.fontColor.base,
    border: theme.border.base,

    '&:focus-within': {
      borderColor: theme.color.primary.base,
    },
  },

  props.required &&
    StylesControlWrapperRequired(theme, { iconAlignment: props.iconAlignment }),
  props.error && StylesControlWrapperError(theme),
  props.disabled && StylesControlWrapperDisabled(theme),
]

const ControlWrapper = ({
  className,
  required,
  iconAlignment = 'center',
  error,
  disabled,
  ...rest
}) => {
  const theme = useTheme()

  return (
    <div
      className={clsx('CK__ControlWrapper', className)}
      css={StylesControlWrapper(theme, {
        required,
        error,
        disabled,
        iconAlignment,
      })}
      {...rest}
    />
  )
}

ControlWrapper.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  iconAlignment: PropTypes.oneOf(['top', 'center']),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default ControlWrapper
