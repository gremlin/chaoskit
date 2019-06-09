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

export const spaceChildren = ({
  theme = {},
  property = 'marginLeft',
  size = theme.space.base,
}) => ({
  '> * + *': {
    [property]: size,
  },
});

export const overflow = {
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
};

export const hide = {
  display: 'none !important',
  visibility: 'hidden !important',
};

export const absoluteCenter = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};
