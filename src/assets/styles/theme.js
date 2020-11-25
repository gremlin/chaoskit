import { fluidRange, rgba, shade, tint, timingFunctions } from 'polished'

// @NOTE Filter generator https://codepen.io/zslabs/pen/xePEVN
const brand = {
  green: '#23c386',
  green__filter:
    'brightness(0) saturate(100%) invert(60%) sepia(71%) saturate(494%) hue-rotate(105deg) brightness(92%) contrast(80%)',
  teal: '#009580',
  teal__filter:
    'brightness(0) saturate(100%) invert(35%) sepia(90%) saturate(1053%) hue-rotate(140deg) brightness(94%) contrast(104%)',
  blue: '#2265c0',
  blue__filter:
    'brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(2523%) hue-rotate(188deg) brightness(97%) contrast(97%)',
  darkBlue: '#00458a',
  darkBlue__filter:
    'brightness(0) saturate(100%) invert(19%) sepia(93%) saturate(1468%) hue-rotate(190deg) brightness(90%) contrast(108%)',
  darkerBlue: '#0e0d22',
  darkerBlue__filter:
    'brightness(0) saturate(100%) invert(6%) sepia(35%) saturate(1127%) hue-rotate(204deg) brightness(95%) contrast(102%)',
  darkestBlue: '#050d16',
  darkestBlue__filter:
    'brightness(0) saturate(100%) invert(5%) sepia(22%) saturate(1415%) hue-rotate(172deg) brightness(93%) contrast(101%)',
  purple: '#503291',
  purple__filter:
    'brightness(0) saturate(100%) invert(25%) sepia(45%) saturate(2230%) hue-rotate(237deg) brightness(79%) contrast(96%)',
  darkPurple: '#1E0C43',
  darkPurple__filter:
    'brightness(0) saturate(100%) invert(12%) sepia(58%) saturate(1698%) hue-rotate(237deg) brightness(85%) contrast(111%)',
  gray: '#606672',
  gray__filter:
    'brightness(0) saturate(100%) invert(40%) sepia(10%) saturate(514%) hue-rotate(182deg) brightness(94%) contrast(88%)',
  blueGray: '#8899ae',
  blueGray__filter:
    'brightness(0) saturate(100%) invert(71%) sepia(8%) saturate(846%) hue-rotate(173deg) brightness(85%) contrast(82%)',
  lightBlack: '#333',
  lightBlack__filter:
    'brightness(0) saturate(100%) invert(16%) sepia(0%) saturate(1335%) hue-rotate(142deg) brightness(86%) contrast(82%)',
  black: '#131313',
  black__filter:
    'brightness(0) saturate(100%) invert(3%) sepia(8%) saturate(12%) hue-rotate(314deg) brightness(101%) contrast(90%)',
  red: '#d00252',
  red__filter:
    'brightness(0) saturate(100%) invert(13%) sepia(99%) saturate(4118%) hue-rotate(327deg) brightness(85%) contrast(106%)',
  yellow: '#ffcf23',
  yellow__filter:
    'brightness(0) saturate(100%) invert(79%) sepia(82%) saturate(599%) hue-rotate(335deg) brightness(103%) contrast(102%)',
  orange: '#ffa615',
  orange__filter:
    'brightness(0) saturate(100%) invert(83%) sepia(29%) saturate(6359%) hue-rotate(345deg) brightness(102%) contrast(104%)',
}

const breakpoint = {
  xlarge: 1200,
  get large__max() {
    return this.xlarge - 1
  },
  large: 960,
  get medium__max() {
    return this.large - 1
  },
  medium: 768,
  get small__max() {
    return this.medium - 1
  },
  small: 480,
  get xsmall__max() {
    return this.small - 1
  },
}

const mq = {
  xsmall__max: `@media (max-width: ${breakpoint.xsmall__max}px)`,
  small: `@media (min-width: ${breakpoint.small}px)`,
  small__max: `@media (max-width: ${breakpoint.small__max}px)`,
  medium: `@media (min-width: ${breakpoint.medium}px)`,
  medium__max: `@media (max-width: ${breakpoint.medium__max}px)`,
  large: `@media (min-width: ${breakpoint.large}px)`,
  large__max: `@media (max-width: ${breakpoint.large__max}px)`,
  xlarge: `@media (min-width: ${breakpoint.xlarge}px)`,
}

