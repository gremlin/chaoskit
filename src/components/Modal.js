import { useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import useLockBodyScroll from 'react-use/lib/useLockBodyScroll'
import useClickAway from 'react-use/lib/useClickAway'
import { createPortal } from 'react-dom'
import { useTheme } from 'emotion-theming'
import { motion, AnimatePresence } from 'framer-motion'

import { misc } from '../assets/styles/utility'

export const StylesModalVariables = (theme) => ({
  padding: theme.space.large,
  size: {
    base: 600,
    small: 400,
    large: 800,
    xlarge: 1000,
  },
})

export const StylesModalWrapper = (theme) => [
  misc.overflow,
  {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: theme.color.dark.overlay,
    zIndex: 10,
    paddingLeft: theme.space.base,
    paddingRight: theme.space.base,
  },
]

export const StylesModalDialog = (theme) => ({
  background: theme.color.light.base,
  borderRadius: theme.settings.ui.radius && theme.borderRadius.large,
  zIndex: 5,
  boxShadow: theme.boxShadow.large,
  marginTop: theme.space.base,
  marginBottom: theme.space.base,
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '100%',

  [theme.mq.medium]: {
    marginTop: theme.space.xlarge,
    marginBottom: theme.space.xlarge,
  },
})

const Modal = ({
  animateFrom,
  children,
  className,
  size,
  open,
  onOutsideModalClick,
  onComplete,
  onReverseComplete,
  ...rest
}) => {
  const theme = useTheme()
  const modalDialogRef = useRef()

  const modalVariants = {
    closed: { opacity: 0, backdropFilter: 'blur(0px)' },
    open: { opacity: 1, backdropFilter: 'blur(2px)' },
  }

  const modalDialogVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: animateFrom === 'bottom' ? '15%' : '15%' },
  }

  useClickAway(modalDialogRef, onOutsideModalClick)
  useLockBodyScroll(!!open)

  return createPortal(
    <AnimatePresence onExitComplete={onReverseComplete}>
      {open && (
        <motion.div
          css={[StylesModalWrapper(theme)]}
          className={cx('CK__Modal', className)}
          variants={modalVariants}
          initial="closed"
          animate="open"
          exit="closed"
          {...rest}
        >
          <motion.div
            variants={modalDialogVariants}
            initial="closed"
            animate="open"
            exit="closed"
            css={[
              StylesModalDialog(theme),
              {
                width: StylesModalVariables(theme).size[size],
              },
            ]}
            className="CK__Modal__Dialog"
            ref={modalDialogRef}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

Modal.propTypes = {
  /** Change entrance direction */
  animateFrom: PropTypes.oneOf(['bottom', 'top']),
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['base', 'small', 'large', 'xlarge']),
  open: PropTypes.bool,
  onOutsideModalClick: PropTypes.func,
  /** Framer Motion callback */
  onComplete: PropTypes.func,
  /** Framer Motion callback */
  onReverseComplete: PropTypes.func,
}

Modal.defaultProps = {
  animateFrom: 'bottom',
  onOutsideModalClick: () => {},
  onComplete: () => {},
  onReverseComplete: () => {},
  size: 'base',
}

export default Modal
