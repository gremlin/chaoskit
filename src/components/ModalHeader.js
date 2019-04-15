import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Close } from '.';

const ModalHeader = ({
  center, className, onCloseClick, title, ...opts
}) => {
  const handleCloseClick = () => {
    if (onCloseClick) onCloseClick();
  };

  const classes = cx('modal-header', className, {
    'modal-header--center': center,
    'modal-header--hasNoClose': !onCloseClick,
  });

  return (
    <div className={classes} {...opts}>
      <h4>{title}</h4>
      {onCloseClick && (
        <Close onClick={handleCloseClick} className="modal-close" />
      )}
    </div>
  );
};

ModalHeader.propTypes = {
  center: PropTypes.bool,
  className: PropTypes.string,
  onCloseClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default ModalHeader;
