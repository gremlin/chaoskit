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

import Close from './Close'
import ClientOnlyPortal from './ClientOnlyPortal'

export const StylesOffCanvasVariables = (theme) => ({
  padding: theme.space.large,
  panelOffset: theme.space.large,
})

const OffCanvas = ({
  align = 'left',
  children,
  className,
  onComplete = () => {},
  onReverseComplete = () => {},
  open,
  setIsOpen,
  panelWidth = 300,
  ...rest
}) => {
  const theme = useTheme()

  const offCanvasRef = useRef()
  const offCanvasPanelRef = useRef()

  const direction = useRef('forward')

  const handleOnComplete = () => {
    offCanvasPanelRef.current.focus()

    onComplete()
  }

  const offCanvasVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }

  const offCanvasDialogVariants = {
    hidden: {
      opacity: 0,
      x: align === 'left' ? '-100%' : '100%',
    },
    visible: {
      opacity: 1,
      x: 0,
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
      disableBodyScroll(offCanvasPanelRef.current)
      direction.current = 'forward'
    } else {
      enableBodyScroll(offCanvasPanelRef.current)
      direction.current = 'reverse'
    }
  }, [open])

  useClickAway(offCanvasPanelRef, () => setIsOpen(false))

  return (
    <ClientOnlyPortal>
      <AnimatePresence onExitComplete={onReverseComplete}>
        {open && (
          <motion.div
            css={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              background: theme.color.dark.overlay,
              zIndex: 10,
            }}
            className={clsx('CK__OffCanvas', className)}
            ref={offCanvasRef}
            variants={offCanvasVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onAnimationComplete={() =>
              direction.current === 'forward' && handleOnComplete()
            }
            {...rest}
          >
            <motion.aside
              css={[
                misc.overflow,
                {
                  position: 'absolute',
                  top: 0,
                  [align]: 0,
                  zIndex: 5,
                  height: '100%',
                  width: `calc(100% - ${theme.space.base}px)`,
                  background: theme.color.light.base,
                  padding: StylesOffCanvasVariables(theme).padding,
                  boxShadow: theme.boxShadow.large,

                  [theme.mq.small]: {
                    width: panelWidth,
                  },
                },

                align === 'left' && {
                  borderTopRightRadius: theme.borderRadius.xlarge,
                },

                align === 'right' && {
                  borderTopLeftRadius: theme.borderRadius.xlarge,
                },
              ]}
              className={`CK__OffCanvas__Panel ${theme.settings.classes.trim}`}
              ref={offCanvasPanelRef}
              variants={offCanvasDialogVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ x: { stiffness: 1000 } }}
            >
              <Close
                onClick={() => setIsOpen(false)}
                css={{
                  position: 'absolute',
                  top: StylesOffCanvasVariables(theme).padding,
                  right: StylesOffCanvasVariables(theme).padding,
                  zIndex: 10,
                }}
                className="CK__OffCanvas__Close"
              />
              {children}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </ClientOnlyPortal>
  )
}

OffCanvas.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right']),
  open: PropTypes.bool,
  /** Animation callback */
  onComplete: PropTypes.func,
  /** Animation callback */
  onReverseComplete: PropTypes.func,
  panelWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setIsOpen: PropTypes.func.isRequired,
}

export default OffCanvas
