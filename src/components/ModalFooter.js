import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ModalFooter = ({
  center, children, className, ...opts
}) => {
  const classes = cx('modal-footer', className, {
    'modal-footer--center': center,
  });

  return (
    <div className={classes} {...opts}>
      {children}
    </div>
  );
};

ModalFooter.propTypes = {
  center: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ModalFooter;
