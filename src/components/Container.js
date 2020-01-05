import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import cx from 'classnames';

export const StylesContainerVariables = {
  base: 1000,
  small: 800,
  extended: 1400,
};

const Container = ({ className, size, ...opts }) => {
  const theme = useTheme();

  return (
    <div
      className={cx('CK__Container', className)}
      css={[
        {
          width: '100%',
          margin: '0 auto',
          padding: `0 ${theme.space.base}px`,

          // Children containers should not have padding
          '.CK__Container': {
            padding: 0,
          },
        },

        size === 'base' && {
          maxWidth: StylesContainerVariables.base,
        },

        size === 'small' && {
          maxWidth: StylesContainerVariables.small,
        },

        size === 'extended' && {
          maxWidth: StylesContainerVariables.extended,
        },
      ]}
      {...opts}
    />
  );
};

Container.propTypes = {
  size: PropTypes.oneOf(['base', 'small', 'extended']),
  className: PropTypes.string,
};

Container.defaultProps = {
  size: 'base',
};

export default Container;
