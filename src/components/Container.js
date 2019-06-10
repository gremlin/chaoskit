import PropTypes from 'prop-types';

export const Container = ({ size, ...opts }) => (
  <div
    className="CK__Container"
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
