import * as React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'

import { form } from '../assets/styles/utility'
import { generateUUID } from '../helpers/utility'
import caretDouble from '../assets/icons/caret-double.svg'

import FormFooter from './FormFooter'
import FormGroup from './FormGroup'
import ControlLabel from './ControlLabel'
import ControlWrapper, { StylesControlWrapperVariables } from './ControlWrapper'

export const StylesSelectVariables = (theme, props = {}) => ({
  iconSize: theme.fontSize.small,
  get arrow() {
    return {
      content: "''",
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right:
        form.variables(theme).controlOffset +
        (props.required ? this.iconSize : 0),
      backgroundImage: `url(${caretDouble})`,
      filter: theme.fontColor.base__filter,
      width: this.iconSize,
      height: this.iconSize,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      pointerEvents: 'none',
      zIndex: '2',
    }
  },
  get arrowOffset() {
    return (
      form.variables(theme).controlOffset +
      (props.required
        ? this.iconSize +
          StylesControlWrapperVariables(theme).iconSize +
          theme.space.small
        : 0)
    )
  },
})

export const StylesSelectWrapperBase = (theme, props = {}) => [
  {
    position: 'relative',
  },

  !props.multiple &&
    !props.size && {
      '&::after': StylesSelectVariables(theme, { required: props.required })
        .arrow,
    },
]

export const StylesSelectBase = (theme, props = {}) => [
  form.base(theme),
  form.input(theme),
  {
    // Remove default style in browsers that support `appearance`
    appearance: 'none',
    // Remove the inheritance of text transform in Firefox.
    textTransform: 'none',

    // Remove select arrows from IE
    '&::-ms-expand': {
      display: 'none',
    },

    option: {
      fontColor: theme.fontColor.base,
    },

    // 1. Change font properties to `inherit` in all browsers
    // 2. Don't inherit the `font-weight` and use `bold` instead.
    // @NOTE: Both declarations don't work in Chrome, Safari and Opera.

    optgroup: {
      font: 'inherit', // 1
      fontWeight: theme.fontWeight.bold, // 2
    },
  },

  !props.multiple &&
    !props.size && {
      paddingRight: StylesSelectVariables(theme, { required: props.required })
        .arrowOffset,
    },

  (props.multiple || props.size) && [
    {
      height: 'auto',
      padding: 0,
      maxHeight: 150,

      option: {
        padding: form.variables(theme).padding,
      },
    },
  ],
]

const Select = React.forwardRef(
  (
    {
      className,
      disabled,
      explanationMessage,
      label,
      size,
      multiple,
      name,
      required,
      validationMessage,
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
        <ControlWrapper
          required={required}
          error={Boolean(validationMessage)}
          disabled={disabled}
          {...wrapperProps}
        >
          {label && <ControlLabel>{label}</ControlLabel>}
          <div
            css={[
              StylesSelectWrapperBase(theme, {
                multiple,
                size,
                required,
              }),
            ]}
            className={clsx('CK__Select', className)}
          >
            <select
              ref={ref}
              id={id}
              name={name}
              multiple={multiple}
              disabled={disabled}
              size={size}
              css={[
                StylesSelectBase(theme, {
                  multiple,
                  size,
                  required,
                }),
              ]}
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

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  label: PropTypes.string,
  multiple: PropTypes.bool,
  size: PropTypes.number,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  validationMessage: PropTypes.string,
  wrapperProps: PropTypes.object,
}

export default Select
