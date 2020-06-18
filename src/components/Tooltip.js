import { useRef } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import clsx from 'clsx'
import Tippy from '@tippyjs/react/headless'
import gsap from 'gsap'

import { getTransformOrigin } from '../helpers/utility'

const StylesTooltipVariables = (theme, variation) => ({
  arrowSize: 10,
  background:
    variation === 'light' ? theme.color.light.base : theme.color.dark.base,
  borderColor:
    variation === 'light' ? theme.color.border.base : theme.color.dark.base,
  borderRadius: theme.settings.ui.radius && theme.borderRadius.base,
  color: variation === 'light' ? theme.fontColor.base : theme.contrast.base,
  padding: theme.space.small,
})

const Arrow = ({ placement, variation, ...rest }) => {
  const theme = useTheme()

  return (
    <div
      css={[
        placement.startsWith('top') && {
          bottom: 0,
        },

        placement.startsWith('right') && {
          left: 0,
        },

        placement.startsWith('bottom') && {
          top: 0,
        },

        placement.startsWith('left') && {
          right: 0,
        },
      ]}
      {...rest}
    >
      <div
        css={[
          {
            width: StylesTooltipVariables(theme, variation).arrowSize,
            height: StylesTooltipVariables(theme, variation).arrowSize,
            background: StylesTooltipVariables(theme, variation).background,
            border: '1px solid',
            borderColor: StylesTooltipVariables(theme, variation).borderColor,
            borderBottomLeftRadius:
              StylesTooltipVariables(theme, variation).borderRadius / 2,
            borderRight: 0,
            borderTop: 0,
          },

          placement.startsWith('top') && {
            transform: 'rotate(-45deg)',
            marginBottom:
              -StylesTooltipVariables(theme, variation).arrowSize / 2,
          },

          placement.startsWith('right') && {
            transform: 'rotate(45deg)',
            marginLeft: -StylesTooltipVariables(theme, variation).arrowSize / 2,
          },

          placement.startsWith('bottom') && {
            transform: 'rotate(135deg)',
            marginTop: -StylesTooltipVariables(theme, variation).arrowSize / 2,
          },

          placement.startsWith('left') && {
            transform: 'rotate(-135deg)',
            marginRight:
              -StylesTooltipVariables(theme, variation).arrowSize / 2,
          },
        ]}
      />
    </div>
  )
}

Arrow.propTypes = {
  placement: PropTypes.string,
  variation: PropTypes.oneOf(['light', 'dark']),
}

Arrow.defaultProps = {
  placement: 'top',
  variation: 'light',
}

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
            className={clsx('CK__Tooltip', className)}
            ref={tooltipRef}
            role="tooltip"
            {...attrs}
          >
            <Arrow
              data-popper-arrow
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
