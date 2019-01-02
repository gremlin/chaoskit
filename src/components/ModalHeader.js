import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Close } from '.';

class ModalHeader extends React.Component {
  handleCloseClick = () => {
    const { onCloseClick } = this.props;

    onCloseClick();
  };

  render() {
    const { center, className, title } = this.props;
    const classes = cx('modal-header', className, {
      'modal-header--center': center,
    });

    return (
      <div className={classes}>
        <h4>{title}</h4>
        <Close onClick={this.handleCloseClick} className="modal-close" />
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

ModalHeader.defaultProps = {
  onCloseClick: () => {},
};

export default ModalHeader;
