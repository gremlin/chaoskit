import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'

import { form } from '../assets/styles/utility'
import { generateUUID } from '../helpers/utility'

import Icon, { StylesIconVariables } from './Icon'
import ControlWrapper from './ControlWrapper'
import FormGroup from './FormGroup'
import FormFooter from './FormFooter'
import ControlLabel from './ControlLabel'

export const StylesInputBase = (theme, props = {}) => [
  form.base(theme),
  {
    //  Remove default style in browsers that support `appearance`
    appearance: 'none',
  },

  // Apply default form styling, except for `file`, `submit`, `reset`, `button` and `image`
  !['file', 'submit', 'reset', 'button', 'image'].includes(props.type) &&
    form.input(theme),

  // Fix the cursor style for Chrome's increment/decrement buttons. For certain `font-size` values of the `input`, it causes the cursor style of the decrement button to change from `default` to `text`.
  props.type === 'number' && {
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      height: 'auto',
    },
  },

  // Remove inner padding and search cancel button in Chrome, Safari and Opera on OS X.
  props.type === 'search' && {
    '&::-webkit-search-cancel-button, &::-webkit-search-decoration': {
      appearance: 'none',
    },
  },
  {
    // 1. Correct the inability to style clickable types in iOS and Safari.
    // 2. Change font properties to `inherit` in Safari.
    '&::--webkit-file-upload-button': {
      appearance: 'button', // 1
      font: 'inherit', // 2
    },

    // Remove clear button in IE on inputs
    '&::ms-clear': {
      display: 'none',
    },

    // Removes `box-shadow` for invalid controls in Firefox.
    '&:invalid': {
      boxShadow: 'none',
    },
  },

  props.prefixIcon && {
    paddingLeft: `calc(${
      form.variables(theme).controlOffset + theme.space.small
    }px + ${StylesIconVariables.base})`,
  },
]

const Input = React.forwardRef(
  (
    {
      className,
      disabled,
      label,
      name,
      type,
      validationMessage,
      explanationMessage,
      prefixIcon,
      required,
      wrapperProps,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme()
    // Only regenerate this if the name prop changes
    const id = React.useMemo(() => `${name}-${generateUUID()}`, [name])

    return (
      <FormGroup>
        <ControlWrapper {...wrapperProps}>
          {label && <ControlLabel>{label}</ControlLabel>}
          <div
            css={{
              position: 'relative',
            }}
          >
            {prefixIcon && (
              <div
                css={[
                  {
                    color: theme.fontColor.muted,
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    left: form.variables(theme).controlOffset,
                    zIndex: 2,
                    pointerEvents: 'none',
                  },
                ]}
              >
                <Icon icon={prefixIcon} />
              </div>
            )}
            <input
              css={StylesInputBase(theme, {
                type,
                prefixIcon,
              })}
              className={clsx('CK__Input', className)}
              name={name}
              id={id}
              ref={ref}
              type={type}
              disabled={disabled}
              {...rest}
            />
          </div>
        </ControlWrapper>
        <FormFooter
          explanationMessage={explanationMessage}
          validationMessage={validationMessage}
        />
      </FormGroup>
    )
  }
)

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
  prefixIcon: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  wrapperProps: PropTypes.object,
}

Input.defaultProps = {
  type: 'text',
}

export default Input
