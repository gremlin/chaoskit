import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import clsx from 'clsx'
import Tippy from '@tippyjs/react/headless'
import gsap from 'gsap'
import { useRef } from 'react'

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

  const getTransformOrigin = (placementOption) => {
    if (placementOption.startsWith('top')) {
      return 'bottom'
    }

    if (placementOption.startsWith('bottom')) {
      return 'top'
    }

    if (placementOption.startsWith('left')) {
      return 'right'
    }

    if (placementOption.startsWith('right')) {
      return 'left'
    }

    return null
  }

  const onMount = () => {
    gsap.to(tooltipRef.current, {
      duration: theme.gsap.timing.short,
      opacity: 1,
      scale: 1,
      ease: theme.gsap.transition.bounce,
    })
  }

  const onHide = async (instance) => {
    await gsap.to(tooltipRef.current, {
      duration: theme.gsap.timing.short,
      opacity: 0,
      scale: 0.5,
      ease: theme.gsap.transition.bounce,
    })

    instance.unmount()
  }

  return (
    <Tippy
      placement={placement}
      animation
      onMount={onMount}
      onHide={onHide}
      hideOnClick="toggle"
      arrow
      render={(attrs) => {
        /*
        .tippy-box[data-animation=scale-subtle][data-placement^=top]{transform-origin:bottom}.tippy-box[data-animation=scale-subtle][data-placement^=bottom]{transform-origin:top}.tippy-box[data-animation=scale-subtle][data-placement^=left]{transform-origin:right}.tippy-box[data-animation=scale-subtle][data-placement^=right]{transform-origin:left}.tippy-box[data-animation=scale-subtle][data-state=hidden]{transform:scale(.8);opacity:0}
        */

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
              transformOrigin:
                attrs['data-placement'] &&
                getTransformOrigin(attrs['data-placement']),

              // 1. GSAP
              opacity: 0,
              transform: 'scale(0.5)',
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
