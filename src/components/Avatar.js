import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Icon } from '.';

const Avatar = ({
  className, image, name, size, ...opts
}) => {
  const [error, setError] = useState(false);

  const nameProp = name ? name.trim() : '';

  const classes = cx('avatar', className, {
    'avatar--large': size === 'large',
  });
  const styles = {
    backgroundImage: `url(${image})`,
  };

  // If image exists, use image for background
  if (image && !error) {
    return (
      <figure className={classes} style={styles} {...opts}>
        <img
          alt={nameProp}
          onError={() => setError(true)}
          className="u-hidden"
          src={image}
        />
      </figure>
    );
  }

  // If no image and no name, use icon
  if (!image && !nameProp) {
    return (
      <figure className={classes} {...opts}>
        <Icon className="avatar-icon" icon="user" />
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
      className={classes}
      {...opts}
    >
      <circle cx="50" cy="50" r="50" />
      <text x="50" y="50" textAnchor="middle" dy="0.35em" fontSize="40">
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
  src: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
};

Avatar.defaultProps = {
  size: 'default',
};

export default Avatar;
