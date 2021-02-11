import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'
import * as React from 'react'

import { form } from '../assets/styles/utility'

const FormFooter = React.forwardRef(
  ({ className, explanationMessage, validationMessage, ...rest }, ref) => {
    const theme = useTheme()

    return explanationMessage || validationMessage ? (
      <div
        ref={ref}
        css={[
          {
            fontSize: theme.fontSize.xxsmall,
            display: 'grid',
            gridAutoColumns: '1fr',
            gridAutoFlow: 'column',
            gap: theme.space.small,
            marginTop: theme.space.xsmall,
            paddingLeft: form.variables(theme).controlOffset,
            paddingRight: form.variables(theme).controlOffset,
            fontWeight: theme.fontWeight.medium,
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
              },

              theme.settings.contrast.enable && {
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
              },

              theme.settings.contrast.enable && {
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
