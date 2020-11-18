import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'

const FormGroup = React.forwardRef(({ className, ...rest }, ref) => {
  const theme = useTheme()

  return (
    <div
      css={{
        '+ .CK__FormGroup': {
          marginTop: theme.space.base,
        },
      }}
      className={clsx('CK__FormGroup', className)}
      ref={ref}
      {...rest}
    />
  )
})

FormGroup.propTypes = {
  className: PropTypes.string,
}

export default FormGroup
