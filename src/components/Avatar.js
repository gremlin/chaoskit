import PropTypes from 'prop-types';
import { useState } from 'react';
import cx from 'classnames';

import Icon from './Icon';
import { misc } from '../assets/styles/utility';

const StylesAvatarVariables = theme => ({
  background: theme.color.panel.base,
  color: theme.fontColor.base,
});

const StylesAvatarBase = (theme, props = {}) => [
  // 1. Fix issue with alignment of inlined avatars
  {
    backgroundColor: StylesAvatarVariables(theme).background,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    borderRadius: '50%',
    color: StylesAvatarVariables(theme).color,
    display: 'inline-flex',
    marginBottom: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'relative',
    verticalAlign: 'bottom', // 1
    width: 40,
    height: 40,
  },

  props.size === 'large' && {
    width: 80,
    height: 80,
  },
];

const Avatar = ({ className, image, name, size, ...opts }) => {
  const [error, setError] = useState(false);

  const nameProp = name ? name.trim() : '';

  // If image exists, use image for background
  if (image && !error) {
    return (
      <figure
        css={theme => [
          StylesAvatarBase(theme, { size }),
          {
            backgroundImage: `url(${image})`,
          },
        ]}
        className={cx('CK__Avatar', className)}
        {...opts}
      >
        <img
          alt={nameProp}
          onError={() => setError(true)}
          css={misc.hide}
          src={image}
        />
      </figure>
    );
  }

  // If no image and no name, use icon
  if (!image && !nameProp) {
    return (
      <figure
        css={theme => [StylesAvatarBase(theme, { size })]}
        className={cx('CK__Avatar', className)}
        {...opts}
      >
        <Icon
          icon="user"
          css={{
            position: 'absolute',
            fill: 'currentColor',
            height: '80%',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: '0.75',
            bottom: '-2.5%',
            width: '80%',
            top: 'auto',

            '.icon-stroke': {
              strokeWidth: 0,
            },
          }}
        />
      </figure>
    );
  }

  let splitName = null;
  let initials = null;

  if (nameProp) {
    splitName = name.split(' ');
    initials = splitName[0][0] + splitName[splitName.length - 1][0];
  }

  // https://stackoverflow.com/a/48841447/1026742
  // For text alignment
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      css={theme => [StylesAvatarBase(theme, { size })]}
      className={cx('CK__Avatar', className)}
      {...opts}
    >
      <circle
        cx="50"
        cy="50"
        r="50"
        css={theme => [{ fill: StylesAvatarVariables(theme).background }]}
      />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dy="0.35em"
        fontSize="40"
        css={theme => [
          {
            fill: StylesAvatarVariables(theme).color,
            textTransform: 'uppercase',
          },
        ]}
      >
        {initials}
      </text>
    </svg>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['default', 'large']),
  src: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'default',
};

export default Avatar;
