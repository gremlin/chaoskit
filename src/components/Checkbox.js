import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';

import { generateUUID } from '../helpers/utility';
import { config } from '../helpers/config';

const Checkbox = ({
  className,
  disabled,
  checked,
  label,
  name,
  onChange,
  value,
}) => {
  const checkboxLabelRef = useRef();
  const [isChecked, setChecked] = useState(checked);

  const id = `${name}-${generateUUID()}`;

  useEffect(
    () => {
      setChecked(checked);
    },
    [checked],
  );

  const toggleChecked = () => {
    setChecked(!isChecked);

    if (onChange) {
      onChange(name, value, !isChecked);
    }
  };

  const handleKeyUp = (e) => {
    const $checkboxLabel = checkboxLabelRef.current;

    if (e.keyCode === 13) {
      $checkboxLabel.click();
    }
  };

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
        id={id}
        checked={isChecked}
        onChange={toggleChecked}
        onKeyUp={handleKeyUp}
      />
      {label && (
        <label // eslint-disable-line jsx-a11y/label-has-for
          htmlFor={id}
          ref={checkboxLabelRef}
        >
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
