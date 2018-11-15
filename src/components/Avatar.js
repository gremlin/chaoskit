import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Icon } from '.';

class Avatar extends React.Component {
  state = {
    imageError: false,
  };

  componentWillReceiveProps(nextProps) {
    const { image } = this.props;

    if (nextProps.src !== image) {
      this.setState({
        imageError: false,
      });
    }
  }

  handleImageError = () => {
    this.setState({ imageError: true });
  };

  render() {
    const { className, image, name, size } = this.props;
    const { imageError } = this.state;

    const nameProp = name ? name.trim() : '';

    const classes = cx('avatar', className, {
      'avatar--large': size === 'large',
    });
    const styles = {
      backgroundImage: `url(${image})`,
    };

    // If image exists, use image for background
    if (image && !imageError) {
      return (
        <figure className={classes} style={styles}>
          <img alt={nameProp} onError={this.handleImageError} style={{ display: 'none' }} src={image} />
        </figure>
      );
    }

    // If no image and no name, use icon
    if (!image && !nameProp) {
      return (
        <figure className={classes}>
          <Icon className="avatar-icon" icon="user" />
        </figure>
      );
    }

    let splitName = null;
    let initials = null;

    if (nameProp) {
      splitName = name.split(' ');
      initials = splitName[0][0] + splitName[splitName.length - 1][0];
    }

    // https://stackoverflow.com/a/48841447/1026742
    // For text alignment
    return (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className={classes}>
        <circle cx="50" cy="50" r="50" />
        <text x="50" y="50" textAnchor="middle" dy="0.35em" fontSize="40">{initials}</text>
      </svg>
    );
  }
}

Avatar.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  src: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
};

Avatar.defaultProps = {
  size: 'default',
};

export default Avatar;
