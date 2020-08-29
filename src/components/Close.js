import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import { useRef } from 'react'

import useGSAPInteraction from '../hooks/useGSAPInteraction'

import Button from './Button'
import Icon from './Icon'

export const StylesCloseVariables = (theme) => ({
  size: theme.fontSize.base,
})

const Close = ({ onClick, noContrast, ...rest }) => {
  const theme = useTheme()
  const ref = useRef()

  const interactions = useGSAPInteraction({
    ref,
    initial: {
      autoAlpha: theme.opacity.base,
    },
  })

  return (
    <Button
      type="reset"
      title="Close"
      onClick={onClick}
      ref={ref}
      css={[
        {
          // 1. To align better with headers
          color: theme.fontColor.base,
          lineHeight: theme.lineHeight.small, // 1
          width: StylesCloseVariables(theme).size,
          height: StylesCloseVariables(theme).size,
          transition: 'auto',

          // GSAP
          visibility: 'hidden',
        },

        theme.settings.contrast.enable &&
          !noContrast && {
            '.u-contrast &': {
              color: theme.contrast.base,
            },
          },
      ]}
      {...interactions}
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