const opacity = {
  less: 0.25,
  base: 0.5,
  overlay: 0.75,
}

const color = {
  light: {
    base: '#fff',
    filter: 'brightness(0) invert(1)',
  },
  panel: {
    base: '#f8f8f8',
    get light() {
      return tint(0.5, this.base)
    },
    get dark() {
      return shade(0.025, this.base)
    },
    filter:
      'brightness(0) saturate(100%) invert(95%) sepia(5%) saturate(576%) hue-rotate(228deg) brightness(117%) contrast(95%)',
  },
  dark: {
    base: brand.black,
    light: brand.lightBlack,
    get overlay() {
      return rgba(this.base, opacity.overlay)
    },
    filter: brand.black__filter,
  },
  primary: {
    base: brand.green,
    get light() {
      return tint(0.9, this.base)
    },
    get dark() {
      return shade(0.1, this.base)
    },
    filter: brand.green__filter,
  },
  warning: {
    base: brand.yellow,
    get light() {
      return tint(0.9, this.base)
    },
    get dark() {
      return shade(0.1, this.base)
    },
    filter: brand.yellow__filter,
  },
  danger: {
    base: brand.red,
    get light() {
      return tint(0.925, this.base)
    },
    get dark() {
      return shade(0.1, this.base)
    },
    filter: brand.red__filter,
  },
  highlight: {
    base: '#ffa',
    filter:
      'brightness(0) saturate(100%) invert(96%) sepia(37%) saturate(704%) hue-rotate(340deg) brightness(105%) contrast(103%)',
  },
  border: {
    base: '#e6e6e6',
    filter:
      'brightness(0) saturate(100%) invert(97%) sepia(1%) saturate(135%) hue-rotate(200deg) brightness(110%) contrast(80%)',
  },
}

const border = {
  base: `1px solid ${color.border.base}`,
  large: `2px solid ${color.border.base}`,
}

const borderRadius = {
  base: 4,
  large: 8,
  xlarge: 16,
  rounded: 9999,
}

const boxShadow = {
  base: 'rgba(0,0,0,0.14) 0px 1px 5px -2px',
  medium: '0 4px 6px -1px rgba(0,0,0,.08), 0 2px 4px -1px rgba(0,0,0,.04)',
  large: '0 10px 15px -3px rgba(0,0,0,.08), 0 4px 6px -2px rgba(0,0,0,.04)',
  xlarge: '0 20px 25px -5px rgba(0,0,0,.08), 0 10px 10px -5px rgba(0,0,0,.04)',
  xlarge2: '0 25px 50px -12px rgba(0,0,0,.25)',
}

const fontFamily = {
  base: "Gira, 'Helvetica Neue', Arial, sans-serif",
  code: "'Operator Mono', Consolas, monospace, serif",
  heading: "Circular, 'Helvetica Neue', Arial, sans-serif",
}

const muted = {
  base: 0.65,
}

const fontColor = {
  base: color.dark.light,
  base__filter: brand.lightBlack__filter,
  get muted() {
    return rgba(this.base, muted.base)
  },
  get mutedDark() {
    return rgba(shade(0.1, this.muted), muted.base)
  },
  heading: color.dark.light,
  get headingDark() {
    return shade(0.1, this.heading)
  },
}

