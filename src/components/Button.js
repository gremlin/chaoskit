import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { config } from '../helpers/config';
import { Loader } from '.';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    const {
      active,
      children,
      className,
      disabled,
      fullWidth,
      iconOnly,
      loading,
      noContrast,
      noRadius,
      size,
      type,
      url,
      ...opts
    } = this.props;

    const classes = cx(className, {
      button: type !== 'reset',
      'button--reset': type === 'reset',
      'button--default': type === 'default',
      'button--primary': type === 'primary',
      'button--secondary': type === 'secondary',
      'button--danger': type === 'danger',
      'button--outlinePrimary': type === 'outlinePrimary',
      'button--small': size === 'small',
      'button--xsmall': size === 'xsmall',
      'button--fullWidth': fullWidth,
      'button--icon': iconOnly,
      'button--noContrast': noContrast,
      [config.classes.active]: active,
      [config.classes.loading]: loading,
      'u-borderRadius--remove': noRadius,
    });

    if (url) {
      return (
        <a
          href={url}
          className={classes}
          disabled={disabled || loading}
          {...opts}
        >
          <span>{children}</span>
          {loading && <Loader />}
        </a>
      );
    }

    return (
      <button
        type="button"
        className={classes}
        disabled={disabled || loading}
        {...opts}
      >
        {type === 'reset' ? children : <span>{children}</span>}
        {loading && <Loader />}
      </button>
    );
  }
}

Button.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  iconOnly: PropTypes.bool,
  loading: PropTypes.bool,
  noContrast: PropTypes.bool,
  noRadius: PropTypes.bool,
  size: PropTypes.oneOf(['xsmall', 'small']),
  type: PropTypes.oneOf([
    'reset',
    'default',
    'primary',
    'secondary',
    'danger',
    'outlinePrimary',
  ]),
  url: PropTypes.string,
};

export default Button;
