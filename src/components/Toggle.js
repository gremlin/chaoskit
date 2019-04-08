import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';

import { FormLabel } from '.';
import { generateUUID } from '../helpers/utility';

const Toggle = ({
  name,
  className,
  disabled,
  isChecked,
  label,
  onChange,
  value,
}) => {
  const [checked, setChecked] = useState(isChecked);
  const toggleLabelRef = useRef();

  const id = `${name}-${generateUUID()}`; // eslint-disable-line react/destructuring-assignment

  useEffect(
    () => {
      setChecked(isChecked);
    },
    [isChecked],
  );

  const toggleChecked = () => {
    if (onChange) {
      onChange(name, value, !checked);
    }

    setChecked(!checked);
  };

  const handleKeyUp = (e) => {
    const $toggleLabel = toggleLabelRef.current;

    if (e.keyCode === 13) {
      $toggleLabel.click();
    }
  };

  const classes = cx('form-group toggle-group', className);

  return (
    <div className={classes}>
      <div className="toggle">
        <input
          value={value}
          type="checkbox"
          disabled={disabled}
          name={name}
          id={id}
          checked={checked}
          onChange={toggleChecked}
          onKeyUp={handleKeyUp}
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
