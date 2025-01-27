import * as React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import { rgba } from 'polished'

import { generateUUID } from '../helpers/utility'
import { generateGradient } from '../assets/styles/utility/gradient'

import FormGroup from './FormGroup'
import FormFooter from './FormFooter'

export const StylesRangeVariables = (theme) => ({
  thumb: {
    size: theme.height['4xsmall'],
  },
  track: {
    height: theme.height['4xsmall'] / 3,
  },
})

const generateProgressGradient = (
  theme,
  { value = 0, min = 0, max = 0, contrast }
) => {
  const val = (value - min) / (max - min)
  const percentage = val * 100

  const baseBackground = contrast
    ? rgba(theme.color.light.base, theme.opacity.less)
    : theme.color.border.base

  return `linear-gradient(to right, ${theme.color.primary.base} 0%, ${theme.color.primary.dark} ${percentage}%, ${baseBackground} ${percentage}%)`
}

const Range = React.forwardRef(
  (
    {
      contrast,
      className,
      disabled,
      explanationMessage,
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
    const id = React.useMemo(() => `${name}-${generateUUID()}`, [name])

    return (
      <FormGroup {...wrapperProps}>
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
              contrast,
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
              borderRadius: theme.borderRadius.rounded,
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
                  transform: 'scale(1.05)',
                },

                '&::-moz-range-thumb': {
                  transform: 'scale(1.05)',
                },

                '&::-ms-thumb': {
                  transform: 'scale(1.05)',
                },
              },

              // Webkit
              '&::-webkit-slider-thumb': {
                appearance: 'none',
                height: StylesRangeVariables(theme).thumb.size,
                width: StylesRangeVariables(theme).thumb.size,
                borderRadius: theme.borderRadius.rounded,
                background: generateGradient({
                  start: theme.color.primary.dark,
                  stop: theme.color.primary.base,
                }),
                border: 0,
                transition: `transform ${theme.timing.base} ${theme.transition.base}`,
                transformOrigin: 'center center',
                boxShadow: theme.boxShadow.base,
              },

              // Firefox
              '&::-moz-range-thumb': {
                height: StylesRangeVariables(theme).thumb.size,
                width: StylesRangeVariables(theme).thumb.size,
                borderRadius: theme.borderRadius.rounded,
                background: generateGradient({
                  start: theme.color.primary.dark,
                  stop: theme.color.primary.base,
                }),
                border: 0,
                transition: `transform ${theme.timing.base} ${theme.transition.base}`,
                transformOrigin: 'center center',
                boxShadow: theme.boxShadow.small,
              },

              // Edge
              '&::-ms-thumb': {
                marginTop: 0,
                height: StylesRangeVariables(theme).thumb.size,
                width: StylesRangeVariables(theme).thumb.size,
                borderRadius: theme.borderRadius.rounded,
                background: generateGradient({
                  start: theme.color.primary.dark,
                  stop: theme.color.primary.base,
                }),
                border: 0,
                transition: `transform ${theme.timing.base} ${theme.transition.base}`,
                transformOrigin: 'center center',
                boxShadow: theme.boxShadow.small,
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
        <FormFooter
          explanationMessage={explanationMessage}
          validationMessage={validationMessage}
        />
      </FormGroup>
    )
  }
)

Range.propTypes = {
  contrast: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  validationMessage: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  wrapperProps: PropTypes.object,
}

export default Range
