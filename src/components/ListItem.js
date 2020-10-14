import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import { forwardRef } from 'react'

const ListItem = forwardRef(({ className, ...rest }, ref) => {
  const theme = useTheme()

  return (
    <li
      ref={ref}
      css={{
        'ul:not(.CK__Inline), ol': {
          marginTop: theme.space.base,
          paddingLeft: theme.space.base,
        },
      }}
      className={clsx(`CK__ListItem ${theme.settings.classes.trim}`, className)}
      {...rest}
    />
  )
})

ListItem.propTypes = {
  className: PropTypes.string,
}

export default ListItem
