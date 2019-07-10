import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormFooter from './FormFooter';
import { form } from '../assets/styles/utility';
import { generateUUID } from '../helpers/utility';

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

  const renderOpts = option => {
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
    <FormGroup>
      <FormLabel required={required} error={!!validationMessage} id={id}>
        {label}
      </FormLabel>
      <div className={cx('CK__Select', className)}>
        <select
          id={id}
          name={name}
          onChange={handleOnChange}
          multiple={multiple}
          css={theme => [
            form.base(theme),
            form.input(theme),
            {
              // Remove default style in browsers that support `appearance`
              appearance: 'none',
            },
          ]}
          {...opts}
        >
          {options.map(renderOpts)}
        </select>
      </div>
      <FormFooter
        explanationMessage={explanationMessage}
        validationMessage={validationMessage}
      />
    </FormGroup>
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
  validationMessage: PropTypes.string,
};

export default Select;
