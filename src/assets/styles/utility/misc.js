export const trimChildren = {
  '*': {
    '&:last-child': {
      marginBottom: 0,
    },

    '> *': {
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
};

export const overflow = {
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
};

export const hide = {
  display: 'none !important',
  visibility: 'hidden !important',
};
