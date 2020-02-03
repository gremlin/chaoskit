import { useContext } from 'react'
import PropTypes from 'prop-types'

import { RadioGroupContext } from './RadioGroup'

import Radio from './Radio'

const RadioWithContext = ({ value, ...props }) => {
  const { selectedValue, name, onChange, noContrast } = useContext(
    RadioGroupContext
  )

  return (
    <Radio
      name={name}
      onChange={onChange}
      noContrast={noContrast}
      value={value}
      checked={value === selectedValue}
      {...props}
    />
  )
}

RadioWithContext.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default RadioWithContext
