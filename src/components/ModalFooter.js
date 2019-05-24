import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ModalFooter = ({ center, className, ...opts }) => {
  const classes = cx('modal-footer', className, {
    'modal-footer--center': center,
  });

  return <div className={classes} {...opts} />;
};

ModalFooter.propTypes = {
  center: PropTypes.bool,
  className: PropTypes.string,
};

export default ModalFooter;
