import PropTypes from 'prop-types';

import Button from './Button';
import Icon from './Icon';

export const StylesCloseVariables = theme => ({
  size: theme.fontSize.base,
});

const Close = ({ onClick, noContrast, ...opts }) => (
  <Button
    type="reset"
    title="Close"
    onClick={onClick}
    css={theme => [
      {
        // 1. To align better with headers
        color: theme.fontColor.base,
        lineHeight: theme.lineHeight.small, // 1
        width: StylesCloseVariables(theme).size,
        height: StylesCloseVariables(theme).size,
        opacity: theme.opacity.base,
        transition: `opacity ${theme.timing.base} ${theme.transition.base}`,

        '&:hover, &:focus': {
          opacity: 1,

          '.CK__Close__Icon': {
            transform: 'scale(1.15)',
          },
        },
      },

      theme.settings.contrast.enable &&
        !noContrast && {
          '.u-contrast &': {
            color: theme.contrast.base,
          },
        },
    ]}
    {...opts}
  >
    <Icon
      icon="close"
      className="CK__Close__Icon"
      css={theme => ({
        transition: `transform ${theme.timing.base} ${theme.transition.base}`,
        transformOrigin: 'center center',
      })}
    />
  </Button>
);

Close.propTypes = {
  onClick: PropTypes.func,
  noContrast: PropTypes.bool,
};

export default Close;
