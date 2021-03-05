import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import clsx from 'clsx'

import { form } from '../assets/styles/utility'

export const StylesControlLabel = (theme) => ({
  position: 'absolute',
  top: theme.space.small,
  left: 0,
  paddingLeft: form.variables(theme).controlOffset,
  paddingRight: form.variables(theme).controlOffset,
  width: '100%',
  pointerEvents: 'none',
  ...theme.text.xsmall,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

const ControlLabel = ({ className, ...rest }) => {
  const theme = useTheme()

  return (
    <div
      className={clsx('CK__ControlWrapper', className)}
      css={StylesControlLabel(theme)}
      {...rest}
    />
  )
}

ControlLabel.propTypes = {
  className: PropTypes.string,
}

export default ControlLabel
