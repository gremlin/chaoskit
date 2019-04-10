import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ModalFooter = ({ center, children, className }) => {
  const classes = cx('modal-footer', className, {
    'modal-footer--center': center,
  });

  return <div className={classes}>{children}</div>;
};

ModalFooter.propTypes = {
  center: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ModalFooter;
