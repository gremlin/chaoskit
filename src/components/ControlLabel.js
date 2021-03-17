import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import clsx from 'clsx'

import { form } from '../assets/styles/utility'

export const StylesControlLabel = (theme) => ({
  position: 'sticky',
  top: 0,
  left: 0,
  gridRow: 1,
  gridColumn: 1,
  zIndex: 2,
  borderTopLeftRadius: theme.borderRadius.base,
  borderTopRightRadius: theme.borderRadius.base,
  background: form.variables(theme).background,
  paddingLeft: form.variables(theme).controlOffset,
  paddingRight: form.variables(theme).controlOffset,
  paddingTop: theme.space.xsmall,
  paddingBottom: theme.space.xsmall / 2,
  width: '100%',
  pointerEvents: 'none',
  ...theme.text.xsmall,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  alignSelf: 'start',
  boxShadow: theme.boxShadow.inset,
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
