export const heading = (theme, lineHeight = 'small') => ({
  fontFamily: theme.fontFamily.heading,
  fontWeight: theme.fontWeight.bold,
  textTransform: 'none',
  letterSpacing: theme.letterSpacing.negative,
  lineHeight: theme.lineHeight[lineHeight],
})

export const underline = {
  textDecoration: 'underline !important',
  textDecorationSkipInk: 'auto',
}
