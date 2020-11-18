import * as React from 'react'
import PropTypes from 'prop-types'

import FormGroup from './FormGroup'
import FormLabel from './FormLabel'
import FormFooter from './FormFooter'

const FormControlWrapper = React.forwardRef(
  (
    {
      children,
      explanationMessage,
      label,
      required,
      validationMessage,
      labelProps,
      footerProps,
      ...rest
    },
    ref
  ) => (
    <FormGroup ref={ref} {...rest}>
      <FormLabel
        required={required}
        error={!!validationMessage}
        {...labelProps}
      >
        {label}
      </FormLabel>
      {children}
      <FormFooter
        explanationMessage={explanationMessage}
        validationMessage={validationMessage}
        {...footerProps}
      />
    </FormGroup>
  )
)

FormControlWrapper.propTypes = {
  children: PropTypes.node,
  explanationMessage: PropTypes.string,
  label: PropTypes.any,
  required: PropTypes.bool,
  validationMessage: PropTypes.string,
  labelProps: PropTypes.object,
  footerProps: PropTypes.object,
}

export default FormControlWrapper
