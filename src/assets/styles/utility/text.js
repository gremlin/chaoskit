export const heading = theme => ({
  margin: `0 0 ${theme.space.base}px`,
  fontFamily: theme.fontFamily.heading,
  fontWeight: theme.fontWeight.bold,
  color: theme.fontColor.heading,
  textTransform: 'none',
  letterSpacing: theme.letterSpacing.negative,

  '* + &': {
    marginTop: theme.space.large,
  },
});

export const underline = {
  textDecoration: 'underline !important',
  textDecorationSkipInk: 'auto',
};

export const truncate = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};
