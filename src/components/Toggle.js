import { useMemo, useRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import { tint, shade } from 'polished'

import { generateGradient } from '../assets/styles/utility/gradient'
import { misc } from '../assets/styles/utility'
import { generateUUID } from '../helpers/utility'

import FormGroup from './FormGroup'

const StylesToggleVariables = theme => ({
  height: theme.height.xxsmall,
  get width() {
    return this.height * 1.75
  },
  get buttonSize() {
    return this.height - 6
  },
  offset: theme.space.xsmall,
  contrastBorderWidth: 1,
  background: {
    default: tint(0.65, theme.color.dark.base),
    active: theme.color.primary.base,
  },
  transition: `all ${theme.timing.base} ${theme.transition.base}`,
})

const Toggle = ({
  name,
  className,
  disabled,
  label,
  noContrast,
  value,
  wrapperProps,
  ...opts
}) => {
  const theme = useTheme()
  const toggleLabelRef = useRef()

  // Only regenerate this if the name prop changes
  const id = useMemo(() => `${name}-${generateUUID()}`, [name])

  return (
    <FormGroup {...wrapperProps}>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          verticalAlign: 'top',
        }}
        className={cx('CK__Toggle', className)}
      >
        <div
          css={{
            display: 'inline-block',
            verticalAlign: 'top',
          }}
        >
          <input
            value={value}
            type="checkbox"
            disabled={disabled}
            name={name}
            id={id}
            css={[
              misc.hide,

              {
                '&:checked': {
                  background: StylesToggleVariables(theme).background.active,

                  '+ label': {
                    background: StylesToggleVariables(theme).background.active,

                    '&::after': [
                      {
                        left:
                          StylesToggleVariables(theme).width -
                          StylesToggleVariables(theme).buttonSize -
                          StylesToggleVariables(theme).offset,
                      },

                      theme.settings.contrast.enable &&
                        theme.settings.contrast.form &&
                        !noContrast && {
                          '.u-contrast &': {
                            left:
                              StylesToggleVariables(theme).width -
                              StylesToggleVariables(theme).buttonSize -
                              StylesToggleVariables(theme).offset -
                              StylesToggleVariables(theme).contrastBorderWidth *
                                2,
                          },
                        },
                    ],
                  },
                },
              },
              {
                '&:disabled + label': {
                  cursor: 'not-allowed',
                  pointerEvents: 'none',
                  opacity: theme.opacity.base,
                },
              },
            ]}
            {...opts}
          />
          <label // eslint-disable-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
            htmlFor={id}
            ref={toggleLabelRef}
            css={[
              {
                position: 'relative',
                display: 'block',
                height: StylesToggleVariables(theme).height,
                width: StylesToggleVariables(theme).width,
                borderRadius: StylesToggleVariables(theme).height / 2,
                background: StylesToggleVariables(theme).background.default,
                userSelect: 'none',
                cursor: 'pointer',
                transition: StylesToggleVariables(theme).transition,

                '&::after': {
                  content: "''",
                  position: 'absolute',
                  left: StylesToggleVariables(theme).offset,
                  background: generateGradient({
                    start: theme.color.light.base,
                    stop: shade(0.075, theme.color.light.base),
                    position: 'to bottom right',
                  }),
                  borderRadius: '50%',
                  width: StylesToggleVariables(theme).buttonSize,
                  height: StylesToggleVariables(theme).buttonSize,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  transition: StylesToggleVariables(theme).transition,
                  boxShadow: theme.boxShadow.base,
                },
              },

              theme.settings.contrast.enable &&
                theme.settings.contrast.form &&
                !noContrast && {
                  '.u-contrast &': {
                    background: 'transparent',
                    border: `${
                      StylesToggleVariables(theme).contrastBorderWidth
                    }px solid ${theme.contrast.base}`,
                  },
                },
            ]}
          />
        </div>
        {label && (
          <label // eslint-disable-line jsx-a11y/label-has-for
            htmlFor={id}
            css={[
              {
                cursor: 'pointer',
                userSelect: 'none',
                paddingLeft: theme.space.small,
                position: 'relative',
                lineHeight: theme.lineHeight.small,
              },

              disabled && {
                cursor: 'not-allowed',
                pointerEvents: 'none',
                opacity: theme.opacity.base,
              },
            ]}
          >
            {label}
          </label>
        )}
      </div>
    </FormGroup>
  )
}

Toggle.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  noContrast: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  wrapperProps: PropTypes.object,
}

export default Toggle
