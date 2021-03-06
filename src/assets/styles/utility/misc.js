import { hideVisually } from 'polished'

// Avoid using this in SSR applications as they have trouble matching against universal selectors
// Use `.use-trimChildren` utility class instead
export const trimChildren = {
  '*': {
    '&:last-child': {
      marginBottom: '0 !important',
    },

    '> *': {
      '&:last-child': {
        marginBottom: '0 !important',
      },
    },
  },
}

export const overflow = {
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
}

export const hide = { ...hideVisually() }

export const getComputedLineHeight = ({ fontSize, lineHeight }) =>
  fontSize * lineHeight

export const absoluteCenter = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
}
