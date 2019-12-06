import { useTheme } from 'emotion-theming';

const ExampleFill = ({ ...opts }) => {
  const theme = useTheme();

  return (
    <div
      css={{
        padding: theme.space.medium,
        background: theme.color.primary.base,
        borderRadius: theme.borderRadius.base,
        color: theme.contrast.base,
        fontFamily: theme.fontFamily.code,
        fontSize: theme.fontSize.base,
      }}
      {...opts}
    />
  );
};

export default ExampleFill;
