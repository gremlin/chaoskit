import linkIcon from '../icons/link.svg'

import { link, misc, contrast, prism, table, form } from './utility'

export const StylesGlobalVariables = (theme) => ({
  code: {
    color: theme.color.danger.base,
    background: theme.color.panel.base,
  },
})

export const globalStyles = (theme) => [
  {
    // Disables warnings for @reach components since we provide our own
    ':root': {
      '--reach-portal': 1,
      '--reach-tabs': 1,
    },

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
      msOverflowStyle: 'scrollbar',
      // 4
      background: theme.color.light.base,
      color: theme.fontColor.base,
      // 5
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
      // 6
      boxSizing: 'border-box',
      // 7
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

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
      outline: 'none !important',
    },

    //
    // Links
    //

    // 1. Remove gaps in links underline in iOS 8+ and Safari 8+.
    a: [
      link.baseDefault(theme),
      {
        WebkitTextDecorationSkip: 'objects', // 1
        textDecoration: 'none',
        cursor: 'pointer',

        '&:hover, &:focus': {
          textDecoration: 'none',
        },

        '> code': {
          position: 'relative',

          '&::after': {
            content: "''",
            display: 'inline-block',
            height: '1em',
            width: '1em',
            background: `url(${linkIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
            filter: theme.fontColor.filter,
            verticalAlign: 'middle',
            marginLeft: theme.space.xsmall,
            position: 'relative',
            top: '-0.1em',
          },
        },
      },
    ],

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
      fontFamily: theme.fontFamily.mono, // 2
      // 3
      color: StylesGlobalVariables(theme).code.color,
      whiteSpace: 'pre-wrap',
      padding: `${theme.space.xsmall / 2}px ${theme.space.xsmall}px`,
      background: theme.color.panel.base,
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
    // 1. Fix lazy loading images if parent element is set to `display: inline` and has `overflow: hidden`.
    // 2. Selector for background while loading img[data-src*='.jpg'][src*='data:image'] { background: grey; }
    'img:not([src])': {
      // 1
      minWidth: 1,
      // 2
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
      margin: `0 0 ${theme.space.base}px`,
    },

    '* + p, * + ul, * + ol, * + dl, * + blockquote, * + pre, * + address, * + fieldset, * + figure': {
      marginTop: theme.space.base,
    },

    h1: [
      theme.fontSize.h1__fluid,
      {
        lineHeight: theme.lineHeight.small,
        color: theme.fontColor.heading,
        margin: `0 0 ${theme.space.base}px`,
        fontWeight: theme.fontWeight.xbold,

        '* + &': {
          marginTop: theme.space.large,
        },
      },
    ],

    h2: [
      theme.fontSize.h2__fluid,
      {
        lineHeight: theme.lineHeight.small,
        color: theme.fontColor.heading,
        margin: `0 0 ${theme.space.base}px`,
        fontWeight: theme.fontWeight.bold,

        '* + &': {
          marginTop: theme.space.large,
        },
      },
    ],

    h3: [
      theme.fontSize.h3__fluid,
      {
        lineHeight: theme.lineHeight.small,
        color: theme.fontColor.heading,
        margin: `0 0 ${theme.space.base}px`,
        fontWeight: theme.fontWeight.bold,

        '* + &': {
          marginTop: theme.space.large,
        },
      },
    ],

    h4: [
      theme.fontSize.xlarge__fluid,
      {
        lineHeight: theme.lineHeight.small,
        color: theme.fontColor.heading,
        margin: `0 0 ${theme.space.base}px`,
        fontWeight: theme.fontWeight.bold,

        '* + &': {
          marginTop: theme.space.large,
        },
      },
    ],

    h5: [
      {
        color: theme.fontColor.heading,
        fontSize: theme.fontSize.h5,
        margin: `0 0 ${theme.space.base}px`,
        fontWeight: theme.fontWeight.bold,

        '* + &': {
          marginTop: theme.space.large,
        },
      },
    ],

    h6: [
      {
        color: theme.fontColor.heading,
        fontSize: theme.fontSize.base,
        margin: `0 0 ${theme.space.base}px`,
        fontWeight: theme.fontWeight.bold,

        '* + &': {
          marginTop: theme.space.large,
        },
      },
    ],

    //
    // Lists
    //

    'ul, ol': {
      paddingLeft: theme.space.large,
    },

    // Reset margin for nested lists
    'ul > li > ul, ul > li > ol, ol > li > ol, ol > li > ul': {
      margin: 0,
    },

    //
    // Description lists
    //

    dt: {
      fontWeight: theme.fontWeight.base,
    },

    dd: {
      marginLeft: 0,
    },

    // 1. Add correct box sizing and heigh tin Firefox
    // 2. Show the overflow in Edge and IE.
    // 3. Add the correct text-align in Edge and IE.
    // 4. Style
    hr: {
      // 1
      boxSizing: 'content-box',
      height: 0,
      // 2
      overflow: 'visible',
      // 3
      textAlign: 'inherit',
      // 4
      margin: `${theme.space.base}px 0`,
      border: 0,
      borderTop: theme.border.large,

      '* + &': {
        marginTop: theme.space.base,
      },
    },

    // Address
    address: {
      fontStyle: 'normal',
    },

    // Blockquote
    blockquote: {
      paddingLeft: theme.space.base,
      borderLeft: `5px solid ${theme.color.border.base}`,
      fontSize: theme.fontSize.base,
      lineHeight: theme.lineHeight.base,
      fontStyle: 'normal',
    },

    // Preformatted text
    // 1. Contain overflow in all browsers.
    pre: [
      misc.overflow,
      {
        padding: theme.space.base,
        background: StylesGlobalVariables(theme).code.background,
        font: `1em/${theme.lineHeight.base} ${theme.fontFamily.mono}`,
        color: theme.fontColor.base,
        tabSize: '4',
        border: theme.border.base,
        borderRadius: theme.borderRadius.base,
      },
    ],

    // Selection pseudo-element
    '::selection': {
      background: theme.color.primary.base,
      color: theme.contrast.base,
      textShadow: 'none',
    },

    //
    // HTML5 elements
    //

    // Add the correct display in Edge, IE, and Firefox.
    // Add the correct display in IE.
    'details, main': {
      display: 'block',
    },

    // Add the correct display in all browsers.
    summary: {
      display: 'list-item',
    },

    // Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.
    progress: {
      verticalAlign: 'baseline',
    },

    // Prevent displaying `audio` without controls in Chrome, Safari and Opera
    'audio:not([controls])': {
      display: 'none',
      height: 0,
    },

    // Add the correct display in IE.
    template: {
      display: 'none',
    },

    // Remove border in all browsers
    iframe: {
      border: 0,
    },

    // Ensure inline styles are never shown when using universal selectors
    // https://github.com/emotion-js/emotion/issues/1468#issuecomment-572484633
    style: { display: 'none !important' },

    // Global utility class to invoke trimming children without applying individual styles to elements which has trouble within Emotion parsing during SSR hydration
    '.use-trimChildren': misc.trimChildren,
  },

  theme.settings.form.enable && form.styles(theme),
  theme.settings.table.enable && table.styles(theme),
  theme.settings.prism.enable &&
    prism.styles(theme, StylesGlobalVariables(theme)),
  theme.settings.contrast.enable && contrast.styles(theme),
]
