import cx from 'classnames'
import PropTypes from 'prop-types'
import { useRef, useState, useEffect } from 'react'
import useUpdateEffect from 'react-use/lib/useUpdateEffect'
import useLockBodyScroll from 'react-use/lib/useLockBodyScroll'
import useClickAway from 'react-use/lib/useClickAway'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import { useTheme } from 'emotion-theming'

import { misc } from '../assets/styles/utility'

export const StylesModalVariables = theme => ({
  padding: theme.space.large,
  size: {
    base: 600,
    small: 400,
    large: 800,
  },
})

const MODAL_ANIMATE_PROPERTIES = {
  bottom: {
    label: 'center bottom',
    transform: 'translateY(25%)',
  },
  top: {
    label: 'center top',
    transform: 'translateY(-25%)',
  },
}

const Modal = ({
  animateFrom,
  children,
  className,
  size,
  open,
  onOutsideModalClick,
  onComplete,
  onReverseComplete,
  onReverseStart,
  onStart,
  ...opts
}) => {
  const theme = useTheme()

  const modalRef = useRef()
  const modalDialogRef = useRef()

  const [renderModal, setRenderModal] = useState(open)

  const openModal = () => {
    const $modal = modalRef.current

    if ($modal && $modal.timeline) $modal.timeline.play()
  }

  const closeModal = () => {
    const $modal = modalRef.current

    if ($modal && $modal.timeline) {
      $modal.timeline.reverse()

      onReverseStart()
    }
  }

  const handleOnReverseComplete = () => {
    setRenderModal(false)
  }

  const attachTimeline = () => {
    const $modal = modalRef.current
    const $modalDialog = modalDialogRef.current

    // Attach timeline to each instance
    $modal.timeline = gsap.timeline({
      paused: !open,
      onStart: () => {
        onStart()
      },
      onComplete: () => {
        // Focus on active modal for screen readers
        $modal.focus()

        onComplete()
      },
      onReverseComplete: () => {
        handleOnReverseComplete()
      },
    })

    $modal.timeline
      .set($modal, {
        display: 'block',
      })
      .to(
        $modal,
        {
          duration: theme.gsap.timing.base,
          opacity: 1,
          backdropFilter: 'blur(2px)',
        },
        'modal'
      )
      .to(
        $modalDialog,
        {
          duration: theme.gsap.timing.base,
          opacity: 1,
          y: 0,
          ease: theme.gsap.transition.bounce,
        },
        'modal'
      )
  }

  useEffect(() => {
    if (open) {
      setRenderModal(true)
    }
  }, [open])

  useUpdateEffect(() => {
    if (renderModal) {
      attachTimeline()

      openModal()
    } else {
      onReverseComplete()
    }
  }, [renderModal])

  useUpdateEffect(() => {
    if (!open) {
      closeModal()
    }
  }, [open])

  useClickAway(modalDialogRef, () => onOutsideModalClick())

  // If not explicitly a boolean, the body lock will not release
  useLockBodyScroll(Boolean(renderModal))

  if (!renderModal) return null

  return createPortal(
    <div
      css={[
        misc.overflow,
        {
          // 1. GSAP
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: theme.color.dark.overlay,
          zIndex: 10,

          // 1
          opacity: 0,
          display: 'none',
        },
      ]}
      className={cx('CK__Modal', className)}
      ref={modalRef}
      {...opts}
    >
      <div
        css={[
          {
            // 1. GSAP
            background: theme.color.light.base,
            borderRadius: theme.settings.ui.radius && theme.borderRadius.base,
            margin: theme.space.base,
            zIndex: 5,
            boxShadow: theme.boxShadow.large,

            // 1
            opacity: 0,
            transform: MODAL_ANIMATE_PROPERTIES[animateFrom].transform,
            transformOrigin: MODAL_ANIMATE_PROPERTIES[animateFrom].label,
          },

          ['small', 'base'].includes(size) && {
            [theme.mq.medium]: {
              maxWidth: StylesModalVariables(theme).size[size],
              margin: `${theme.space.xlarge}px auto`,
            },
          },

          size === 'large' && {
            [theme.mq.large]: {
              maxWidth: StylesModalVariables(theme).size[size],
              margin: `${theme.space.xlarge}px auto`,
            },
          },
        ]}
        className="CK__Modal__Dialog"
        ref={modalDialogRef}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}

Modal.propTypes = {
  /** Change entrance direction */
  animateFrom: PropTypes.oneOf(['bottom', 'top']),
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['base', 'small', 'large']),
  open: PropTypes.bool,
  onOutsideModalClick: PropTypes.func,
  /** GSAP callback */
  onComplete: PropTypes.func,
  /** GSAP callback */
  onReverseComplete: PropTypes.func,
  /** GSAP callback */
  onReverseStart: PropTypes.func,
  /** GSAP callback */
  onStart: PropTypes.func,
}

Modal.defaultProps = {
  animateFrom: 'bottom',
  onOutsideModalClick: () => {},
  onComplete: () => {},
  onReverseComplete: () => {},
  onReverseStart: () => {},
  onStart: () => {},
  size: 'base',
}

export default Modal
