import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ModalBody = ({ children, className, ...opts }) => {
  const classes = cx('modal-body', className);

  return (
    <div className={classes} {...opts}>
      {children}
    </div>
  );
};

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ModalBody;
