import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import clsx from 'clsx'

const DropdownHeader = ({ children, className, ...rest }) => {
  const theme = useTheme()

  return (
    <h5
      css={{
        color: `${theme.fontColor.muted} !important`,
        fontSize: theme.fontSize.xsmall,

        '&:not(:first-of-type)': {
          marginTop: 0,
        },
      }}
      className={clsx('CK__DropdownHeader', className)}
      {...rest}
    >
      {children}
    </h5>
  )
}

DropdownHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default DropdownHeader
