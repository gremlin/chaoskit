import { rgba } from 'polished';

export const variables = theme => ({
  background: theme.color.light.base,
  height: theme.height.base,
  padding: theme.space.base,
  fontColor: theme.fontColor.base,
  contrast: {
    background: rgba(theme.contrast.base, 0.1),
    fontColor: theme.contrast.base,
    borderColor: theme.contrast.base,
  },
});

// To be used in all input, select, and textarea controls
//
// 1. Address margins set differently in Firefox/IE and Chrome/Safari/Opera.
// 2. Remove `border-radius` in iOS.
// 3. Correct `font` properties and `color` not being inherited.
export const base = theme => ({
  // 1
  margin: 0,
  // 2
  borderRadius: 0,
  // 3
  font: 'inherit',
  fontSize: variables(theme).fontSize,
  color: 'inherit',
});

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
    borderRadius: theme.borderRadius.base,
    width: '100%',
    position: 'relative',
    boxShadow: theme.boxShadow.base,

    '&:focus': {
      borderColor: theme.color.primary.base,
      outline: 0,
      background: variables(theme).background,
      boxShadow: `${theme.boxShadowOffset} ${rgba(
        theme.color.primary.base,
        0.75
      )}`,
      color: variables(theme).fontColor,
      zIndex: 1,
    },

    '&[disabled]': {
      opacity: theme.opacity.base,
      borderColor: theme.borderColor.base,
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
  },

  props.error && {
    borderColor: theme.color.danger.base,
    boxShadow: `${theme.boxShadowOffset} ${rgba(
      theme.color.danger.base,
      0.75
    )}`,
  },

  theme.settings.contrast &&
    theme.settings.formContrast &&
    !props.noContrast && {
      '.u-contrast &': {
        background: variables(theme).contrast.background,
        border: `1px solid ${variables(theme).contrast.borderColor}`,
        color: variables(theme).contrast.fontColor,
        boxShadow: 'none',

        '&:focus': {
          borderColor: variables(theme).contrast.borderColor,
          background: 'transparent',
          boxShadow: `${theme.boxShadowOffset} ${
            variables(theme).contrast.background
          }`,
        },

        '&[disabled]': {
          backgroundColor: 'transparent',
          borderColor: variables(theme).contrast.borderColor,
          color: variables(theme).contrast.fontColor,
        },
      },
    },
];
