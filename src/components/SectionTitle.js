import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from 'emotion-theming';

import { misc } from '../assets/styles/utility';

export const StylesSectionTitleWrapper = (theme, props) => [
  misc.trimChildren,
  props.space === 'xlarge' &&
    misc.fluidSize({
      theme,
      property: 'marginBottom',
      from: theme.space.large,
      to: theme.space.xlarge,
    }),
  props.space === 'large' &&
    misc.fluidSize({
      theme,
      property: 'marginBottom',
      from: theme.space.medium,
      to: theme.space.large,
    }),
  {
    textAlign: 'center',
  },
];

export const StylesSectionTitleSub = theme => ({
  color: theme.fontColor.muted,
  fontSize: theme.fontSize.medium,
  maxWidth: 625,
  margin: '0 auto',

  '.u-contrast &': {
    color: theme.contrast.muted,
  },
});

const SectionTitle = ({
  title,
  as: Component,
  sub,
  space,
  className,
  ...opts
}) => {
  const theme = useTheme();

  return (
    <div
      className={(cx('CK__SectionTitle'), className)}
      css={StylesSectionTitleWrapper(theme, { space })}
      {...opts}
    >
      <Component
        css={[
          misc.fluidSize({
            theme,
            property: 'marginBottom',
            from: theme.space.small,
            to: theme.space.base,
          }),
        ]}
        className="CK__SectionTitle__Header"
      >
        {title}
      </Component>
      {sub && (
        <div
          className="CK__SectionTitle__Sub"
          css={StylesSectionTitleSub(theme)}
        >
          {sub}
        </div>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  as: PropTypes.string,
  sub: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  space: PropTypes.string,
};

SectionTitle.defaultProps = {
  as: 'h3',
  space: 'xlarge',
};

export default SectionTitle;