const fontSize = {
  xxsmall: 10,
  xsmall: 12,
  small: 14,
  base: 16,
  medium: 18,
  large: 20,
  xlarge: 26,
  h1: 50,
  h2: 44,
  h3: 34,
  h4: 28,
  get h5() {
    return this.small
  },
  get medium__fluid() {
    return fluidRange(
      {
        prop: 'fontSize',
        fromSize: `${this.base}px`,
        toSize: `${this.medium}px`,
      },
      `${breakpoint.small}px`,
      `${breakpoint.large}px`
    )
  },
  get large__fluid() {
    return fluidRange(
      {
        prop: 'fontSize',
        fromSize: `${this.medium}px`,
        toSize: `${this.large}px`,
      },
      `${breakpoint.small}px`,
      `${breakpoint.large}px`
    )
  },
  get xlarge__fluid() {
    return fluidRange(
      {
        prop: 'fontSize',
        fromSize: `${this.large}px`,
        toSize: `${this.xlarge}px`,
      },
      `${breakpoint.small}px`,
      `${breakpoint.large}px`
    )
  },
  get h1__fluid() {
    return fluidRange(
      {
        prop: 'fontSize',
        fromSize: `${this.h2}px`,
        toSize: `${this.h1}px`,
      },
      `${breakpoint.small}px`,
      `${breakpoint.large}px`
    )
  },
  get h2__fluid() {
    return fluidRange(
      {
        prop: 'fontSize',
        fromSize: `${this.h3}px`,
        toSize: `${this.h2}px`,
      },
      `${breakpoint.small}px`,
      `${breakpoint.large}px`
    )
  },
  get h3__fluid() {
    return fluidRange(
      {
        prop: 'fontSize',
        fromSize: `${this.h4}px`,
        toSize: `${this.h3}px`,
      },
      `${breakpoint.small}px`,
      `${breakpoint.large}px`
    )
  },
}

const fontWeight = {
  base: 300,
  medium: 500,
  bold: 600,
}

const fontSizeRelative = {
  small: '0.65em',
  base: '1em',
  medium: '1.5em',
  large: '1.65em',
  xlarge: '3em',
}

const height = {
  large: 64,
  base: 48,
  small: 40,
  xsmall: 32,
  xxsmall: 28,
  xxxsmall: 24,
  xxxxsmall: 20,
}

const lineHeight = {
  base: 1.65,
  get base__computed() {
    return fontSize.base * this.base
  },
  small: 1.25,
  get small__computed() {
    return fontSize.small * this.small
  },
}

const letterSpacing = {
  base: 'normal',
  negative: '-0.025em',
  small: '0.125em',
}

const space = {
  xsmall: 4,
  small: 8,
  base: 16,
  medium: 24,
  large: 32,
  xlarge: 64,
}

const settings = {
  contrast: {
    enable: true,
    button: true,
    form: true,
    table: true,
  },
  button: {
    gradient: {
      enable: true,
      primaryStart: brand.teal,
    },
    misc: {},
  },
  prism: {
    enable: true,
    theme: 'dark',
  },
  form: {
    enable: true,
  },
  table: {
    enable: true,
  },
  classes: {
    active: 'is-active',
    open: 'is-open',
    trim: 'use-trimChildren',
    contrast: 'u-contrast',
  },
}

const transition = {
  base: timingFunctions('easeInOutExpo'),
  bounce: timingFunctions('easeOutBack'),
}

const timing = {
  short: '0.175s',
  base: '0.25s',
  long: '0.5s',
}

const motion = {
  transition: {
    base: {
      type: 'spring',
      stiffness: 700,
      damping: 30,
    },
    spring: {
      type: 'spring',
      stiffness: 350,
    },
    springX: {
      type: 'spring',
      stiffness: 125,
    },
  },
  timing: {
    short: 0.175,
    base: 0.25,
    long: 0.5,
  },
}

const contrast = {
  base: color.light.base,
  get muted() {
    return rgba(this.base, 0.8)
  },
  get border() {
    return rgba(this.base, 0.7)
  },
  get hr() {
    return rgba(this.base, 0.05)
  },
  filter: color.light.filter,
}

export const theme = {
  brand,
  color,
  border,
  borderRadius,
  breakpoint,
  mq,
  boxShadow,
  fontFamily,
  fontSizeRelative,
  muted,
  fontColor,
  fontSize,
  fontWeight,
  height,
  lineHeight,
  opacity,
  space,
  letterSpacing,
  transition,
  timing,
  motion,
  contrast,
  settings,
}
