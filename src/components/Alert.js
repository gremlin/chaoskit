import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { kebabCase, toLower } from 'lodash-es';

class Alert extends React.Component {
  render() {
    const { children, className, title, type } = this.props;
    const classes = cx('alert', {
      'alert--primary': type === 'primary',
      'alert--warning': type === 'warning',
      'alert--danger': type === 'danger',
      'alert--chaosMonkey': type === 'chaosMonkey',
    }, className);

    return (
      <div className={classes} role="alert" ref={(ref) => { this.alert = ref; }}>
        {title && <h4 id={kebabCase(toLower(children))} className="alert-title">{title}</h4>}
        <div className="alert-content">
          {children}
        </div>
      </div>
    );
  }
}

Alert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.oneOf(['primary', 'warning', 'danger', 'chaosMonkey']),
};

export default Alert;
