import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'
import TextareaAutoSize from 'react-textarea-autosize'

import { form } from '../assets/styles/utility'
import { generateUUID } from '../helpers/utility'

import FormFooter from './FormFooter'
import ControlWrapper from './ControlWrapper'
import FormGroup from './FormGroup'
import ControlLabel from './ControlLabel'

export const StylesTextareaBase = (theme) => [
  form.base(theme),
  form.input(theme),
  {
    // Remove default style in browsers that support `appearance`
    appearance: 'none',
    // Remove default vertical scrollbar in IE 8/9/10/11.
    overflow: 'auto',
    // Improve readability and alignment in all browsers.
    verticalAlign: 'text-top',
    // Only allow vertical resizing
    resize: 'vertical',
    // Force minimum height
    minHeight: theme.height.base * 2,
    // Allow `textarea` to be controlled via [row] more explicitly
    height: 'auto',
    // Style
    maxHeight: 300,
    // Slightly larger top padding than input
    paddingTop: form.variables(theme).controlOffset + theme.space.small,
    // Placement for floating labels
    gridRow: 1,
    gridColumn: 1,
  },
]

const Textarea = React.forwardRef(
  (
    {
      className,
      disabled,
      label,
      name,
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
    const id = React.useMemo(() => `${name}-${generateUUID()}`, [name])

    return (
      <FormGroup>
        <ControlWrapper
          required={required}
          error={Boolean(validationMessage)}
          disabled={disabled}
          iconAlignment="top"
          {...wrapperProps}
        >
          {label && <ControlLabel>{label}</ControlLabel>}
          <TextareaAutoSize
            css={StylesTextareaBase(theme, {
              required,
            })}
            className={clsx('CK__Textarea', className)}
            id={id}
            name={name}
            ref={ref}
            {...rest}
          />
        </ControlWrapper>
        <FormFooter
          explanationMessage={explanationMessage}
          validationMessage={validationMessage}
        />
      </FormGroup>
    )
  }
)

Textarea.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  wrapperProps: PropTypes.object,
}

export default Textarea
