import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import cx from 'classnames';

export const StylesBadgeVariables = theme => ({
  height: theme.height.xxsmall,
});

export const StylesBadgeBase = theme => ({
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
  borderRadius: StylesBadgeVariables(theme).height / 2,
});

const Badge = ({ className, label, rounded, type, ...opts }) => {
  const theme = useTheme();

  return (
    <div
      css={[
        StylesBadgeBase(theme),
        type === 'primary' && StylesBadgePrimary(theme),
        type === 'danger' && StylesBadgeDanger(theme),
        rounded && StylesBadgeRounded(theme),
      ]}
      className={cx('CK__Badge', className)}
      {...opts}
    >
      {label}
    </div>
  );
};

Badge.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  rounded: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'primary', 'danger']),
};

export default Badge;
