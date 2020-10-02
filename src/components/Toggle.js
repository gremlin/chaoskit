/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import { forwardRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from 'emotion-theming'
import { tint, shade } from 'polished'

import { generateGradient } from '../assets/styles/utility/gradient'
import { form } from '../assets/styles/utility'
import { generateUUID } from '../helpers/utility'

import FormGroup from './FormGroup'

const StylesToggleVariables = (theme) => ({
  height: theme.height.xxxsmall,
  get width() {
    return this.height * 2
  },
  buttonSizeOffset: 6,
  get buttonSize() {
    return this.height - this.buttonSizeOffset
  },
  offset: theme.space.xsmall,
  contrastBorderWidth: 1,
  background: {
    default: tint(0.75, theme.color.dark.base),
    active: theme.color.primary.base,
  },
  transition: `all ${theme.timing.base} ${theme.transition.base}`,
})

const Toggle = forwardRef(
  (
    {
      name,
      className,
      disabled,
      label,
      noContrast,
      value,
      wrapperProps,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme()

    // Only regenerate this if the name prop changes
    const id = useMemo(() => `${name}-${generateUUID()}`, [name])

    return (
      <FormGroup {...wrapperProps}>
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
              pointerEvents: 'none',
              opacity: theme.opacity.base,
            },
          ]}
          className={clsx('CK__Toggle', className)}
        >
          {/* Wrapper trick with zero-width space character that provides "centered top alignment" */}
          <div css={{ display: 'flex', alignItems: 'center' }}>
            &#8203;
            <input
              type="checkbox"
              disabled={disabled}
              name={name}
              id={id}
              value={value}
              ref={ref}
              css={[
                form.base(theme),
                {
                  appearance: 'none',
                  position: 'relative',
                  width: StylesToggleVariables(theme).width,
                  height: StylesToggleVariables(theme).height,
                  borderRadius: StylesToggleVariables(theme).height / 2,
                  background: StylesToggleVariables(theme).background.default,
                  cursor: 'pointer',
                  transition: StylesToggleVariables(theme).transition,

                  '&::after': {
                    content: "''",
                    position: 'absolute',
                    transform: `translate(calc(${
                      StylesToggleVariables(theme).offset
                    }px), -50%)`,
                    background: generateGradient({
                      start: theme.color.light.base,
                      stop: shade(0.075, theme.color.light.base),
                      position: 'to bottom right',
                    }),
                    borderRadius: '50%',
                    width: StylesToggleVariables(theme).buttonSize,
                    height: StylesToggleVariables(theme).buttonSize,
                    top: '50%',
                    zIndex: 1,
                    transition: StylesToggleVariables(theme).transition,
                    boxShadow: theme.boxShadow.base,
                  },

                  '&:checked': {
                    background: StylesToggleVariables(theme).background.active,

                    '&::after': {
                      transform: `translate(calc(200% - ${
                        StylesToggleVariables(theme).offset
                      }px - ${
                        StylesToggleVariables(theme).buttonSizeOffset
                      }px), -50%)`,
                    },
                  },
                },

                theme.settings.contrast.enable &&
                  theme.settings.contrast.form &&
                  !noContrast && {
                    '.u-contrast &': {
                      boxShadow: `inset 0 0 0 1px ${theme.contrast.base}`,
                      backgroundColor: 'transparent',

                      '&:checked': {
                        backgroundColor: 'transparent',
                      },
                    },
                  },
              ]}
              {...rest}
            />
          </div>
          {label && <span>{label}</span>}
        </label>
      </FormGroup>
    )
  }
)

Toggle.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  noContrast: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  wrapperProps: PropTypes.object,
}

export default Toggle
