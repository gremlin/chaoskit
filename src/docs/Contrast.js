import { gradient } from '../assets/styles/utility';

const Contrast = ({ ...opts }) => (
  <div
    className="u-contrast"
    css={theme => [
      gradient.blueGreen(theme),
      {
        padding: theme.space.base,
      },
    ]}
    {...opts}
  />
);

export default Contrast;
