export const underline = {
  textDecoration: 'underline !important',
  textDecorationSkipInk: 'auto',
}

export const expanded = (theme) => ({
  textTransform: 'uppercase',
  letterSpacing: theme.letterSpacing.extended,
})
