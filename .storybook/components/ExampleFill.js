import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

const ExampleFill = ({ as: Component, ...opts }) => {
  const theme = useTheme();

  return (
    <Component
      css={{
        padding: theme.space.medium,
        background: theme.color.primary.base,
        borderRadius: theme.settings.ui.radius && theme.borderRadius.base,
        color: theme.contrast.base,
        fontFamily: theme.fontFamily.code,
        fontSize: theme.fontSize.base,
      }}
      {...opts}
    />
  );
};

ExampleFill.propTypes = {
  as: PropTypes.any,
};

ExampleFill.defaultProps = {
  as: 'div',
};

export default ExampleFill;
