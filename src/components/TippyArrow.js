import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'

const StylesTippyArrowVariables = (theme, variation) => ({
  size: 10,
  background:
    variation === 'light' ? theme.color.light.base : theme.color.dark.base,
  borderColor:
    variation === 'light' ? theme.color.border.base : theme.color.dark.base,
})

// Used in conjunction with `tippy.js` within the Tooltip component
const TippyArrow = ({ placement, variation, ...rest }) => {
  const theme = useTheme()

  return (
    <div
      data-popper-arrow
      css={[
        placement.startsWith('top') && {
          bottom: 0,
        },

        placement.startsWith('right') && {
          left: 0,
        },

        placement.startsWith('bottom') && {
          top: 0,
        },

        placement.startsWith('left') && {
          right: 0,
        },
      ]}
      {...rest}
    >
      <div
        css={[
          {
            width: StylesTippyArrowVariables(theme, variation).size,
            height: StylesTippyArrowVariables(theme, variation).size,
            background: StylesTippyArrowVariables(theme, variation).background,
            border: '1px solid',
            borderColor: StylesTippyArrowVariables(theme, variation)
              .borderColor,
            borderBottomLeftRadius: theme.borderRadius.base / 2,
            borderRight: 0,
            borderTop: 0,
          },

          placement.startsWith('top') && {
            transform: 'rotate(-45deg)',
            marginBottom: -StylesTippyArrowVariables(theme, variation).size / 2,
          },

          placement.startsWith('right') && {
            transform: 'rotate(45deg)',
            marginLeft: -StylesTippyArrowVariables(theme, variation).size / 2,
          },

          placement.startsWith('bottom') && {
            transform: 'rotate(135deg)',
            marginTop: -StylesTippyArrowVariables(theme, variation).size / 2,
          },

          placement.startsWith('left') && {
            transform: 'rotate(-135deg)',
            marginRight: -StylesTippyArrowVariables(theme, variation).size / 2,
          },
        ]}
      />
    </div>
  )
}

TippyArrow.propTypes = {
  placement: PropTypes.oneOf([
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
    'auto',
    'auto-start',
    'auto-end',
  ]),
  variation: PropTypes.oneOf(['light', 'dark']),
}

TippyArrow.defaultProps = {
  placement: 'top',
  variation: 'light',
}

export default TippyArrow
