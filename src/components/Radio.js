/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'

import { form } from '../assets/styles/utility'

import FormChoiceLabel from './FormChoiceLabel'

export const StylesRadioVariables = {
  size: 22,
  iconSize: 10,
}

export const StylesRadioBase = (theme, props = {}) => [
  form.base(theme),
  // 1. Style
  // 2. Make box Make box more robust so it clips the child element
  // 3. Remove default style
  // 4. Fix background on iOS
  {
    // 1
    width: StylesRadioVariables.size,
    height: StylesRadioVariables.size,
    borderRadius: theme.borderRadius.rounded,
    border: theme.border.base,
    boxShadow: theme.BETA__boxShadow.base,
    position: 'relative',
    verticalAlign: 'middle',
    transition: `border-color ${theme.timing.base} ${theme.transition.base}, background ${theme.timing.base} ${theme.transition.base}`,

    // 2
    overflow: 'hidden',
    // 3
    appearance: 'none',
    // 4
    backgroundColor: theme.color.light.base,

    '&::after': {
      content: "''",
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: StylesRadioVariables.iconSize,
      height: StylesRadioVariables.iconSize,
      borderRadius: theme.borderRadius.rounded,
      border: '1px solid',
      borderColor: theme.color.primary.dark,
      backgroundColor: theme.contrast.base,
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
        backgroundColor: 'transparent',

        '&:disabled': {
          backgroundColor: form.variables(theme).contrast.background,
        },

        '&:checked': {
          backgroundColor: 'transparent',

          '&::after': {
            border: 0,
          },
        },
      },
    },
]

const Radio = ({
  className,
  disabled,
  label,
  name,
  value,
  noContrast,
  onChange,
  wrapperProps,
  ...rest
}) => {
  const theme = useTheme()

  return (
    <FormChoiceLabel
      label={label}
      disabled={disabled}
      className={clsx('CK__Radio', className)}
      {...wrapperProps}
    >
      {/* Wrapper trick with zero-width space character that provides "centered top alignment" */}
      <div css={{ display: 'flex', alignItems: 'center' }}>
        &#8203;
        <input
          type="radio"
          name={name}
          disabled={disabled}
          value={value}
          onChange={onChange}
          css={[StylesRadioBase(theme, { noContrast })]}
          {...rest}
        />
      </div>
      {label && <span>{label}</span>}
    </FormChoiceLabel>
  )
}

Radio.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string.isRequired,
  noContrast: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  wrapperProps: PropTypes.object,
}

export default Radio
