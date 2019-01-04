import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Loader = (props) => {
  const { className, ...opts } = props;
  const classes = cx('loader', className);

  return (
    <span className={classes} {...opts}>
      <svg className="loader-svg" viewBox="25 25 50 50">
        <circle
          className="loader-circle"
          cx="50"
          cy="50"
          r="20"
          strokeMiterlimit="10"
        />
      </svg>
    </span>
  );
};

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
