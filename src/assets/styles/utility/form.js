import { rgba } from 'polished'

export const variables = (theme) => ({
  background: theme.color.light.base,
  boxShadow: theme.boxShadow.base,
  height: theme.height.base,
  padding: theme.space.base,
  fontColor: theme.fontColor.base,
  controlOffset: theme.space.xsmall + theme.space.small,
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
export const input = (theme) => [
  {
    // 1
    height: variables(theme).height,
    // 2
    maxWidth: '100%',
    // 3
    paddingTop: variables(theme).controlOffset + theme.space.xsmall,
    paddingRight: variables(theme).controlOffset,
    paddingBottom: 0,
    paddingLeft: variables(theme).controlOffset,
    // 4
    border: 0,
    background: 'transparent',
    color: variables(theme).fontColor,
    width: '100%',

    '&:focus': {
      outline: 0,
      borderColor: theme.color.border.base,
      color: variables(theme).fontColor,
      zIndex: 1,
    },

    '&:disabled': {
      borderColor: theme.color.border.base,
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
        opacity: theme.opacity.base, // 1
        color: 'currentColor',
        textOverflow: 'hidden',

        '&:disabled': {
          color: theme.fontColor.base,
        },
      },
    ],
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
