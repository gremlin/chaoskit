import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import clsx from 'clsx'

import { text } from '../assets/styles/utility'

export const StylesBadgeVariables = (theme) => ({
  height: theme.height['3xsmall'],
})

export const StylesBadgeBase = (theme) => ({
  background: theme.color.panel.dark,
  borderRadius: theme.borderRadius.base,
  color: theme.fontColor.base,
  cursor: 'default',
  display: 'inline-flex',
  alignItems: 'center',
  padding: `0 ${theme.space.small}px`,
  ...theme.text.xsmall,
  ...text.expanded(theme),
  fontWeight: theme.fontWeight.bold,
  height: StylesBadgeVariables(theme).height,
  textAlign: 'center',
  userSelect: 'none',
})

export const StylesBadgeSecondary = (theme) => ({
  background: theme.fontColor.base,
  color: theme.contrast.base,
})

export const StylesBadgePrimary = (theme) => ({
  background: theme.color.primary.light,
  color: theme.color.primary.base,
})

export const StylesBadgeDanger = (theme) => ({
  background: theme.color.danger.light,
  color: theme.color.danger.base,
})

export const StylesBadgeWarning = (theme) => ({
  background: theme.color.warning.light,
  color: theme.color.warning.base,
})

export const StylesBadgeInfo = (theme) => ({
  background: theme.color.info.light,
  color: theme.color.info.base,
})

export const StylesBadgeRounded = (theme) => ({
  borderRadius: theme.borderRadius.rounded,
})

const Badge = ({ className, children, rounded, type, ...rest }) => {
  const theme = useTheme()

  return (
    <div
      css={[
        StylesBadgeBase(theme),
        type === 'primary' && StylesBadgePrimary(theme),
        type === 'danger' && StylesBadgeDanger(theme),
        type === 'secondary' && StylesBadgeSecondary(theme),
        type === 'warning' && StylesBadgeWarning(theme),
        type === 'info' && StylesBadgeInfo(theme),
        rounded && StylesBadgeRounded(theme),
      ]}
      className={clsx('CK__Badge', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  rounded: PropTypes.bool,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'danger',
    'secondary',
    'warning',
    'info',
  ]),
}

export default Badge
