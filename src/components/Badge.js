import PropTypes from 'prop-types';

export const StylesBadgeBase = theme => ({
  background: theme.color.light.base,
  border: `1px solid ${theme.border.base}`,
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
  height: theme.height.micro,
  textAlign: 'center',
  textTransform: 'uppercase',
  userSelect: 'none',
});

export const StylesBadgePrimary = theme => ({
  borderColor: theme.color.primary.base,
  background: theme.color.primary.base,
  color: theme.contrast.base,
});

export const StylesBadgeDanger = theme => ({
  borderColor: theme.color.danger.base,
  background: theme.color.danger.base,
  color: theme.contrast.base,
});

export const StylesBadgeRounded = theme => ({
  borderRadius: theme.height.micro / 2,
});

const Badge = ({
  label, rounded, type, ...opts
}) => (
  <div
    css={theme => [
      StylesBadgeBase(theme),
      type === 'primary' && StylesBadgePrimary(theme),
      type === 'danger' && StylesBadgeDanger(theme),
      rounded && StylesBadgeRounded(theme),
    ]}
    {...opts}
  >
    {label}
  </div>
);

Badge.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'primary', 'danger']),
};

export default Badge;
