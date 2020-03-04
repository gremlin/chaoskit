import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useTheme } from 'emotion-theming'

import asterisk from '../assets/icons/asterisk.svg'
import alertCircle from '../assets/icons/alert-circle.svg'

export const StylesFormLabelBase = (theme, props = {}) => [
  {
    display: 'block', // Behave like block-level element
    marginBottom: theme.space.small,
    color: theme.fontColor.base,
    fontWeight: theme.fontWeight.bold,
    lineHeight: theme.lineHeight.small,
    cursor: 'default',
  },

  (props.required || props.error) && {
    '&::after': {
      content: "''",
      display: 'inline-block',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      width: theme.fontSize.small,
      height: theme.fontSize.small,
      marginLeft: theme.space.small,
      position: 'relative',
      top: 0,
      transform: 'translateY(-25%)',
      filter: theme.color.danger.filter,
    },
  },

  props.required &&
    !props.error && {
      '&::after': {
        backgroundImage: `url(${asterisk})`,
        backgroundSize: '80% 80%',
      },
    },

  props.error && {
    '&::after': {
      backgroundImage: `url(${alertCircle})`,
      backgroundSize: 'contain',
    },
  },

  theme.settings.contrast.enable &&
    theme.settings.contrast.form && {
      '.u-contrast &': [
        { color: theme.contrast.base },

        (props.required || props.error) && {
          '&::after': {
            filter: theme.contrast.filter,
          },
        },
      ],
    },
]

const FormLabel = forwardRef(
  ({ as: Component, children, className, required, error, ...rest }, ref) => {
    const theme = useTheme()

    return children ? (
      <Component
        css={StylesFormLabelBase(theme, { required, error })}
        className={cx('CK__FormLabel', className)}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    ) : null
  }
)

FormLabel.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
}

FormLabel.defaultProps = {
  as: 'label',
}

export default FormLabel
