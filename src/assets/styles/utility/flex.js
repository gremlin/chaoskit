export const base = {
  display: 'flex',
  listStyle: 'none',
  padding: '0',
  margin: '0',
};

export const deepMatch = {
  '> *': {
    display: 'flex',
    flexWrap: 'wrap',

    '> *': {
      flex: 'none',
      width: '100%',
    },
  },
};
