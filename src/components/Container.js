import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import clsx from 'clsx'

export const StylesContainerVariables = {
  base: 1000,
  small: 800,
  extended: 1400,
}

const Container = ({ className, size = 'base', ...rest }) => {
  const theme = useTheme()

  return (
    <div
      className={clsx('CK__Container', className)}
      css={[
        {
          width: '100%',
          margin: '0 auto',
          padding: `0 ${theme.space.base}px`,

          // Children containers should not have padding
          '.CK__Container': {
            padding: 0,
          },
        },

        size === 'base' && {
          maxWidth: StylesContainerVariables.base,
        },

        size === 'small' && {
          maxWidth: StylesContainerVariables.small,
        },

        size === 'extended' && {
          maxWidth: StylesContainerVariables.extended,
        },
      ]}
      {...rest}
    />
  )
}

Container.propTypes = {
  size: PropTypes.oneOf(['base', 'small', 'extended']),
  className: PropTypes.string,
}

export default Container
