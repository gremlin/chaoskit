import PropTypes from "prop-types";
import clsx from 'clsx'
import { useTheme } from '@emotion/react'
import { addDecorator } from '@storybook/react'

import { gradient, misc } from '../../src/assets/styles/utility'

const ContrastWrapper = ({ className, ...rest }) => {
  const theme = useTheme()

  return (
    <div
      className={clsx(theme.settings.classes.contrast, className)}
      css={[
        gradient.blueGreen(theme),
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
  className: PropTypes.string
}

export default ContrastWrapper
