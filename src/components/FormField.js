import * as React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import Radio from './Radio'
import Checkbox from './Checkbox'
import Toggle from './Toggle'

const FormField = ({ as = 'input', name, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const Component = React.useMemo(() => {
    // eslint-disable-next-line default-case
    switch (as) {
      case 'input':
        return Input
      case 'textarea':
        return Textarea
      case 'select':
        return Select
      case 'radio':
        return Radio
      case 'checkbox':
        return Checkbox
      case 'toggle':
        return Toggle
    }
  }, [as])

  const componentProps = {
    validationMessage: errors[name]?.message ?? '',
  }

  // Remove `errorText` prop from fields that don't support `validationMessage` to avoid DOM warning
  if (['radio', 'checkbox', 'toggle'].includes(as)) {
    delete componentProps.validationMessage
  }

  return <Component ref={register} name={name} {...componentProps} {...rest} />
}

FormField.propTypes = {
  as: PropTypes.oneOf([
    'input',
    'textarea',
    'select',
    'radio',
    'checkbox',
    'toggle',
  ]),
  name: PropTypes.string.isRequired,
}

export default FormField
