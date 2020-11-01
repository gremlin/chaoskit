import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'

import { StylesAvatarVariables } from './Avatar'

const AvatarGroup = ({ size = 'base', ...rest }) => {
  const theme = useTheme()

  return (
    <div
      css={{
        display: 'flex',

        '.CK__Avatar': {
          boxShadow: `0 0 0 2px ${theme.color.light.base}`,
          marginTop: 0,

          '&:not(:first-of-type)': {
            marginLeft: -StylesAvatarVariables(theme).size[size] / 4,
          },
        },
      }}
      {...rest}
    />
  )
}

AvatarGroup.propTypes = {
  size: PropTypes.oneOf(['xsmall', 'small', 'base', 'large']),
}

export default AvatarGroup
