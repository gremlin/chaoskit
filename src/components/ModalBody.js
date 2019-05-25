import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ModalBody = ({ className, ...opts }) => {
  const classes = cx('modal-body', className);

  return <div className={classes} {...opts} />;
};

ModalBody.propTypes = {
  className: PropTypes.string,
};

export default ModalBody;
