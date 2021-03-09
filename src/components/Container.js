import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import clsx from 'clsx'

export const StylesContainerVariables = {
  small: 800,
  base: 1000,
  large: 1200,
  extended: 1400,
}

const Container = ({ className, size = 'base', ...rest }) => {
  const theme = useTheme()

  return (
    <div
      className={clsx('CK__Container', className)}
      css={{
        width: '100%',
        margin: '0 auto',
        padding: `0 ${theme.space.base}px`,
        maxWidth: StylesContainerVariables[size],

        // Children containers should not have padding
        '.CK__Container': {
          padding: 0,
        },
      }}
      {...rest}
    />
  )
}

Container.propTypes = {
  size: PropTypes.oneOf(['base', 'small', 'large', 'extended']),
  className: PropTypes.string,
}

export default Container
