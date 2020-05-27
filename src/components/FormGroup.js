import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from 'emotion-theming'

const FormGroup = forwardRef(({ className, ...rest }, ref) => {
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
