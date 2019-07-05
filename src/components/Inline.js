import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Inline = ({ className, size, wrap, ...opts }) => {
  const classes = cx('inline', className, {
    'inline--small': size === 'small',
    'inline--medium': size === 'medium',
    'inline--large': size === 'large',
    'inline--xlarge': size === 'xlarge',
    'inline--noWrap': !wrap,
  });

  return <div className={classes} {...opts} />;
};

Inline.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'medium', 'large', 'xlarge']),
  wrap: PropTypes.bool,
};

Inline.defaultProps = {
  wrap: true,
};

export default Inline;
