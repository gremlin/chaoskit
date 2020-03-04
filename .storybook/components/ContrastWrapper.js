import { useTheme } from 'emotion-theming';

import { gradient } from '../../src/assets/styles/utility';

const ContrastWrapper = ({ ...rest }) => {
  const theme = useTheme();

  return (
    <div
      className="u-contrast"
      css={[
        gradient.blueGreen(theme),
        {
          padding: theme.space.large,
          borderRadius: theme.settings.ui.radius && theme.borderRadius.base,
          boxShadow: theme.boxShadow.large,
        },
      ]}
      {...rest}
    />
  );
};

export default ContrastWrapper;
