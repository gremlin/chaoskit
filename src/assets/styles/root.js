const root = {
  ':root': {
    //
    // Brand
    //
    '--brand__light': '#fff',
    '--brand__light--filter': 'brightness(0) invert(1)',
    '--brand__green': '#23c386',
    '--brand__green--filter':
      'brightness(0) saturate(100%) invert(60%) sepia(71%) saturate(494%) hue-rotate(105deg) brightness(92%) contrast(80%)',
    '--brand__teal': '#009580',
    '--brand__teal--filter':
      'brightness(0) saturate(100%) invert(35%) sepia(90%) saturate(1053%) hue-rotate(140deg) brightness(94%) contrast(104%)',
    '--brand__blue': '#2265c0',
    '--brand__blue--filter':
      'brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(2523%) hue-rotate(188deg) brightness(97%) contrast(97%)',
    '--brand__darkBlue': '#00458a',
    '--brand__darkBlue--filter':
      'brightness(0) saturate(100%) invert(19%) sepia(93%) saturate(1468%) hue-rotate(190deg) brightness(90%) contrast(108%)',
    '--brand__darkerBlue': '#0e0d22',
    '--brand__darkerBlue--filter':
      'brightness(0) saturate(100%) invert(6%) sepia(35%) saturate(1127%) hue-rotate(204deg) brightness(95%) contrast(102%)',
    '--brand__darkestBlue': '#050d16',
    '--brand__darkestBlue--filter':
      'brightness(0) saturate(100%) invert(5%) sepia(22%) saturate(1415%) hue-rotate(172deg) brightness(93%) contrast(101%)',
    '--brand__purple': '#503291',
    '--brand__purple--filter':
      'brightness(0) saturate(100%) invert(25%) sepia(45%) saturate(2230%) hue-rotate(237deg) brightness(79%) contrast(96%)',
    '--brand__darkPurple': '#1E0C43',
    '--brand__darkPurple--filter':
      'brightness(0) saturate(100%) invert(12%) sepia(58%) saturate(1698%) hue-rotate(237deg) brightness(85%) contrast(111%)',
    '--brand__gray': '#606672',
    '--brand__gray--filter':
      'brightness(0) saturate(100%) invert(40%) sepia(10%) saturate(514%) hue-rotate(182deg) brightness(94%) contrast(88%)',
    '--brand__blueGray': '#8899ae',
    '--brand__blueGray--filter':
      'brightness(0) saturate(100%) invert(71%) sepia(8%) saturate(846%) hue-rotate(173deg) brightness(85%) contrast(82%)',
    '--brand__lightBlack': '#333',
    '--brand__lightBlack--filter':
      'brightness(0) saturate(100%) invert(16%) sepia(0%) saturate(1335%) hue-rotate(142deg) brightness(86%) contrast(82%)',
    '--brand__black': '#131313',
    '--brand__black--filter':
      'brightness(0) saturate(100%) invert(3%) sepia(8%) saturate(12%) hue-rotate(314deg) brightness(101%) contrast(90%)',
    '--brand__red': '#d00252',
    '--brand__red--filter':
      'brightness(0) saturate(100%) invert(13%) sepia(99%) saturate(4118%) hue-rotate(327deg) brightness(85%) contrast(106%)',
    '--brand__yellow': '#ffcf23',
    '--brand__yellow--filter':
      'brightness(0) saturate(100%) invert(79%) sepia(82%) saturate(599%) hue-rotate(335deg) brightness(103%) contrast(102%)',
    '--brand__orange': '#ffa615',
    '--brand__orange--filter':
      'brightness(0) saturate(100%) invert(83%) sepia(29%) saturate(6359%) hue-rotate(345deg) brightness(102%) contrast(104%)',

    //
    // Color
    //
    '--color__light': 'var(--brand__light)',
    '--color__light--filter': 'var(--brand__light--filter)',
    '--color__primary': 'var(--brand__green)',
    '--color__primary--filter': 'var(--brand__green--filter)',
    '--color__warning': 'var(--brand__yellow)',
    '--color__danger': 'var(--brand__red)',
    '--color__panel': '#f8f8f8',
    '--color__panel--filter':
      'brightness(0) saturate(100%) invert(95%) sepia(5%) saturate(576%) hue-rotate(228deg) brightness(117%) contrast(95%)',
    '--color__highlight': '#ffa',
    '--color__highlight--filter':
      'brightness(0) saturate(100%) invert(96%) sepia(37%) saturate(704%) hue-rotate(340deg) brightness(105%) contrast(103%)',
    '--color__border': '#e6e6e6',
    '--color__border--filter':
      'brightness(0) saturate(100%) invert(97%) sepia(1%) saturate(135%) hue-rotate(200deg) brightness(110%) contrast(80%)',

    //
    // Space
    //
    '--space__xsmall': '4px',
    '--space__small': '8px',
    '--space__base': '16px',
    '--space__medium': '24px',
    '--space__large': '32px',
    '--space__xlarge': '64px',

    //
    // Border
    //
    '--border__base': '1px solid var(--color__border)',
    '--border__large': '2px solid var(--color__border)',

    //
    // Border radius
    //
    '--borderRadius__base': '4px',
    '--borderRadius__large': '8px',

    //
    // Font family
    //
    '--fontFamily__base': "Gira, 'Helvetica Neue', Arial, sans-serif",
    '--fontFamily__code': "'Operator Mono', Consolas, monospace, serif",
    '--fontFamily__heading': "Circular, 'Helvetica Neue', Arial, sans-serif",

    //
    // Opacity
    //
    '--opacity__base': 0.5,
    '--opacity__overlay': 0.75,
  },
}

export default root
