/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'

import check from '../assets/icons/check.svg'
import { form } from '../assets/styles/utility'

export const StylesCheckboxVariables = {
  size: 22,
  iconSize: 12,
}

const Checkbox = ({
  className,
  disabled,
  label,
  name,
  noContrast,
  value,
  wrapperProps,
  ...props
}) => {
  const theme = useTheme()

  return (
    <label
      css={[
        {
          display: 'grid',
          gridTemplateColumns: label && 'auto 1fr',
          gap: label && theme.space.small,
          alignItems: 'start',
        },

        disabled && {
          cursor: 'not-allowed',
          opacity: theme.opacity.base,
        },
      ]}
      className={cx('CK__Checkbox', className)}
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
          css={[
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
              borderRadius: theme.settings.ui.radius && theme.borderRadius.base,
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
                  content: "''",
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: StylesCheckboxVariables.iconSize,
                  height: StylesCheckboxVariables.iconSize,
                  backgroundImage: `url(${check})`,
                  filter: theme.contrast.filter,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  zIndex: 1,
                },
              },
            },

            theme.settings.contrast.enable &&
              theme.settings.contrast.form &&
              !noContrast && {
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
          ]}
          {...props}
        />
      </div>
      {label && <span>{label}</span>}
    </label>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  name: PropTypes.string.isRequired,
  noContrast: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  wrapperProps: PropTypes.object,
}

export default Checkbox
