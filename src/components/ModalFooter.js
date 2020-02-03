import cx from 'classnames'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'

import { StylesModalVariables } from './Modal'

const ModalFooter = ({ className, ...opts }) => {
  const theme = useTheme()

  return (
    <div
      css={{
        padding: StylesModalVariables(theme).padding,
      }}
      className={cx(
        `CK__ModalFooter ${theme.settings.classes.trim}`,
        className
      )}
      {...opts}
    />
  )
}

ModalFooter.propTypes = {
  className: PropTypes.string,
}

export default ModalFooter
