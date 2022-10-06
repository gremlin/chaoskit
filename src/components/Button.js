import PropTypes from 'prop-types'
import * as React from 'react'
import clsx from 'clsx'
import { shade } from 'polished'
import { useTheme } from '@emotion/react'

import { gradient, misc } from '../assets/styles/utility'

import { StylesIconVariables } from './Icon'
import Loader from './Loader'

export const generateButtonGradient = ({ start, stop }) => ({
  borderColor: 'transparent',
  background: `${gradient.generateGradient({
    start,
    stop,
  })}, ${gradient.generateGradient({ start, stop })}`,
  backgroundOrigin: 'border-box',
  backgroundClip: 'content-box, border-box',
})

export const StylesButtonVariables = (theme) => ({
  borderWidth: 2,
  color: {
    base: theme.fontColor.base,
    get dark() {
      return shade(0.1, this.base)
    },
  },
})

export const StylesButtonBase = (theme, props = {}) => [
  {
    // 1. Correct inability to style clickable `input` types in iOS.
    // 2. Remove margins in Chrome, Safari and Opera.
    // 3. Normalizes styles for `button`.
    // 4. Address `overflow` set to `hidden` in IE 8/9/10/11.
    // 5. Correct `font` properties and `color` not being inherited for `button`.
    // 6. Address inconsistent `text-transform` inheritance which is only inherit in Firefox and IE
    // 7. Style
    // 8. `line-height` is used to create a height
    // 9. `min-height` is necessary for `input` elements in Firefox and Opera because `line-height` is not working.
    // 10. Reset button group whitespace hack
    // 11. Required for `a`.
    // 12. Do not wrap buttons
    // 13. Disable `user-select`
    // 14. Removes inner padding and border in Firefox 4+.

    // 1
    appearance: 'none',
    // 2
    margin: 0,
    // 3
    border: `${StylesButtonVariables(theme).borderWidth}px solid transparent`,
    // 4
    overflow: 'visible',
    // 5
    font: 'inherit',
    fontWeight: theme.fontWeight.bold,
    fontFamily: theme.fontFamily.base,
    color: StylesButtonVariables(theme).color.base,
    // 6
    textTransform: 'uppercase',
    // 7
    display: 'inline-block',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: theme.space.medium,
    paddingRight: theme.space.medium,
    background: 'transparent',
    verticalAlign: 'middle',
    cursor: 'pointer',
    transition: `all ${theme.timing.base} ${theme.transition.base}`,
    backgroundSize: '100% 100%',
    borderRadius: theme.borderRadius.rounded,
    position: 'relative',
    letterSpacing: theme.letterSpacing.extended,
    // 8
    lineHeight: `${
      theme.height.base - StylesButtonVariables(theme).borderWidth * 2
    }px`,
    // 9
    height: theme.height.base,
    // 10
    fontSize: theme.fontSize.small,
    // 11
    textDecoration: 'none',
    textAlign: 'center',
    // 12
    whiteSpace: 'nowrap',
    // 13
    userSelect: 'none',

    '&:hover, &:focus': {
      color: StylesButtonVariables(theme).color.base,
    },

    // 14
    '&::-moz-focus-inner': {
      border: 0,
      padding: 0,
    },

    '&[disabled]': {
      opacity: theme.opacity.base,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  },

  theme.settings.contrast.enable &&
    theme.settings.contrast.button &&
    !props.noContrast && {
      '.u-contrast &': {
        color: theme.contrast.base,

        '&:hover, &:focus': {
          color: theme.contrast.base,
        },
      },
    },
]

export const StylesButtonSmall = (theme) => ({
  paddingLeft: theme.space.base,
  paddingRight: theme.space.base,
  height: theme.height.small,
  lineHeight: `${
    theme.height.small - StylesButtonVariables(theme).borderWidth * 2
  }px`,
})

export const StylesButtonXsmall = (theme) => ({
  paddingLeft: theme.space.base,
  paddingRight: theme.space.base,
  fontSize: theme.fontSize.xsmall,
  height: theme.height.xsmall,
  lineHeight: `${
    theme.height.xsmall - StylesButtonVariables(theme).borderWidth * 2
  }px`,
})

export const StylesButtonDefault = (theme, props = {}) => [
  {
    background: theme.color.light.base,
    borderColor: theme.brand.violet,
    color: StylesButtonVariables(theme).color.base,

    '&:hover, &:focus': {
      color: StylesButtonVariables(theme).color.base,
    },
  },

  theme.settings.contrast.enable &&
    theme.settings.contrast.button &&
    !props.noContrast && {
      '.u-contrast &': {
        background: theme.brand.violet,
        color: theme.contrast.base,
        borderColor: theme.contrast.base,

        '&:hover, &:focus': {
          color: theme.contrast.base,
        },
      },
    },
]

export const StylesButtonOutlinePrimary = (theme, props = {}) => {
  const interactiveStyles = {
    color: StylesButtonVariables(theme).color.base,
    borderColor: theme.color.primary.dark,
  }

  return [
    {
      background: theme.color.light.base,
      borderColor: theme.color.primary.base,
      color: StylesButtonVariables(theme).color.base,

      '&:hover, &:focus': interactiveStyles,

      '&.is-active': interactiveStyles,
    },

    props.active && interactiveStyles,

    theme.settings.contrast.enable &&
      theme.settings.contrast.button &&
      !props.noContrast && {
        '.u-contrast &': [
          {
            color: StylesButtonVariables(theme).color.base,

            '&:hover, &:focus': interactiveStyles,

            '&.is-active': interactiveStyles,
          },

          props.active && interactiveStyles,
        ],
      },
  ]
}

export const StylesButtonPrimary = (theme, props = {}) => {
  const interactiveStyles = [
    {
      color: theme.contrast.base,
      background: theme.brand.violet,
      borderColor: theme.brand.violet,
    },

    theme.settings.button.gradient.enable &&
      generateButtonGradient({
        start: theme.brand.violet,
        stop: theme.brand.secondaryBlue,
      }),
  ]

  const interactiveStylesContrast = {
    color: theme.brand.violet,
  }

  return [
    {
      background: theme.brand.violet,
      borderColor: theme.brand.violet,
      color: theme.contrast.base,

      '&:hover, &:focus': interactiveStyles,

      '&.is-active': interactiveStyles,
    },

    theme.settings.button.gradient.enable &&
      generateButtonGradient({
        start: theme.brand.violet,
        stop: theme.brand.secondaryBlue,
      }),

    props.active && interactiveStyles,

    theme.settings.contrast.enable &&
      theme.settings.contrast.button &&
      !props.noContrast && {
        '.u-contrast &': [
          {
            background: theme.contrast.base,
            borderColor: theme.contrast.base,
            color: theme.brand.violet,

            '&:hover, &:focus': interactiveStylesContrast,

            '&.is-active': interactiveStylesContrast,
          },

          props.active && interactiveStylesContrast,
        ],
      },
  ]
}

export const StylesButtonSecondary = (theme, props = {}) => [
  {
    background: StylesButtonVariables(theme).color.base,
    borderColor: StylesButtonVariables(theme).color.base,
    color: theme.contrast.base,

    '&:hover, &:focus': {
      color: theme.contrast.base,
    },
  },
  theme.settings.contrast.enable &&
    theme.settings.contrast.button &&
    !props.noContrast && {
      '.u-contrast &': {
        background: theme.contrast.base,
        borderColor: theme.contrast.base,
        color: StylesButtonVariables(theme).color.base,

        '&:hover, &:focus': {
          color: StylesButtonVariables(theme).color.base,
        },
      },
    },
]

export const StylesButtonDanger = (theme, props = {}) => {
  const interactiveStyles = {
    color: theme.contrast.base,
    background: theme.color.danger.dark,
    borderColor: theme.color.danger.dark,
  }

  const interactiveStylesContrast = {
    color: theme.color.danger.dark,
  }

  return [
    {
      background: theme.color.danger.base,
      borderColor: theme.color.danger.base,
      color: theme.contrast.base,

      '&:hover, &:focus': interactiveStyles,

      '&.is-active': interactiveStyles,
    },

    props.active && interactiveStyles,

    theme.settings.contrast.enable &&
      theme.settings.contrast.button &&
      !props.noContrast && {
        '.u-contrast &': [
          {
            background: theme.contrast.base,
            borderColor: theme.contrast.base,
            color: theme.color.danger.base,

            '&:hover, &:focus': interactiveStylesContrast,

            '&.is-active': interactiveStylesContrast,
          },

          props.active && interactiveStylesContrast,
        ],
      },
  ]
}

export const StylesButtonOutlineMint = (theme, props = {}) => [
  {
    background: 'transparent',
    borderColor: theme.brand.mint,
    color: theme.contrast.base,

    '&:hover, &:focus': {
      color: theme.contrast.base,
    },
  },

  theme.settings.contrast.enable &&
    theme.settings.contrast.button &&
    !props.noContrast && {
      '.u-contrast &': {
        background: 'transparent',
        color: StylesButtonVariables(theme).color.base,
        borderColor: theme.brand.mint,

        '&:hover, &:focus': {
          color: StylesButtonVariables(theme).color.base,
        },
      },
    },
]

export const StylesButtonIconOnly = (theme, props = {}) => [
  {
    padding: 0,
    width: theme.height.base,

    svg: {
      width: StylesIconVariables.large,
      height: StylesIconVariables.large,
    },
  },
  props.size === 'small' && {
    width: theme.height.small,

    svg: {
      width: StylesIconVariables.medium,
      height: StylesIconVariables.medium,
    },
  },
  props.size === 'xsmall' && {
    width: theme.height.xsmall,

    svg: {
      width: StylesIconVariables.base,
      height: StylesIconVariables.base,
    },
  },
]

//
// <button> reset
//
export const StylesButtonReset = {
  // 1. Remove default browser appearance for buttons.
  // 2. Remove margins.
  // 3. Remove borders for IE.
  // 4. Normalize font and color  not inherited by `button`.
  // 5. Address `overflow` in IE
  // 6. Normalize cursor style
  // 7. Normalize line-height
  // 8. Normalize text-align
  // 9. Remove inner padding and border in Firefox 4+.

  // 1
  appearance: 'none',
  background: 'none',
  // 2
  padding: 0,
  margin: 0,
  // 3
  borderWidth: 0,
  // 4
  font: 'inherit',
  textDecoration: 'none',
  color: 'inherit',
  // 5
  overflow: 'visible',
  // 6
  cursor: 'pointer',
  // 7
  lineHeight: 'normal',
  // 8
  textAlign: 'inherit',

  // 9
  '&::-moz-focus-inner': {
    border: 0,
    padding: 0,
  },
}

const Button = React.forwardRef(
  (
    {
      active,
      actionType = 'button',
      as: Component = 'button',
      children,
      className,
      disabled,
      fullWidth,
      iconOnly,
      loading,
      noContrast,
      size,
      type,
      url,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme()

    const buttonProps = {
      disabled: disabled || loading,
      ref,
      ...rest,
    }

    if (url) {
      buttonProps.href = url
      Component = 'a'
    }

    if (Component === 'button') {
      buttonProps.type = actionType
    }

    return (
      <Component
        css={[
          type !== 'reset' && StylesButtonBase(theme, { noContrast }),
          type === 'reset' && StylesButtonReset,
          size === 'small' && StylesButtonSmall(theme),
          size === 'xsmall' && StylesButtonXsmall(theme),
          type === 'default' && StylesButtonDefault(theme, { noContrast }),
          type === 'outlinePrimary' &&
            StylesButtonOutlinePrimary(theme, { active, noContrast }),
          type === 'primary' &&
            StylesButtonPrimary(theme, { active, noContrast }),
          type === 'secondary' && StylesButtonSecondary(theme, { noContrast }),
          type === 'danger' && StylesButtonDanger(theme, { noContrast }),
          type === 'outlineMint' &&
            StylesButtonOutlineMint(theme, { noContrast }),
          iconOnly && StylesButtonIconOnly(theme, { size }),
          fullWidth && {
            width: '100%',
          },
          theme.settings.button.misc,
        ]}
        className={clsx(`CK__Button CK__Button--${type || 'blank'}`, className)}
        {...buttonProps}
      >
        {type === 'reset' ? (
          children
        ) : (
          <span css={{ color: loading && 'transparent' }}>{children}</span>
        )}
        {loading && type !== 'reset' && (
          <Loader
            css={[
              misc.absoluteCenter,
              {
                width: StylesIconVariables.large,
                height: StylesIconVariables.large,
              },
            ]}
          />
        )}
      </Component>
    )
  }
)

Button.propTypes = {
  active: PropTypes.bool,
  actionType: PropTypes.oneOf(['button', 'submit', 'reset']),
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  iconOnly: PropTypes.bool,
  /** Re-uses the Loader component */
  loading: PropTypes.bool,
  noContrast: PropTypes.bool,
  size: PropTypes.oneOf(['base', 'xsmall', 'small']),
  /** reset is used for elements that have no direct path attached to them; to ensure we keep our markup semantic and accessible. */
  type: PropTypes.oneOf([
    'reset',
    'default',
    'primary',
    'secondary',
    'danger',
    'outlinePrimary',
    'outlineMint',
  ]),
  url: PropTypes.string,
}

export default Button
