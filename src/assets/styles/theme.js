import { mix, rgba, shade } from 'polished';

// @NOTE Filter generator https://codepen.io/zslabs/pen/xePEVN
const gremlin = {
  green: '#23c386',
  green__filter:
    'brightness(0) saturate(100%) invert(60%) sepia(71%) saturate(494%) hue-rotate(105deg) brightness(92%) contrast(80%)',
  teal: '#009580',
  teal__filter:
    'brightness(0) saturate(100%) brightness(0) saturate(100%) invert(35%) sepia(90%) saturate(1053%) hue-rotate(140deg) brightness(94%) contrast(104%)',
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
  purple: '#6544ae',
  purple__filter:
    'brightness(0) saturate(100%) invert(32%) sepia(16%) saturate(3361%) hue-rotate(225deg) brightness(94%) contrast(96%)',
  gray: '#606672',
  gray__filter:
    'brightness(0) saturate(100%) invert(40%) sepia(10%) saturate(514%) hue-rotate(182deg) brightness(94%) contrast(88%)',
  blueGray: '#8899ae',
  blueGray__filter:
    'brightness(0) saturate(100%) invert(71%) sepia(8%) saturate(846%) hue-rotate(173deg) brightness(85%) contrast(82%)',
  lightBlack: '#333',
  lightBlack__filter:
    'invert(16%) sepia(0%) saturate(1335%) hue-rotate(142deg) brightness(86%) contrast(82%)',
  black: '#222',
  black__filter:
    'invert(14%) sepia(43%) saturate(1%) hue-rotate(314deg) brightness(100%) contrast(104%)',
  red: '#d00252',
  red__filter:
    'brightness(0) saturate(100%) invert(13%) sepia(99%) saturate(4118%) hue-rotate(327deg) brightness(85%) contrast(106%)',
  yellow: '#ffcf23',
  yellow__filter:
    'brightness(0) saturate(100%) invert(79%) sepia(82%) saturate(599%) hue-rotate(335deg) brightness(103%) contrast(102%)',
};

const breakpoint = {
  small: 480,
  get small__max() {
    return this.small - 1;
  },
  medium: 768,
  get medium__max() {
    return this.medium - 1;
  },
  large: 960,
  get large__max() {
    return this.large - 1;
  },
  xlarge: 1200,
  get xlarge__max() {
    return this.xlarge - 1;
  },
};

const color = {
  light: {
    base: '#fff',
    dark: '#fafbfc',
  },
  dark: {
    base: gremlin.black,
    light: gremlin.lightBlack,
    get overlay() {
      return rgba(this.base, 0.85);
    },
  },
  primary: {
    base: gremlin.green,
    get light() {
      return mix(0.9, '#fff', this.base);
    },
    get dark() {
      return shade(0.05, this.base);
    },
  },
  warning: {
    base: gremlin.yellow,
    get light() {
      return mix(0.9, '#fff', this.base);
    },
    get dark() {
      return shade(0.05, this.base);
    },
  },
  danger: {
    base: gremlin.red,
    get light() {
      return mix(0.925, '#fff', this.base);
    },
    get dark() {
      return shade(0.05, this.base);
    },
  },
};

const border = {
  base: '#eff0f1',
};

const borderRadius = {
  base: 4,
  large: 8,
};

const font = {
  base: "Gira, 'Helvetica Neue', Arial, sans-serif",
  code: "'Operator Mono', Consolas, monospace, serif",
  heading: "Circular, 'Helvetica Neue', Arial, sans-serif",
};

const fontColor = {
  base: color.dark.light,
  get muted() {
    return rgba(this.base, 0.6);
  },
  heading: color.dark.base,
};

const fontSize = {
  xsmall: 12,
  small: 14,
  base: 16,
  medium: 18,
  large: 20,
  xlarge: 26,
};

const fontWeight = {
  base: 300,
  medium: 500,
  bold: 600,
};

const height = {
  large: 64,
  base: 48,
  small: 40,
  xsmall: 32,
  micro: 28,
};

const lineHeight = {
  base: 1.65,
  get base__computed() {
    return fontSize.base * this.base;
  },
  small: 1.25,
  get small__computed() {
    return fontSize.small * this.small;
  },
};

const opacity = {
  base: 0.5,
};

const space = {
  xsmall: 4,
  small: 8,
  base: 16,
  medium: 24,
  large: 32,
  xlarge: 64,
};

export const theme = {
  border,
  borderRadius,
  breakpoint,
  color,
  font,
  fontColor,
  fontSize,
  fontWeight,
  height,
  lineHeight,
  opacity,
  space,
};
