import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'

import { StylesModalVariables } from './Modal'

const ModalFooter = ({ className, ...rest }) => {
  const theme = useTheme()

  return (
    <div
      css={{
        padding: StylesModalVariables(theme).padding,
      }}
      className={clsx(
        `CK__ModalFooter ${theme.settings.classes.trim}`,
        className
      )}
      {...rest}
    />
  )
}

ModalFooter.propTypes = {
  className: PropTypes.string,
}

export default ModalFooter
