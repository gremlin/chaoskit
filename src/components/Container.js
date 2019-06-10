import PropTypes from 'prop-types';
import cx from 'classnames';

export const Container = ({ className, size, ...opts }) => (
  <div
    className={cx('CK__Container', className)}
    css={theme => [
      {
        width: '100%',
        maxWidth: 1000,
        margin: '0 auto',
        padding: `0 ${theme.space.base}px`,

        // Children containers should not have padding
        '.CK__Container': {
          padding: 0,
        },
      },

      size === 'small' && {
        maxWidth: 800,
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
