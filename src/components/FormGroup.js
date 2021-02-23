import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const FormGroup = React.forwardRef(({ className, ...rest }, ref) => {
  return (
    <div className={clsx('CK__FormGroup', className)} ref={ref} {...rest} />
  )
})

FormGroup.propTypes = {
  className: PropTypes.string,
}

export default FormGroup
