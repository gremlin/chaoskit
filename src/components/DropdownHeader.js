import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const DropdownHeader = ({ children, className, ...opts }) => {
  const classes = cx('dropdown-header', className);

  return (
    <h5 className={classes} {...opts}>
      {children}
    </h5>
  );
};

DropdownHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default DropdownHeader;
