import { useTheme } from '@emotion/react'

export const StylesControlWrapper = (theme) => ({
  position: 'relative',
  borderRadius: theme.borderRadius.base,
  boxShadow: theme.boxShadow.inset,
  background: theme.color.light.base,
  color: theme.fontColor.muted,
  border: theme.border.base,

  '&:focus-within': {
    color: theme.color.primary.base,
  },
})

const ControlWrapper = (props) => {
  const theme = useTheme()

  return <div css={StylesControlWrapper(theme)} {...props} />
}

export default ControlWrapper
