import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'

import Close, { StylesCloseVariables } from './Close'
import { StylesModalVariables } from './Modal'

const ModalHeader = ({ centered, className, setIsOpen, title, ...rest }) => {
  const theme = useTheme()

  return (
    <div
      css={[
        {
          display: 'grid',
          gridTemplateColumns: centered
            ? `${StylesCloseVariables(theme).size}px 1fr ${
                StylesCloseVariables(theme).size
              }px`
            : `1fr ${StylesCloseVariables(theme).size}px`,
          gap: theme.space.small,
          padding: StylesModalVariables(theme).padding,
        },
      ]}
      className={clsx('CK__ModalHeader', className)}
      {...rest}
    >
      <h4
        css={[
          {
            marginBottom: 0,
          },

          centered && {
            gridColumn: 2,
            textAlign: 'center',
          },
        ]}
      >
        {title}
      </h4>
      <Close
        onClick={() => setIsOpen(false)}
        css={[
          centered && {
            gridColumn: 3,
          },
        ]}
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
