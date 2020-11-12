import { useMemo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'
import TextareaAutoSize from 'react-textarea-autosize'

import { form } from '../assets/styles/utility'
import { generateUUID } from '../helpers/utility'

import FormControlWrapper from './FormControlWrapper'

export const StylesTextareaBase = (theme, props = {}) => [
  form.base(theme),
  form.input(theme, {
    error: props.validationMessage,
    noContrast: props.noContrast,
  }),
  {
    // Remove default style in browsers that support `appearance`
    appearance: 'none',

    // Remove default vertical scrollbar in IE 8/9/10/11.
    overflow: 'auto',
    // Improve readability and alignment in all browsers.
    verticalAlign: 'top',
    // Only allow vertical resizing
    resize: 'vertical',
    // Force minimum height
    minHeight: theme.height.base * 2,
    // Allow `textarea` to be controlled via [row] more explicitly
    height: 'auto',
    // Style
    padding: `${theme.space.small + theme.space.xsmall}px ${
      theme.space.base
    }px`,
    maxHeight: 300,
  },
]

const Textarea = forwardRef(
  (
    {
      className,
      label,
      name,
      noContrast,
      validationMessage,
      explanationMessage,
      required,
      wrapperProps,
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
        <TextareaAutoSize
          css={[
            StylesTextareaBase(theme, {
              validationMessage,
              noContrast,
            }),
          ]}
          className={clsx('CK__Textarea', className)}
          id={id}
          name={name}
          ref={ref}
          {...rest}
        />
      </FormControlWrapper>
    )
  }
)

Textarea.propTypes = {
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  noContrast: PropTypes.bool,
  wrapperProps: PropTypes.object,
}

export default Textarea
