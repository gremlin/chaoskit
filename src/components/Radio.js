import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { RadioGroupContext } from './RadioGroup';
import { generateUUID } from '../helpers/utility';
import { config } from '../helpers/config';

const Radio = props => {
  const { className, disabled, label, value, ...opts } = props;

  const { selectedValue, name, onChange } = useContext(RadioGroupContext);
  const id = `${name}-${generateUUID()}`;
  const classes = cx('form-radio', className, {
    [config.classes.disabled]: disabled,
  });

  return (
    <div className={classes}>
      <input
        type="radio"
        disabled={disabled}
        name={name}
        value={value}
        id={id}
        checked={value === selectedValue}
        onChange={onChange}
        {...opts}
      />
      {label && (
        <label // eslint-disable-line jsx-a11y/label-has-for
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
};

Radio.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Radio;
