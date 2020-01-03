import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from 'emotion-theming';
import { keyframes } from '@emotion/core';
import { rgba } from 'polished';

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
      css={[
        {
          animation: `${skeletonKeyframes} 1.25s linear infinite`,
          animationFillMode: 'forwards',
          backgroundImage: `linear-gradient(to right, ${
            theme.color.panel.dark
          } 0%, ${rgba(theme.color.panel.dark, 0.5)} 50%, ${
            theme.color.panel.dark
          } 100%)`,
          backgroundSize: '200% 100%',
        },

        theme.settings.contrast.enable && {
          '.u-contrast &': {
            backgroundImage: `linear-gradient(to right, ${rgba(
              theme.contrast.base,
              0.5
            )} 0%, ${rgba(theme.contrast.base, 0.35)} 50%, ${rgba(
              theme.contrast.base,
              0.5
            )} 100%)`,
          },
        },
      ]}
      className={cx('CK__Skeleton', className)}
      {...props}
    />
  );
};

Skeleton.propTypes = {
  className: PropTypes.string,
};

export default Skeleton;