export const heading = (theme, lineHeight = 'small') => ({
  fontFamily: theme.fontFamily.heading,
  fontWeight: theme.fontWeight.bold,
  color: theme.fontColor.heading,
  textTransform: 'none',
  letterSpacing: theme.letterSpacing.negative,
  lineHeight: theme.lineHeight[lineHeight],
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
