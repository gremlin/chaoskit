import { Children, createContext } from 'react'
import PropTypes from 'prop-types'

import FormControlWrapper from './FormControlWrapper'

export const RadioGroupContext = createContext()
export const RadioGroupProvider = RadioGroupContext.Provider

const RadioGroup = ({
  children,
  className,
  explanationMessage,
  label,
  name,
  noContrast,
  onChange,
  selectedValue,
  validationMessage,
  required,
  ...rest
}) => {
  const renderChildren = () =>
    Children.map(children, child => {
      const onChangeFunc = e => {
        onChange(e)
      }

      return (
        <RadioGroupProvider
          value={{ selectedValue, name, onChange: onChangeFunc, noContrast }}
        >
          {child}
        </RadioGroupProvider>
      )
    })

  return (
    <FormControlWrapper
      label={label}
      labelProps={{ as: 'div' }}
      required={required}
      validationMessage={validationMessage}
      explanationMessage={explanationMessage}
      {...rest}
    >
      {renderChildren()}
    </FormControlWrapper>
  )
}

RadioGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  noContrast: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  validationMessage: PropTypes.string,
  required: PropTypes.bool,
}

export default RadioGroup
