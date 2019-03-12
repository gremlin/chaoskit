import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import FormLabel from './FormLabel';
import FormFooter from './FormFooter';
import { generateUUID } from '../helpers/utility';
import { config } from '../helpers/config';

class Select extends React.Component {
  id = `${this.props.name}-${generateUUID()}`; // eslint-disable-line react/destructuring-assignment

  state = {
    selected: this.props.selected ? this.props.selected : -1, // eslint-disable-line react/destructuring-assignment
  };

  componentWillReceiveProps(newProps) {
    const { selected } = this.props;

    if (newProps.selected !== selected) {
      this.setState({
        selected: newProps.selected,
      });
    }
  }

  onChange = (event) => {
    const { onChange } = this.props;
    const selected = parseInt(event.target.value, 10)
      ? parseInt(event.target.value, 10)
      : event.target.value;

    this.setState({
      selected,
    });

    if (onChange) {
      onChange(event.target.name, selected);
    }
  };

  render() {
    const {
      className,
      disabled,
      explanationMessage,
      label,
      name,
      options,
      required,
      validationMessage,
    } = this.props;
    const { selected } = this.state;

    const classes = cx('form-group', className, {
      [config.classes.notValid]: validationMessage,
      [config.classes.required]: required,
    });

    const renderOpts = (option) => {
      // If the option has options as well we're in an `<optgroup>`
      if (option.options) {
        return (
          <optgroup key={option.value} label={option.label}>
            {option.options.map(childOption => (
              <option key={childOption.value} value={childOption.value}>
                {childOption.label}
              </option>
            ))}
          </optgroup>
        );
      }

      // We're in a default single-level `<option>`
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      );
    };

    return (
      <div className={classes}>
        <FormLabel id={this.id}>{label}</FormLabel>
        <div className="form-select">
          <select
            disabled={disabled}
            id={this.id}
            name={name}
            value={selected}
            onChange={this.onChange}
          >
            {options.map(renderOpts)}
          </select>
        </div>
        <FormFooter
          explanationMessage={explanationMessage}
          validationMessage={validationMessage}
        />
      </div>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  validationMessage: PropTypes.string,
};

export default Select;
