/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'

import check from '../assets/icons/check.svg'
import { form } from '../assets/styles/utility'

import FormChoiceLabel from './FormChoiceLabel'

export const StylesCheckboxVariables = {
  size: 24,
}

export const StylesCheckboxBase = (theme, props = {}) => [
  form.base(theme),
  // 1. Style
  // 2. Make box Make box more robust so it clips the child element
  // 3. Remove default style
  // 4. Fix background on iOS
  // 5. Don't collapse
  {
    // 1
    width: StylesCheckboxVariables.size,
    height: StylesCheckboxVariables.size,
    verticalAlign: 'middle',
    borderRadius: theme.borderRadius.base,
    border: theme.border.base,
    boxShadow: theme.boxShadow.base,
    position: 'relative',
    // 2
    overflow: 'hidden',
    // 3
    appearance: 'none',
    // 4
    backgroundColor: theme.color.light.base,
    // 5
    flex: 'none',
    transition: `border-color ${theme.timing.base} ${theme.transition.base}, background ${theme.timing.base} ${theme.transition.base}`,

    '&::after': {
      content: "''",
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: theme.fontSize.base,
      height: theme.fontSize.base,
      backgroundImage: `url(${check})`,
      filter: theme.contrast.filter,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      zIndex: 1,
      opacity: 0,
      transition: `opacity ${theme.timing.base} ${theme.transition.base}`,
    },

    '&:not(:disabled)': {
      cursor: 'pointer',
    },

    '&:disabled': {
      backgroundColor: theme.color.panel.base,
    },

    '&:checked': {
      backgroundColor: theme.color.primary.base,
      color: theme.contrast.base,
      borderColor: theme.color.primary.dark,

      '&::after': {
        opacity: 1,
      },
    },
  },

  theme.settings.contrast.enable &&
    theme.settings.contrast.form &&
    !props.noContrast && {
      '.u-contrast &': {
        borderColor: theme.contrast.base,
        background: 'transparent',

        '&:disabled': {
          backgroundColor: form.variables(theme).contrast.background,
        },

        '&:checked': {
          backgroundColor: 'transparent',
        },
      },
    },
]

const Checkbox = React.forwardRef(
  (
    {
      className,
      disabled,
      label,
      name,
      noContrast,
      value,
      wrapperProps,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme()

    return (
      <FormChoiceLabel
        label={label}
        disabled={disabled}
        className={clsx('CK__Checkbox', className)}
        {...wrapperProps}
      >
        {/* Wrapper trick with zero-width space character that provides "centered top alignment" */}
        <div css={{ display: 'flex', alignItems: 'center' }}>
          &#8203;
          <input
            type="checkbox"
            disabled={disabled}
            name={name}
            value={value}
            ref={ref}
            css={[StylesCheckboxBase(theme, { noContrast })]}
            {...rest}
          />
        </div>
        {label && <span>{label}</span>}
      </FormChoiceLabel>
    )
  }
)

Checkbox.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  name: PropTypes.string.isRequired,
  noContrast: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  wrapperProps: PropTypes.object,
}

export default Checkbox
