import PropTypes from 'prop-types'
import { useField } from 'formik'

import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import Radio from './Radio'
import Checkbox from './Checkbox'
import Toggle from './Toggle'

const FormikField = ({ as, ...rest }) => {
  const [field, meta] = useField(rest)

  const getComponent = () => {
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
  }

  const Component = getComponent()

  const errorText = meta.error && meta.touched ? meta.error : ''

  const componentProps = {
    validationMessage: errorText,
  }

  // Remove `errorText` prop from fields that don't support `validationMessage` to avoid DOM warning
  if (['radio', 'checkbox', 'toggle'].includes(as)) {
    delete componentProps.validationMessage
  }

  return <Component {...field} {...rest} {...componentProps} />
}

FormikField.propTypes = {
  as: PropTypes.oneOf([
    'input',
    'textarea',
    'select',
    'radio',
    'checkbox',
    'toggle',
  ]).isRequired,
}

export default FormikField
