export const headingStyles = theme => ({
  margin: `0 0 ${theme.space.regular}px`,
  fontFamily: theme.fontFamily.heading,
  color: theme.fontColor.heading,
  textTransform: 'none',
  letterSpacing: '-0.025em',

  '* + &': {
    marginTop: theme.space.large,
  },
});

export const globalStyles = theme => ({
  // 1. Normalize default `font-family` and set `font-size` to support `rem` units
  // 2. Prevents iOS text size adjust after orientation change, without disabling user zoom
  // 3. Setting @viewport causes scrollbars to overlap content in IE11 and Edge, so we force a non-overlapping, non-auto-hiding scrollbar to counteract.
  // 4. Style
  // 5. Text rendering defaults
  // 6. border-box by default
  // 7. Change the default tap highlight to be completely transparent in iOS.
  // 8. Suppress focus outline on elements that are triggered via a mouse. Possible by bundling `what-input` library
  html: {
    // 1
    fontFamily: theme.fontFamily.base,
    fontSize: theme.fontSize.base,
    fontWeight: theme.fontWeight.base,
    lineHeight: theme.lineHeight.base,
    // 2
    textSizeAdjust: '100%',
    // 3
    '-ms-overflow-style': 'scrollbar',
    // 4
    background: theme.color.light.base,
    color: theme.fontColor.base,
    // 5
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    textRendering: 'optimizeLegibility',
    // 6
    boxSizing: 'border-box',
    // 7
    '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
    // 8
    '&:not([data-whatinput="keyboard"]) :focus': {
      outline: 'none',
    },
  },
  // Inherit 'border-box' down to sub-components
  '*': {
    boxSizing: 'inherit',

    '&::before, &::after': {
      boxSizing: 'inherit',
    },
  },
  // Remove default margin
  body: {
    margin: 0,
  },
  // Suppress the focus outline on elements that cannot be accessed via keyboard.
  // This prevents an unwanted focus outline from appearing around elements that might still respond to pointer events.
  //
  // Credit: https://github.com/suitcss/base
  '[tabindex="-1"]:focus': {
    outline: 'none important',
  },

  //
  // Links
  //

  // 1. Remove gaps in links underline in iOS 8+ and Safari 8+.
  a: {
    '-webkit-text-decoration-skip': 'objects', // 1
    color: theme.color.primary.base,
    textDecoration: 'none',
    cursor: 'pointer',

    '&:hover, &:focus': {
      color: theme.color.primary.dark,
      textDecoration: 'none',
    },
  },

  //
  // Text-level semantics
  //

  // 1. Add an underline text decoration in Safari, Edge and IE.
  // 2. Add `dotted` style in Safari.
  // @NOTE The shorthand declaration `underline dotted` is not supported in Safari, Edge and IE.
  'abbr[title]': {
    textDecoration: 'underline', // 1
    textDecorationStyle: 'dotted', // 2
  },

  // Address style set to `bolder` in Firefox 4+, Safari, and Chrome.
  'b, strong': {
    fontWeight: theme.fontWeight.bold,
  },

  // Add the correct font style in Android 4.3-.
  dfn: {
    fontStyle: 'italic',
  },

  // 1. Address odd `em`-unit font size rendering in all browsers.
  ':not(pre) > code, :not(pre) > kbd, :not(pre) > samp': {
    fontSize: '1em', // 1
    fontFamily: theme.fontFamily.code, // 2
    // 3
    color: theme.color.danger,
    whiteSpace: 'pre-wrap',
    padding: `(${theme.space.xsmall}px / 2) ${theme.space.xsmall}px`,
    background: theme.color.light.dark,
  },

  // Emphasize
  em: {
    color: 'inherit',
  },

  // Insert
  ins: {
    background: theme.color.highlight.base,
    color: 'inherit',
    textDecoration: 'none',
  },

  // Mark
  mark: {
    background: theme.color.highlight.base,
    color: 'inherit',
  },

  // Quote
  q: {
    fontStyle: 'italic',
  },

  // Addresses inconsistent and variable font size in all browsers.
  small: {
    fontSize: `calc(100% * ${theme.fontSize.small} / ${theme.fontSize.base})`,
  },

  // Prevents `sub` and `sup` affecting `line-height` in all browsers.
  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },

  sup: {
    top: '-0.5em',
  },

  sub: {
    bottom: '-0.25em',
  },

  //
  // Embedded Content
  //

  // Remove the gap between audio, canvas, iframes, images, videos and the bottom of their containers.
  'audio, canvas, iframe, img, svg, video': {
    verticalAlign: 'middle',
  },

  // 1. Add responsiveness.
  // 2. Auto-scale the height. Only needed if `height` attribute is present.
  // 3. Corrects responsive `max-width` behavior if padding and border are used.
  'canvas, img, video': {
    maxWidth: '100%', // 1
    height: 'auto', // 2
  },

  // Exclude SVGs for IE11 because they don't preserve their aspect ratio
  '@supports (display: block)': {
    svg: {
      maxWidth: '100%',
      height: 'auto',
    },
  },

  // Correct overflow not hidden in IE 9/10/11.
  'svg:not(:root)': {
    overflow: 'hidden',
  },

  // Hide `alt` text for lazy load images
  // Selector for background while loading img[data-src*='.jpg'][src*='data:image'] { background: grey; }
  'img:not([src])': {
    visibility: 'hidden',
  },

  //
  // Block elements
  //

  // Reset margin
  'blockquote, figure': {
    margin: 0,
  },

  // Margins
  'p, ul, ol, dl, blockquote, pre, address, fieldset, figure': {
    margin: `0 0 ${theme.space.base}`,
  },

  '* + p, * + ul, * + ol, * + dl, * + blockquote, * + pre, * + address, * + fieldset, * + figure': {
    marginTop: theme.space.base,
  },
});
