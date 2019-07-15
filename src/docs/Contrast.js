import { gradient } from '../assets/styles/utility';

const Contrast = ({ ...opts }) => (
  <div
    className="u-contrast"
    css={theme => [
      gradient.blueGreen(theme),
      {
        padding: theme.space.large,
        borderRadius: theme.borderRadius.base,
        boxShadow: theme.boxShadow.large,
      },
    ]}
    {...opts}
  />
);

export default Contrast;
