import { rgba } from 'polished'

import { StylesIconVariables } from '../../../components/Icon'

import { form } from '.'

export const variables = (theme) => ({
  background: theme.color.light.base,
  boxShadow: theme.boxShadow.base,
  height: theme.height.base,
  padding: theme.space.base,
  fontColor: theme.fontColor.base,
  contrast: {
    background: rgba(theme.contrast.base, 0.1),
    fontColor: theme.contrast.base,
    borderColor: theme.contrast.base,
  },
})

// To be used in all input, select, and textarea controls
//
// 1. Address margins set differently in Firefox/IE and Chrome/Safari/Opera.
// 2. Remove `border-radius` in iOS.
// 3. Correct `font` properties and `color` not being inherited.
export const base = (theme) => ({
  // 1
  margin: 0,
  // 2
  borderRadius: 0,
  // 3
  font: 'inherit',
  fontSize: variables(theme).fontSize,
  color: 'inherit',
})

// Used for base control styles for input, textarea, and select
//
// 1. Must be `height` because `min-height` is not working in OSX
// 2. Responsiveness: Sets a maximum width relative to the parent to scale on narrower viewports
// 3. Vertical `padding` needed for `select` elements in Firefox
// 4. Style
export const input = (theme, props = {}) => [
  {
    // 1
    height: variables(theme).height,
    // 2
    maxWidth: '100%',
    // 3
    padding: `0 ${variables(theme).padding}px`,
    // 4
    border: theme.border.base,
    background: variables(theme).background,
    color: variables(theme).fontColor,
    transition: `border-color ${theme.timing.base} ${theme.transition.base}`,
    borderRadius: theme.settings.ui.radius && theme.borderRadius.base,
    width: '100%',
    position: 'relative',
    boxShadow: variables(theme).boxShadow,

    '&:focus': {
      borderColor: theme.color.primary.base,
      outline: 0,
      background: variables(theme).background,
      boxShadow: `${theme.boxShadowOffset.base} ${rgba(
        theme.color.primary.base,
        0.75
      )}`,
      color: variables(theme).fontColor,
      zIndex: 1,
    },

    '&:disabled': {
      opacity: theme.opacity.base,
      borderColor: theme.color.border.base,
      backgroundColor: theme.color.panel.base,
      color: variables(theme).fontColor,
      cursor: 'not-allowed',
      userSelect: 'none',
    },

    '&:-webkit-autofill': {
      '&, &:hover, &:focus, &:active': {
        transitionDelay: '5000s',
        transitionProperty: 'background-color, color',
      },
    },

    // 1. Removes placeholder transparency in Firefox
    '::placeholder': [
      {
        opacity: 1, // 1
        color: theme.fontColor.muted,
        textOverflow: 'hidden',

        '&:disabled': {
          color: theme.fontColor.base,
        },
      },

      theme.settings.contrast.enable &&
        theme.settings.contrast.form &&
        !props.noContrast && {
          '.u-contrast &': {
            color: theme.contrast.muted,

            '&:disabled': {
              color: theme.contrast.base,
            },
          },
        },
    ],
  },

  props.placeholder && [
    {
      '&:not(:placeholder-shown)': {
        paddingTop: theme.space.small + theme.space.xsmall,

        '+ .CK__FloatingLabel': {
          opacity: 1,
        },
      },
    },

    (props.required || props.error) && {
      paddingRight: `calc(${
        form.variables(theme).padding + theme.space.small
      }px + ${StylesIconVariables.base})`,
    },
  ],

  props.error && {
    borderColor: theme.color.danger.base,
    boxShadow: `${theme.boxShadowOffset.base} ${rgba(
      theme.color.danger.base,
      0.75
    )}`,
  },

  theme.settings.contrast.enable &&
    theme.settings.contrast.form &&
    !props.noContrast && {
      '.u-contrast &': {
        background: 'transparent',
        border: '1px solid',
        borderColor: variables(theme).contrast.borderColor,
        color: variables(theme).contrast.fontColor,
        boxShadow: 'none',

        '&:focus': {
          borderColor: variables(theme).contrast.borderColor,
          background: 'transparent',
          boxShadow: `${theme.boxShadowOffset.base} ${
            variables(theme).contrast.background
          }`,
        },

        '&:disabled': {
          backgroundColor: variables(theme).contrast.background,
          borderColor: variables(theme).contrast.borderColor,
          color: variables(theme).contrast.fontColor,
        },
      },
    },
]

export const styles = (theme) => [
  {
    // Define consistent border, margin, and padding.
    fieldset: {
      border: 0,
      margin: 0,
      padding: 0,
    },

    legend: {
      // Behave like a block element
      width: '100%',
      // Remove default border/padding
      border: 0,
      padding: 0,
      // `margin-bottom` is not working in Safari and Opera. Using `padding` and :after instead to create the border
      paddingBottom: theme.space.small,
      fontSize: theme.fontSize.base,
      fontWeight: theme.fontWeight.bold,
      color: theme.fontColor.muted,
      position: 'relative',

      '&::after': {
        content: "''",
        position: 'absolute',
        top: '50%',
        transform: `translateY(-${(theme.space.small - 1) / 2}px)`,
        width: '100%',
        background: theme.color.border.base,
        height: 1,
        marginLeft: theme.space.xsmall,
      },
    },
  },
]
