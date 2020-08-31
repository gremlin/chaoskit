import { Fragment, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import { motion, useAnimation } from 'framer-motion'
import clsx from 'clsx'
import useUpdateEffect from 'react-use/lib/useUpdateEffect'

import Button from './Button'

const Reveal = ({
  reveal,
  setReveal,
  children,
  className,
  onComplete = () => {},
  onReverseComplete = () => {},
  trigger = { props: {}, label: '' },
  ...rest
}) => {
  const theme = useTheme()

  const triggerRef = useRef()

  const direction = useRef('forward')

  const controls = useAnimation()

  const variants = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      height: 'auto',
    },
  }

  useEffect(() => {
    if (reveal) {
      controls.set('visible')
    }
  }, [])

  useUpdateEffect(() => {
    if (reveal) {
      controls.start('visible')
      direction.current = 'forward'
    } else {
      controls.start('hidden')
      direction.current = 'reverse'
    }
  }, [reveal])

  return (
    <Fragment>
      <Button
        ref={triggerRef}
        onClick={() => setReveal(!reveal)}
        className={clsx({
          [theme.settings.classes.active]: reveal,
        })}
        {...trigger.props}
      >
        {trigger.label}
      </Button>
      <motion.div
        className={clsx('CK__Reveal', className)}
        css={{
          // Take care of overflowing content
          overflow: 'hidden',
          height: 0,
        }}
        aria-hidden={reveal ? 'false' : 'true'}
        variants={variants}
        animate={controls}
        initial="hidden"
        transition={{
          duration: theme.gsap.timing.base,
        }}
        onAnimationComplete={() =>
          direction.current === 'forward' ? onComplete() : onReverseComplete()
        }
        {...rest}
      >
        <div className={`CK__Reveal__Content ${theme.settings.classes.trim}`}>
          {children}
        </div>
      </motion.div>
    </Fragment>
  )
}

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  reveal: PropTypes.bool,
  setReveal: PropTypes.func.isRequired,
  /** Animation callback */
  onComplete: PropTypes.func,
  /** Animation callback */
  onReverseComplete: PropTypes.func,
  trigger: PropTypes.shape({
    props: PropTypes.object,
    label: PropTypes.any.isRequired,
  }),
}

export default Reveal
