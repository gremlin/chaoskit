import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { config } from '../helpers/config';
import Loader from './Loader';

const Button = React.forwardRef(
  (
    {
      active,
      actionType,
      as,
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
    },
    ref
  ) => {
    const classes = cx(className, {
      button: type !== 'reset',
      'button--reset': type === 'reset',
      'button--default': type === 'default',
      'button--primary': type === 'primary',
      'button--secondary': type === 'secondary',
      'button--teal': type === 'teal',
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

    let Component = as;

    const buttonProps = {
      className: classes,
      disabled: disabled || loading,
      ref,
      ...opts,
    };

    if (url) {
      buttonProps.href = url;
      Component = 'a';
    }

    if (Component !== 'a') {
      buttonProps.type = actionType;
    }

    return (
      <Component {...buttonProps}>
        {type === 'reset' ? children : <span>{children}</span>}
        {loading && <Loader />}
      </Component>
    );
  }
);

Button.propTypes = {
  active: PropTypes.bool,
  actionType: PropTypes.oneOf(['button', 'submit', 'reset']),
  /* Useful for frameworks like NextJs */
  as: PropTypes.oneOf(['button', 'a']),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  iconOnly: PropTypes.bool,
  /** Re-uses the Loader component */
  loading: PropTypes.bool,
  noContrast: PropTypes.bool,
  noRadius: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'xsmall', 'small']),
  /** reset is used for elements that have no direct path attached to them; to ensure we keep our markup semantic and accessible. */
  type: PropTypes.oneOf([
    'reset',
    'default',
    'primary',
    'secondary',
    'teal',
    'danger',
    'outlinePrimary',
  ]),
  url: PropTypes.string,
};

Button.defaultProps = {
  as: 'button',
  actionType: 'button',
};

export default Button;
