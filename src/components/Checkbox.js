import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import { generateUUID } from '../helpers/utility';
import { config } from '../helpers/config';

const Checkbox = ({
  className,
  disabled,
  isChecked,
  label,
  name,
  onChange,
  value,
}) => {
  const checkboxLabelRef = useRef();
  const [checked, setChecked] = useState(isChecked);

  const id = `${name}-${generateUUID()}`;

  useUpdateEffect(
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
        checked={checked}
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
