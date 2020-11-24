import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'
import * as React from 'react'

const FormFooter = React.forwardRef(
  ({ className, explanationMessage, validationMessage, ...rest }, ref) => {
    const theme = useTheme()

    return explanationMessage || validationMessage ? (
      <div
        ref={ref}
        css={[
          {
            fontSize: theme.fontSize.small,
            lineHeight: theme.lineHeight.small,

            [theme.mq.medium]: {
              display: 'flex',
              width: '100%',
            },
          },
        ]}
        className={clsx('CK__FormFooter', className)}
        {...rest}
      >
        {explanationMessage && (
          <div
            css={[
              {
                color: theme.fontColor.muted,
                marginTop: theme.space.xsmall,

                [theme.mq.medium]: {
                  '&:not(:only-child)': {
                    marginRight: theme.space.small,
                  },
                },
              },

              theme.settings.contrast.enable &&
                theme.settings.contrast.form && {
                  '.u-contrast &': {
                    color: theme.contrast.base,
                  },
                },
            ]}
          >
            {explanationMessage}
          </div>
        )}
        {validationMessage && (
          <div
            css={[
              {
                color: theme.color.danger.base,
                marginTop: theme.space.xsmall,

                [theme.mq.medium]: {
                  marginLeft: 'auto',
                },
              },

              theme.settings.contrast.enable &&
                theme.settings.contrast.form && {
                  '.u-contrast &': {
                    color: theme.contrast.base,
                  },
                },
            ]}
          >
            {validationMessage}
          </div>
        )}
      </div>
    ) : null
  }
)

FormFooter.propTypes = {
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
}

export default FormFooter
