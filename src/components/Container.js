import PropTypes from 'prop-types';
import cx from 'classnames';

export const StylesContainerVariables = {
  base: 1000,
  small: 800,
};

const Container = ({ className, size, ...opts }) => (
  <div
    className={cx('CK__Container', className)}
    css={theme => [
      {
        width: '100%',
        maxWidth: StylesContainerVariables.base,
        margin: '0 auto',
        padding: `0 ${theme.space.base}px`,

        // Children containers should not have padding
        '.CK__Container': {
          padding: 0,
        },
      },

      size === 'small' && {
        maxWidth: StylesContainerVariables.small,
      },
    ]}
    {...opts}
  />
);

Container.propTypes = {
  size: PropTypes.oneOf(['small']),
  className: PropTypes.string,
};

export default Container;
