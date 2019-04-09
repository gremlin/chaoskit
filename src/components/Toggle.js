import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';

import { FormLabel } from '.';
import { generateUUID } from '../helpers/utility';

const Toggle = ({
  name,
  className,
  disabled,
  checked,
  label,
  onChange,
  value,
}) => {
  const [isChecked, setChecked] = useState(checked);
  const toggleLabelRef = useRef();

  const id = `${name}-${generateUUID()}`;

  useEffect(
    () => {
      setChecked(checked);
    },
    [checked],
  );

  const toggleChecked = () => {
    if (onChange) {
      onChange(name, value, !isChecked);
    }

    setChecked(!isChecked);
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
          checked={isChecked}
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
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Toggle.defaultProps = {
  checked: false,
};

export default Toggle;
