import { forwardRef, useMemo } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'

import { generateUUID } from '../helpers/utility'

import FormControlWrapper from './FormControlWrapper'

const StylesRangeVariables = (theme) => ({
  thumb: {
    size: theme.height.xxxsmall,
  },
  track: {
    height: theme.height.xxxsmall / 3,
  },
})

const generateProgressGradient = (theme, { value = 0, min = 0, max = 0 }) => {
  const val = (value - min) / (max - min)
  const percentage = val * 100

  return `linear-gradient(to right, ${theme.color.primary.base} 0%, ${theme.color.primary.dark} ${percentage}%, ${theme.color.border.base} ${percentage}%)`
}

const Range = forwardRef(
  (
    {
      className,
      disabled,
      explanationMessage,
      label,
      name,
      required,
      validationMessage,
      wrapperProps,
      min,
      max,
      value,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme()
    // Only regenerate this if the name prop changes
    const id = useMemo(() => `${name}-${generateUUID()}`, [name])

    return (
      <FormControlWrapper
        required={required}
        label={label}
        labelProps={{
          htmlFor: id,
        }}
        explanationMessage={explanationMessage}
        validationMessage={validationMessage}
        {...wrapperProps}
      >
        <input
          type="range"
          ref={ref}
          id={id}
          name={name}
          disabled={disabled}
          className={clsx('CK__Range', className)}
          min={min}
          max={max}
          value={value}
          style={{
            background: generateProgressGradient(theme, {
              value,
              min,
              max,
            }),
          }}
          css={[
            {
              // 1. Normalize and defaults
              // 2. Prevent content overflow if a fixed width is used
              // 3. Style

              // 1
              boxSizing: 'border-box',
              margin: 0,
              verticalAlign: 'middle',
              appearance: 'none',
              borderRadius: StylesRangeVariables(theme).track.height / 2,
              height: StylesRangeVariables(theme).track.height,
              padding: 0,
              // 2
              maxWidth: '100%',
              // 3
              width: '100%',

              '&::-moz-focus-outer': {
                border: 0,
              },

              //
              // Thumb
              //

              // @NOTE These styles cannot be combined similarly to how highlight selectors work in CSS
              '&:hover, &:focus': {
                '&::-webkit-slider-thumb': {
                  boxShadow: theme.boxShadow.base,
                  transform: 'scale(1.15)',
                },

                '&::-moz-range-thumb': {
                  boxShadow: theme.boxShadow.base,
                  transform: 'scale(1.15)',
                },

                '&::-ms-thumb': {
                  boxShadow: theme.boxShadow.base,
                  transform: 'scale(1.15)',
                },
              },

              '&:focus': {
                '&::-webkit-slider-thumb': {
                  borderColor: theme.color.primary.base,
                },

                '&::-moz-range-thumb': {
                  borderColor: theme.color.primary.base,
                },

                '&::-ms-thumb': {
                  borderColor: theme.color.primary.base,
                },
              },

              // Webkit
              '&::-webkit-slider-thumb': {
                appearance: 'none',
                height: StylesRangeVariables(theme).thumb.size,
                width: StylesRangeVariables(theme).thumb.size,
                borderRadius: '50%',
                background: theme.color.light.base,
                border: theme.border.base,
                transition: `transform ${theme.timing.base} ${theme.transition.base}`,
                transformOrigin: 'center center',
              },

              // Firefox
              '&::-moz-range-thumb': {
                height: StylesRangeVariables(theme).thumb.size,
                width: StylesRangeVariables(theme).thumb.size,
                borderRadius: '50%',
                background: theme.color.light.base,
                border: theme.border.base,
                transition: `transform ${theme.timing.base} ${theme.transition.base}`,
                transformOrigin: 'center center',
              },

              // Edge
              '&::-ms-thumb': {
                marginTop: 0,
                height: StylesRangeVariables(theme).thumb.size,
                width: StylesRangeVariables(theme).thumb.size,
                borderRadius: '50%',
                background: theme.color.light.base,
                border: theme.border.base,
                transition: `transform ${theme.timing.base} ${theme.transition.base}`,
                transformOrigin: 'center center',
              },

              '&::-ms-tooltip': {
                display: 'none',
              },

              //
              // Track
              //

              // We handle all these styles in the main `input`
              '&::-webkit-slider-runnable-track, &::-moz-range-track, &::-ms-fill-lower, &::-ms-fill-upper': {
                height: StylesRangeVariables(theme).track.height,
                background: 'transparent',
              },
            },

            disabled && {
              opacity: theme.opacity.base,
              cursor: 'not-allowed',
            },
          ]}
          {...rest}
        />
      </FormControlWrapper>
    )
  }
)

Range.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  validationMessage: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  wrapperProps: PropTypes.object,
}

export default Range
