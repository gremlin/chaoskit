import { useTheme } from '@emotion/react'

import { form } from '../assets/styles/utility'

export const StylesControlLabel = (theme) => ({
  position: 'absolute',
  top: theme.space.xsmall,
  left: 0,
  paddingLeft: form.variables(theme).controlOffset,
  paddingRight: form.variables(theme).controlOffset,
  width: '100%',
  pointerEvents: 'none',
  fontWeight: theme.fontWeight.medium,
  fontSize: theme.fontSize.xxsmall,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

const ControlLabel = (props) => {
  const theme = useTheme()

  return <div css={StylesControlLabel(theme)} {...props} />
}

export default ControlLabel
