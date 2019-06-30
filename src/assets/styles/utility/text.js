export const heading = theme => ({
  fontFamily: theme.fontFamily.heading,
  fontWeight: theme.fontWeight.bold,
  color: theme.fontColor.heading,
  textTransform: 'none',
  letterSpacing: theme.letterSpacing.negative,
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
