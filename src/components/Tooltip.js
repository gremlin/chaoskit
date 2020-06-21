import { useRef } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import clsx from 'clsx'
import Tippy from '@tippyjs/react/headless'
import gsap from 'gsap'

import { getTransformOrigin } from '../helpers/utility'

import TippyArrow from './TippyArrow'

const StylesTooltipVariables = (theme, variation) => ({
  background:
    variation === 'light' ? theme.color.light.base : theme.color.dark.base,
  borderColor:
    variation === 'light' ? theme.color.border.base : theme.color.dark.base,
  borderRadius: theme.settings.ui.radius && theme.borderRadius.base,
  color: variation === 'light' ? theme.fontColor.base : theme.contrast.base,
  padding: theme.space.small,
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
    tooltipRef.current.timeline = gsap.timeline({ paused: true })

    tooltipRef.current.timeline.to(tooltipRef.current, {
      duration: theme.gsap.timing.short,
      opacity: 1,
      scale: 1,
      ease: theme.gsap.transition.bounce,
    })

    tooltipRef.current.timeline.play()
  }

  const handleOnHide = async (instance) => {
    await tooltipRef.current.timeline.reverse()

    instance.unmount()
  }

  return (
    <Tippy
      placement={placement}
      animation
      hideOnClick={false}
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
              padding: StylesTooltipVariables(theme, variation).padding,
              background: StylesTooltipVariables(theme, variation).background,
              border: '1px solid',
              borderColor: StylesTooltipVariables(theme, variation).borderColor,
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
            className={clsx(
              `CK__Tooltip ${theme.settings.classes.trim}`,
              className
            )}
            ref={tooltipRef}
            role="tooltip"
            {...attrs}
          >
            <TippyArrow
              placement={attrs['data-placement']}
              variation={variation}
            />
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
