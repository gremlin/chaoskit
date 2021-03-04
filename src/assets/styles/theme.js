import { rgba, shade, tint, timingFunctions } from 'polished'

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
  red: '#C52C4E',
  red__filter:
    'brightness(0) saturate(100%) invert(26%) sepia(50%) saturate(2464%) hue-rotate(320deg) brightness(93%) contrast(98%)',
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
  inset: 'inset 0 1px 3px rgba(0,0,0,.0625)',
}

const fontFamily = {
  base:
    'Sohne VF, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  mono: "'Sohne Mono', Consolas, monospace, serif",
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
}

// Raw font-size values
// @NOTE These normally won't be used as `text` is the better usage that includes line-heights
const fontSize = {
  '2xsmall': 10,
  xsmall: 12,
  small: 14,
  base: 16,
  medium: 18,
  large: 20,
  xlarge: 26,
  '2xlarge': 34,
  '3xlarge': 42,
  '4xlarge': 50,
  '5xlarge': 75,
}

const fontWeight = {
  light: 300,
  base: 400,
  bold: 600,
  xbold: 700,
}

const height = {
  large: 64,
  base: 48,
  small: 40,
  xsmall: 32,
  '2xsmall': 28,
  '3xsmall': 24,
  '4xsmall': 20,
}

const lineHeight = {
  base: 1.65,
  small: 1.25,
}

const letterSpacing = {
  base: 'normal',
  extended: '0.125em',
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

// Utility that combines raw font-sizes with responsive and line-height utilities in one-go
const text = {
  '2xsmall': {
    fontSize: fontSize['2xsmall'],
    lineHeight: 1,
  },
  xsmall: {
    fontSize: fontSize.xsmall,
    lineHeight: 1,
  },
  small: {
    fontSize: fontSize.small,
    lineHeight: lineHeight.small,
  },
  base: {
    fontSize: fontSize.base,
    lineHeight: lineHeight.base,
  },
  medium: {
    fontSize: fontSize.medium,
    lineHeight: lineHeight.base,
  },
  medium__fluid: {
    fontSize: fontSize.base,
    lineHeight: lineHeight.base,

    [mq.medium]: {
      fontSize: fontSize.medium,
    },
  },
  large: {
    fontSize: fontSize.large,
    lineHeight: lineHeight.small,
  },
  large__fluid: {
    fontSize: fontSize.medium,
    lineHeight: lineHeight.base,

    [mq.medium]: {
      fontSize: fontSize.large,
      lineHeight: lineHeight.small,
    },
  },
  xlarge: {
    fontSize: fontSize.xlarge,
    lineHeight: lineHeight.small,
  },
  xlarge__fluid: {
    fontSize: fontSize.large,
    lineHeight: lineHeight.small,

    [mq.medium]: {
      fontSize: fontSize.xlarge,
    },
  },
  '2xlarge': {
    fontSize: fontSize['2xlarge'],
    lineHeight: lineHeight.small,
  },
  '2xlarge__fluid': {
    fontSize: fontSize.xlarge,
    lineHeight: lineHeight.small,

    [mq.medium]: {
      fontSize: fontSize['2xlarge'],
    },
  },
  '3xlarge': {
    fontSize: fontSize['3xlarge'],
    lineHeight: lineHeight.small,
  },
  '3xlarge__fluid': {
    fontSize: fontSize['2xlarge'],
    lineHeight: lineHeight.small,

    [mq.medium]: {
      fontSize: fontSize['3xlarge'],
    },
  },
  '4xlarge': {
    fontXize: fontSize['4xlarge'],
    lineHeight: lineHeight.small,
  },
  '4xlarge__fluid': {
    fontSize: fontSize['3xlarge'],
    lineHeight: lineHeight.small,

    [mq.medium]: {
      fontSize: fontSize['4xlarge'],
    },
  },
}

// Quick references to emulated heading styles when not using the element
const headingPreset = {
  h1: { ...text['4xlarge__fluid'], fontWeight: fontWeight.bold },
  h2: { ...text['3xlarge__fluid'], fontWeight: fontWeight.bold },
  h3: { ...text['2xlarge__fluid'], fontWeight: fontWeight.bold },
  h4: { ...text.xlarge__fluid, fontWeight: fontWeight.bold },
  h5: { ...text.large__fluid, fontWeight: fontWeight.bold },
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
  text,
  headingPreset,
}
