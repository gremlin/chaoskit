import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'

import { ReactComponent as CloseSvg } from '../assets/icons/close.svg'

import Button from './Button'

export const StylesCloseVariables = (theme) => ({
  size: theme.fontSize.medium,
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
          lineHeight: 1,
          width: StylesCloseVariables(theme).size,
          height: StylesCloseVariables(theme).size,
          fontSize: StylesCloseVariables(theme).size,
          opacity: theme.opacity.base,
          transition: `opacity ${theme.timing.short} linear, transform ${theme.timing.short} linear`,

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
      <CloseSvg className="CK__Close__Icon" />
    </Button>
  )
}

Close.propTypes = {
  onClick: PropTypes.func,
  noContrast: PropTypes.bool,
}

export default Close
