import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'

import { gradient, misc } from '../../src/assets/styles/utility'

const ContrastWrapper = ({ className, variation = 'greenBlue', ...rest }) => {
  const theme = useTheme()

  return (
    <div
      className={clsx(theme.settings.classes.contrast, className)}
      css={[
        variation === 'greenBlue' && gradient.blueGreen(theme),
        variation === 'dark' && gradient.dark(theme),

        misc.trimChildren,
        {
          padding: theme.space.large,
          borderRadius: theme.borderRadius.base,
          boxShadow: theme.boxShadow.large,
        },
      ]}
      {...rest}
    />
  )
}

ContrastWrapper.propTypes = {
  className: PropTypes.string,
  variation: PropTypes.oneOf(['greenBlue', 'dark']),
}

export default ContrastWrapper
