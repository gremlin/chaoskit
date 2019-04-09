import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Badge = ({
  className, label, rounded, type, ...opts
}) => {
  const classes = cx('badge', className, {
    'badge--rounded': rounded,
    'badge--primary': type === 'primary',
    'badge--danger': type === 'danger',
  });

  return (
    <div className={classes} {...opts}>
      {label}
    </div>
  );
};

Badge.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'danger']),
};

export default Badge;
