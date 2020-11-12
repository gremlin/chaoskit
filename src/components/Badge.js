import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import clsx from 'clsx'

export const StylesBadgeVariables = (theme) => ({
  height: theme.height.xxxsmall,
})

export const StylesBadgeBase = (theme) => ({
  background: theme.color.light.base,
  border: theme.border.base,
  borderRadius: theme.borderRadius.base,
  color: theme.fontColor.muted,
  cursor: 'default',
  display: 'inline-flex',
  alignItems: 'center',
  padding: `0 ${theme.space.small}px`,
  lineHeight: '1',
  fontSize: theme.fontSize.xsmall,
  fontFamily: theme.fontFamily.heading,
  fontWeight: theme.fontWeight.bold,
  letterSpacing: theme.letterSpacing.small,
  height: StylesBadgeVariables(theme).height,
  textAlign: 'center',
  textTransform: 'uppercase',
  userSelect: 'none',
})

export const StylesBadgeSecondary = (theme) => ({
  borderColor: theme.fontColor.base,
  background: theme.fontColor.base,
  color: theme.contrast.base,
})

export const StylesBadgePrimary = (theme) => ({
  borderColor: theme.color.primary.base,
  background: theme.color.primary.base,
  color: theme.contrast.base,
})

export const StylesBadgeDanger = (theme) => ({
  borderColor: theme.color.danger.base,
  background: theme.color.danger.base,
  color: theme.contrast.base,
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
  type: PropTypes.oneOf(['default', 'primary', 'danger', 'secondary']),
}

export default Badge
