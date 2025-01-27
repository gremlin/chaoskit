import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'

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

const FormLabel = React.forwardRef(
  (
    { as: Component = 'label', children, className, required, error, ...rest },
    ref
  ) => {
    const theme = useTheme()

    return children ? (
      <Component
        css={StylesFormLabelBase(theme, { required, error })}
        className={clsx('CK__FormLabel', className)}
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

export default FormLabel
