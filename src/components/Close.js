import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'

import Button from './Button'
import Icon from './Icon'

export const StylesCloseVariables = (theme) => ({
  size: theme.fontSize.base,
})

const Close = ({ onClick, noContrast, ...rest }) => {
  const theme = useTheme()

  return (
    <Button
      type="reset"
      title="Close"
      onClick={onClick}
      css={[
        {
          // 1. To align better with headers
          color: theme.fontColor.base,
          lineHeight: theme.lineHeight.small, // 1
          width: StylesCloseVariables(theme).size,
          height: StylesCloseVariables(theme).size,
          opacity: theme.opacity.base,
          transition: `opacity ${theme.timing.base} ${theme.transition.bounce}, transform ${theme.timing.base} ${theme.transition.bounce}`,

          '&:hover, &:focus': {
            opacity: 1,
            transform: 'scale(1.15)',
          },
        },

        theme.settings.contrast.enable &&
          !noContrast && {
            '.u-contrast &': {
              color: theme.contrast.base,
            },
          },
      ]}
      {...rest}
    >
      <Icon icon="close" className="CK__Close__Icon" />
    </Button>
  )
}

Close.propTypes = {
  onClick: PropTypes.func,
  noContrast: PropTypes.bool,
}

export default Close
