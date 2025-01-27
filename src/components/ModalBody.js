import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'

import { StylesModalVariables } from './Modal'

const ModalBody = ({ className, ...rest }) => {
  const theme = useTheme()

  return (
    <div
      css={{
        padding: StylesModalVariables(theme).padding,
      }}
      className={clsx(
        `CK__ModalBody ${theme.settings.classes.trim}`,
        className
      )}
      {...rest}
    />
  )
}

ModalBody.propTypes = {
  className: PropTypes.string,
}

export default ModalBody
