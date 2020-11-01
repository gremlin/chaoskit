import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

const ExampleFill = ({ as: Component = 'div', ...rest }) => {
  const theme = useTheme();

  return (
    <Component
      css={{
        padding: theme.space.medium,
        background: theme.color.primary.base,
        borderRadius: theme.borderRadius.base,
        color: theme.contrast.base,
        fontFamily: theme.fontFamily.code,
        fontSize: theme.fontSize.base,
      }}
      {...rest}
    />
  );
};

ExampleFill.propTypes = {
  as: PropTypes.any,
};

export default ExampleFill;
