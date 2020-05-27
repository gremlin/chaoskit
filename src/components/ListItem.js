import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'

const ListItem = ({ className, ...rest }) => {
  const theme = useTheme()

  return (
    <li
      css={{
        /*
        '>:last-of-type': {
          marginBottom: 0,
        },
        */

        'ul:not(.CK__Inline), ol': {
          marginTop: theme.space.base,
          paddingLeft: theme.space.base,
        },
      }}
      className={clsx(`CK__ListItem ${theme.settings.classes.trim}`, className)}
      {...rest}
    />
  )
}

ListItem.propTypes = {
  className: PropTypes.string,
}

export default ListItem
