import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import { FormLabel } from '.';
import { generateUUID } from '../helpers/utility';

const Toggle = ({
  name, className, label, onChange, value, ...opts
}) => {
  const toggleLabelRef = useRef();

  const id = `${name}-${generateUUID()}`;

  const toggleChecked = ({
    target: { name: fieldName, value: fieldValue, checked },
  }) => {
    onChange(fieldName, fieldValue, checked);
  };

  const classes = cx('form-group toggle-group', className);

  return (
    <div className={classes}>
      <div className="toggle">
        <input
          value={value}
          type="checkbox"
          name={name}
          id={id}
          onChange={toggleChecked}
          {...opts}
        />
        <label // eslint-disable-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
          htmlFor={id}
          ref={toggleLabelRef}
        />
      </div>
      <FormLabel className="toggle-labelText" id={id}>
        {label}
      </FormLabel>
    </div>
  );
};

Toggle.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
};

export default Toggle;
