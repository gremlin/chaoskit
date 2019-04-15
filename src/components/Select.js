import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { FormFooter, FormLabel } from '.';
import { generateUUID } from '../helpers/utility';
import { config } from '../helpers/config';

const Select = ({
  className,
  explanationMessage,
  label,
  multiple,
  name,
  options,
  onChange,
  required,
  validationMessage,
  ...opts
}) => {
  const id = `${name}-${generateUUID()}`;

  const handleOnChange = ({
    target: { name: fieldName, value: fieldValue },
  }) => {
    const selectedValue = parseInt(fieldValue, 10)
      ? parseInt(fieldValue, 10)
      : fieldValue;

    onChange(fieldName, selectedValue);
  };

  const classes = cx('form-group', className, {
    [config.classes.notValid]: validationMessage,
    [config.classes.required]: required,
  });

  const selectClasses = cx('form-select', {
    'form-select--multiple': multiple,
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
      <FormLabel id={id}>{label}</FormLabel>
      <div className={selectClasses}>
        <select
          id={id}
          name={name}
          onChange={handleOnChange}
          multiple={multiple}
          {...opts}
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
};

Select.propTypes = {
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  label: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  validationMessage: PropTypes.string,
};

export default Select;
