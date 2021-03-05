import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'

import Close from './Close'
import { StylesModalVariables } from './Modal'

const ModalHeader = ({ centered, className, setIsOpen, title, ...rest }) => {
  const theme = useTheme()

  return (
    <div
      css={[
        {
          display: 'grid',
          padding: StylesModalVariables(theme).padding,
        },
      ]}
      className={clsx('CK__ModalHeader', className)}
      {...rest}
    >
      <div
        css={{
          ...theme.text.xlarge,
          fontWeight: theme.fontWeight.bold,
          textAlign: 'center',
        }}
      >
        {title}
      </div>
      <Close
        onClick={() => setIsOpen(false)}
        css={{
          position: 'absolute',
          top: theme.space.base,
          right: theme.space.base,
          zIndex: 1,
        }}
      />
    </div>
  )
}

ModalHeader.propTypes = {
  centered: PropTypes.bool,
  className: PropTypes.string,
  setIsOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default ModalHeader
