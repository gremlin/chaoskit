import { useRef } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import clsx from 'clsx'
import Tippy from '@tippyjs/react/headless'
import gsap from 'gsap'

import { getTransformOrigin } from '../helpers/utility'

const StylesTooltipVariables = (theme, variation) => ({
  background:
    variation === 'light' ? theme.color.light.base : theme.color.dark.base,
  border: variation === 'light' ? theme.border.base : theme.color.dark.base,
  borderRadius: theme.settings.ui.radius && theme.borderRadius.base,
  color: variation === 'light' ? theme.fontColor.base : theme.contrast.base,
})

const Tooltip = ({
  children,
  className,
  content,
  placement,
  variation,
  ...rest
}) => {
  const theme = useTheme()

  const tooltipRef = useRef()

  const handleOnMount = () => {
    gsap.to(tooltipRef.current, {
      duration: theme.gsap.timing.short,
      opacity: 1,
      scale: 1,
      ease: theme.gsap.transition.bounce,
    })
  }

  const handleOnHide = async (instance) => {
    await gsap.to(tooltipRef.current, {
      duration: theme.gsap.timing.short,
      opacity: 0,
      scale: 0.75,
      ease: theme.gsap.transition.bounce,
    })

    if (instance) {
      instance.unmount()
    }
  }

  return (
    <Tippy
      placement={placement}
      animation
      onMount={handleOnMount}
      onHide={handleOnHide}
      offset={[0, theme.space.small]}
      render={(attrs) => {
        return (
          <div
            css={{
              fontSize: theme.fontSize.small,
              color: StylesTooltipVariables(theme, variation).color,
              maxWidth: 250,
              padding: theme.space.small,
              background: StylesTooltipVariables(theme, variation).background,
              border: theme.border.base,
              borderRadius: StylesTooltipVariables(theme, variation)
                .borderRadius,
              wordWrap: 'break-word',
              textAlign: 'center',
              position: 'relative',
              boxShadow: theme.boxShadow.base,
              zIndex: 10,
              transformOrigin:
                attrs['data-placement'] &&
                getTransformOrigin(attrs['data-placement']),

              // 1. GSAP
              opacity: 0,
              transform: 'scale(0.75)',
            }}
            className={clsx('CK__Tooltip', className)}
            ref={tooltipRef}
            role="tooltip"
            {...attrs}
          >
            {content}
          </div>
        )
      }}
      {...rest}
    >
      {children}
    </Tippy>
  )
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  content: PropTypes.any.isRequired,
  placement: PropTypes.oneOf([
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
    'auto',
    'auto-start',
    'auto-end',
  ]),
  variation: PropTypes.oneOf(['light', 'dark']),
}

Tooltip.defaultProps = {
  placement: 'top',
  variation: 'light',
}

export default Tooltip
