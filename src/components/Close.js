import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import { motion } from 'framer-motion'

import Button from './Button'
import Icon from './Icon'

export const StylesCloseVariables = (theme) => ({
  size: theme.fontSize.base,
})

const Close = ({ onClick, noContrast, ...rest }) => {
  const theme = useTheme()

  return (
    <Button
      as={motion.button}
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
          transition: 'auto',
        },

        theme.settings.contrast.enable &&
          !noContrast && {
            '.u-contrast &': {
              color: theme.contrast.base,
            },
          },
      ]}
      style={{
        opacity: theme.opacity.base,
      }}
      whileHover={{
        scale: 1.15,
        opacity: 1,
      }}
      whileTap={{
        scale: 1,
      }}
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
