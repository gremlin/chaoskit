import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from 'emotion-theming'

const Inline = ({ className, size, wrap, ...rest }) => {
  const theme = useTheme()

  return (
    <ul
      css={[
        {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          listStyle: 'none',
          padding: 0,
          margin: `-${theme.space[size]}px 0 0 -${theme.space[size]}px`,

          '> .CK__ListItem': {
            marginLeft: `${theme.space[size]}px !important`,
            marginTop: `${theme.space[size]}px !important`,
          },
        },

        !wrap && {
          whiteSpace: 'nowrap',
          flexWrap: 'nowrap',
        },
      ]}
      className={clsx('CK__Inline', className)}
      {...rest}
    />
  )
}

Inline.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'base', 'medium', 'large', 'xlarge']),
  wrap: PropTypes.bool,
}

Inline.defaultProps = {
  size: 'base',
  wrap: true,
}

export default Inline
