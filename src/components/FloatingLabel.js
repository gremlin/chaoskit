import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from 'emotion-theming'
import { Fragment } from 'react'

import { form, text } from '../assets/styles/utility'

import Icon from './Icon'

// Holds stylistic reference to reusable label used in floating inputs
const FloatingLabel = ({
  className,
  noContrast,
  validationMessage,
  required,
  validationPosition = 'center',
  ...rest
}) => {
  const theme = useTheme()

  return (
    <Fragment>
      <span
        className={clsx('CK__FloatingLabel', className)}
        css={[
          text.heading(theme),
          {
            fontSize: theme.fontSize.xxsmall,
            letterSpacing: theme.letterSpacing.small,
            textTransform: 'uppercase',
            color: theme.color.primary.base,
            pointerEvents: 'none',
            position: 'absolute',
            top: theme.space.small,
            left: form.variables(theme).padding + 2, // Takes care of border throwing off horizontal aligment
            zIndex: 2,
            opacity: 0,
          },

          theme.settings.contrast.enable &&
            theme.settings.contrast.form &&
            !noContrast && {
              '.u-contrast &': {
                color: theme.contrast.base,
              },
            },
        ]}
        {...rest}
      />
      {(required || validationMessage) && (
        <span
          css={[
            {
              position: 'absolute',
              color: theme.color.danger.base,
              fontSize: theme.fontSize.xsmall,
              right: form.variables(theme).padding,
              zIndex: 2,
              pointerEvents: 'none',
            },

            validationPosition === 'center' && {
              top: '50%',
              transform: 'translateY(-50%)',
            },

            validationPosition === 'top' && {
              top: theme.space.xsmall,
              right: theme.space.small,
            },

            theme.settings.contrast.enable &&
              theme.settings.contrast.form &&
              !noContrast && {
                '.u-contrast &': {
                  color: theme.contrast.base,
                },
              },
          ]}
        >
          <Icon
            css={{
              top: 0,

              '.icon-stroke': {
                strokeWidth: 1, // Adjust stroke width specifically for these icons to help legibility
              },
            }}
            icon={!validationMessage ? 'asterisk' : 'alert-circle'}
          />
        </span>
      )}
    </Fragment>
  )
}

FloatingLabel.propTypes = {
  className: PropTypes.string,
  noContrast: PropTypes.bool,
  validationMessage: PropTypes.string,
  validationPosition: PropTypes.oneOf(['center', 'top']),
  required: PropTypes.bool,
}

export default FloatingLabel
