import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Icons from '../assets/icons/icons.json';

class Icon extends React.Component {
  getIcon = () => {
    const {
      icon,
      additionalIcons,
      fallback,
      className,
      size,
      ...opts
    } = this.props;
    const classes = cx('icon', className, {
      'icon--small': size === 'small',
      'icon--large': size === 'large',
      'icon--xlarge': size === 'xlarge',
    });
    // Merge in base icons with anything additional
    const iconSource = Object.assign(Icons, additionalIcons);

    // Match on fallback prop if supplied
    const matchedIcon = iconSource[icon] || iconSource[fallback];

    // If we find an icon
    if (matchedIcon) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
          {...opts}
          dangerouslySetInnerHTML={{ __html: matchedIcon }} // eslint-disable-line react/no-danger
        />
      );
    }

    console.error('Icon not found'); // eslint-disable-line no-console
    return false;
  };

  render() {
    return this.getIcon();
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  fallback: PropTypes.string,
  icon: PropTypes.string.isRequired,
  additionalIcons: PropTypes.object,
  size: PropTypes.oneOf(['small', 'large', 'xlarge']),
};

export default Icon;
