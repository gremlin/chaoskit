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
