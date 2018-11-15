import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { generateUUID } from '../helpers/utility';
import { config } from '../helpers/config';

class Checkbox extends React.Component {
  id = `${this.props.name}-${generateUUID()}`; // eslint-disable-line react/destructuring-assignment

  state = {
    checked: this.props.isChecked, // eslint-disable-line react/destructuring-assignment
  }

  componentWillReceiveProps(newProps) {
    const { isChecked } = this.props;

    if (newProps.isChecked !== isChecked) {
      this.setState({
        checked: newProps.isChecked,
      });
    }
  }

  toggleChecked = () => {
    const { onChange, name, value } = this.props;
    const { checked } = this.state;

    if (onChange) {
      onChange(name, value, !checked);
    }

    this.setState({
      checked: !checked,
    });
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.checkboxLabel.click();
    }
  }

  render() {
    const { className, label, disabled, name, value } = this.props;
    const { checked } = this.state;

    const classes = cx('form-checkbox', className, {
      [config.classes.disabled]: disabled,
    });

    return (
      <div className={classes}>
        <input
          value={value}
          type="checkbox"
          disabled={disabled}
          name={name}
          id={this.id}
          checked={checked}
          onChange={this.toggleChecked}
          onKeyUp={this.handleKeyUp}
        />
        {label && (
        <label // eslint-disable-line jsx-a11y/label-has-for
          htmlFor={this.id}
          ref={(checkboxLabel) => { this.checkboxLabel = checkboxLabel; }}
        >
          {label}
        </label>
        )}
      </div>
    );
  }
}

Checkbox.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Checkbox.defaultProps = {
  isChecked: false,
};

export default Checkbox;
