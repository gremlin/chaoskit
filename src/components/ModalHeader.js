import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Close } from '.';

class ModalHeader extends React.Component {
  handleCloseClick = () => {
    const { onCloseClick } = this.props;

    if (onCloseClick) onCloseClick();
  };

  render() {
    const {
      center, className, onCloseClick, title,
    } = this.props;
    const classes = cx('modal-header', className, {
      'modal-header--center': center,
      'modal-header--hasNoClose': !onCloseClick,
    });

    return (
      <div className={classes}>
        <h4>{title}</h4>
        {onCloseClick && (
          <Close onClick={this.handleCloseClick} className="modal-close" />
        )}
      </div>
    );
  }
}

ModalHeader.propTypes = {
  center: PropTypes.bool,
  className: PropTypes.string,
  onCloseClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default ModalHeader;
