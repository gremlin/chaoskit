import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import FormLabel from './FormLabel';
import { generateUUID } from '../helpers/utility';

class Toggle extends React.Component {
  toggleLabelRef = React.createRef();

  id = `${this.props.name}-${generateUUID()}`; // eslint-disable-line react/destructuring-assignment

  state = {
    checked: this.props.isChecked, // eslint-disable-line react/destructuring-assignment
  };

  componentWillReceiveProps(newProps) {
    const { isChecked } = this.props;

    if (newProps.isChecked !== isChecked) {
      this.setState({
        checked: newProps.isChecked,
      });
    }
  }

  toggleChecked = () => {
    const { name, onChange, value } = this.props;
    const { checked } = this.state;

    if (onChange) {
      onChange(name, value, !checked);
    }

    this.setState({
      checked: !checked,
    });
  };

  handleKeyUp = (e) => {
    const $toggleLabel = this.toggleLabelRef.current;

    if (e.keyCode === 13) {
      $toggleLabel.click();
    }
  };

  render() {
    const {
      className, disabled, name, label, value,
    } = this.props;
    const { checked } = this.state;

    const classes = cx('form-group toggle-group', className);

    return (
      <div className={classes}>
        <div className="toggle">
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
          <label // eslint-disable-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
            htmlFor={this.id}
            ref={this.toggleLabelRef}
          />
        </div>
        <FormLabel className="toggle-labelText" id={this.id}>
          {label}
        </FormLabel>
      </div>
    );
  }
}

Toggle.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Toggle.defaultProps = {
  isChecked: false,
};

export default Toggle;
