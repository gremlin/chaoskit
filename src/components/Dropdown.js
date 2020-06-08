import { useRef } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import Tippy from '@tippyjs/react/headless'
import gsap from 'gsap'

import { text } from '../assets/styles/utility'
import { generateGradient } from '../assets/styles/utility/gradient'
import { getTransformOrigin } from '../helpers/utility'

import Button from './Button'
import Icon from './Icon'

export const DropdownMenuItemStyles = (theme, props = {}) => [
  theme.fontSize.medium__fluid,
  text.heading(theme, 'base'),
  {
    margin: `0 -${theme.space.small}px`,
    color: theme.fontColor.base,
    paddingTop: theme.space.xsmall,
    paddingBottom: theme.space.xsmall,
    paddingLeft: theme.space.small,
    paddingRight: theme.space.small,
    display: 'block',
    borderRadius: theme.settings.ui.radius && theme.borderRadius.base,
    lineHeight: theme.lineHeight.base,

    '&:hover, &:focus': {
      color: theme.fontColor.base,
      background: theme.color.panel.dark,
    },

    '&.is-active': {
      background: theme.color.panel.dark,
    },
  },

  props.active && {
    background: theme.color.panel.dark,
  },
]

const Dropdown = ({
  children,
  className,
  panelWidth,
  placement,
  trigger,
  showArrow,
  ...rest
}) => {
  const theme = useTheme()

  const dropdownPanelRef = useRef()
  const dropdownTriggerRef = useRef()

  const handleOnMount = () => {
    dropdownTriggerRef.current.classList.add(theme.settings.classes.active)

    dropdownPanelRef.current.timeline = gsap.timeline({ paused: true })

    dropdownPanelRef.current.timeline.to(dropdownPanelRef.current, {
      duration: theme.gsap.timing.short,
      opacity: 1,
      scale: 1,
      ease: theme.gsap.transition.bounce,
    })

    dropdownPanelRef.current.timeline.play()
  }

  const handleOnHide = async (instance) => {
    dropdownTriggerRef.current.classList.remove(theme.settings.classes.active)

    await dropdownPanelRef.current.timeline.reverse()

    instance.unmount()
  }

  return (
    <Tippy
      placement={placement}
      animation
      onMount={handleOnMount}
      onHide={handleOnHide}
      onClickOutside={handleOnHide}
      trigger="click"
      interactive
      offset={[0, theme.space.base]}
      render={(attrs) => {
        return (
          <div
            css={[
              {
                // 1. GSAP
                background: generateGradient({
                  start: theme.color.light.base,
                  stop: theme.color.panel.light,
                  position: 'to bottom',
                }),
                padding: theme.space.large,
                width: panelWidth,
                maxHeight: 500,
                overflowY: 'auto',
                color: theme.fontColor.base,
                border: theme.border.base,
                borderRadius:
                  theme.settings.ui.radius && theme.borderRadius.base,
                textAlign: 'left',
                zIndex: 10,
                boxShadow: theme.boxShadow.neutral,
                transformOrigin:
                  attrs['data-placement'] &&
                  getTransformOrigin(attrs['data-placement']),

                // 1
                opacity: 0,
                transform: 'scale(0.75)',
              },
            ]}
            className={`CK__Dropdown__Panel ${theme.settings.classes.trim}`}
            ref={dropdownPanelRef}
            {...attrs}
          >
            {children}
          </div>
        )
      }}
      {...rest}
    >
      <Button {...trigger.props} ref={dropdownTriggerRef}>
        {trigger.label}
        {showArrow && (
          <Icon
            css={{
              marginLeft: theme.space.small,
              transition: `transform ${theme.timing.base} ${theme.transition.bounce}`,

              '.is-active &': {
                transform: 'rotate(180deg)',
              },
            }}
            size="small"
            icon="caret-down"
          />
        )}
      </Button>
    </Tippy>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  panelWidth: PropTypes.number,
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
  /** All available Button props can be passed-in */
  trigger: PropTypes.shape({
    props: PropTypes.object,
    label: PropTypes.any.isRequired,
  }),
  showArrow: PropTypes.bool,
}

Dropdown.defaultProps = {
  panelWidth: 250,
  placement: 'bottom',
}

export default Dropdown
