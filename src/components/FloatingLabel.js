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
              display: 'grid',
              placeContent: 'center',
              padding: theme.space.xsmall,
              background: theme.color.danger.base,
              borderRadius: '50%',
              position: 'absolute',
              color: theme.contrast.base,
              fontSize: theme.fontSize.xsmall,
              top: 0,
              right: 0,
              zIndex: 2,
              pointerEvents: 'none',
              transform: 'translate(50%, -50%)',
            },

            theme.settings.contrast.enable &&
              theme.settings.contrast.form &&
              !noContrast && {
                '.u-contrast &': {
                  background: theme.contrast.base,
                  color: theme.color.danger.base,
                },
              },
          ]}
        >
          <Icon
            css={{
              top: 0,

              '.icon-stroke': {
                strokeWidth: 1.25, // Adjust stroke width specifically for these icons to help legibility
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
  required: PropTypes.bool,
}

export default FloatingLabel
