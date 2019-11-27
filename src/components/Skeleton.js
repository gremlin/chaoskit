import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from 'emotion-theming';
import { keyframes } from '@emotion/core';

const skeletonKeyframes = keyframes({
  from: {
    backgroundPosition: '100% 0',
  },

  to: {
    backgroundPosition: '-100% 0',
  },
});

const Skeleton = ({ className, ...props }) => {
  const theme = useTheme();

  return (
    <div
      css={{
        animation: `${skeletonKeyframes} 1.25s linear infinite`,
        animationFillMode: 'forwards',
        background: `linear-gradient(to right, ${theme.color.panel.dark} 0%, ${theme.color.panel.light} 50%, ${theme.color.panel.dark} 100%)`,
        backgroundSize: '200% 100%',
      }}
      className={cx('CK__Skeleton', className)}
      {...props}
    />
  );
};

Skeleton.propTypes = {
  className: PropTypes.string,
};

export default Skeleton;
