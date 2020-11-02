import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import useUpdateEffect from 'react-use/lib/useUpdateEffect'
import useClickAway from 'react-use/lib/useClickAway'
import { useTheme } from 'emotion-theming'
import { motion, AnimatePresence } from 'framer-motion'

import { misc } from '../assets/styles/utility'

import ClientOnlyPortal from './ClientOnlyPortal'

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
  borderRadius: theme.borderRadius.large,
  zIndex: 5,
  boxShadow: theme.boxShadow.xlarge,
  marginTop: theme.space.base,
  marginBottom: theme.space.base,
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '100%',
  position: 'relative',

  [theme.mq.medium]: {
    marginTop: theme.space.xlarge,
    marginBottom: theme.space.xlarge,
  },
})

const Modal = ({
  animateFrom = 'bottom',
  children,
  className,
  open,
  setIsOpen,
  onComplete = () => {},
  onReverseComplete = () => {},
  size = 'base',
  ...rest
}) => {
  const theme = useTheme()

  const modalRef = useRef()
  const modalDialogRef = useRef()

  const direction = useRef('forward')

  const modalVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }

  const modalDialogVariants = {
    hidden: {
      opacity: 0,
      y: animateFrom === 'bottom' ? theme.space.xlarge : -theme.space.xlarge,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  // On unmount, clear any/all locks on `<body />`
  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [])

  useUpdateEffect(() => {
    if (open) {
      disableBodyScroll(modalRef.current)
      direction.current = 'forward'
    } else {
      enableBodyScroll(modalRef.current)
      direction.current = 'reverse'
    }
  }, [open])

  useClickAway(modalDialogRef, () => setIsOpen(false))

  return (
    <ClientOnlyPortal>
      <AnimatePresence onExitComplete={onReverseComplete}>
        {open && (
          <motion.div
            css={[StylesModalWrapper(theme)]}
            className={clsx('CK__Modal', className)}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={modalRef}
            onAnimationComplete={() =>
              direction.current === 'forward' && onComplete()
            }
            {...rest}
          >
            <motion.div
              css={[
                StylesModalDialog(theme),
                {
                  width: StylesModalVariables(theme).size[size],
                },
              ]}
              variants={modalDialogVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={theme.motion.transition.base}
              className="CK__Modal__Dialog"
              ref={modalDialogRef}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ClientOnlyPortal>
  )
}

Modal.propTypes = {
  animateFrom: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['base', 'small', 'large', 'xlarge']),
  open: PropTypes.bool,
  /** Animation callback */
  onComplete: PropTypes.func,
  /** Animation callback */
  onReverseComplete: PropTypes.func,
  setIsOpen: PropTypes.func.isRequired,
}

export default Modal
