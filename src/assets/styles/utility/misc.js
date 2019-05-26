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
