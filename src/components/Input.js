import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MaskedInput from 'react-text-mask';

import { FormFooter, FormLabel, Icon } from '.';
import { generateUUID } from '../helpers/utility';
import { config } from '../helpers/config';

const Input = (props) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  const {
    autoComplete,
    className,
    disabled,
    focus,
    initialValue,
    label,
    guide,
    mask,
    name,
    onChange,
    onKeyPress,
    type,
    placeholder,
    validationMessage,
    explanationMessage,
    prefixIcon,
    required,
  } = props;

  useEffect(() => {
    if (initialValue) setValue(initialValue);
  }, []);

  useEffect(
    () => {
      if (focus && !mask) inputRef.current.focus();
    },
    [focus],
  );

  const id = `${props.name}-${generateUUID()}`; // eslint-disable-line react/destructuring-assignment

  const handleChange = (e) => {
    setValue(e.target.value);

    if (onChange) {
      onChange(e.target.name, e.target.value);
    }
  };

  const handleKeyPress = (e) => {
    if (onKeyPress) {
      onKeyPress(e);
    }
  };

  const inputRender = () => {
    const defaultProps = {
      autoComplete,
      id,
      className: 'form-input',
      disabled,
      focus: focus ? 'focus' : null,
      name,
      type,
      value,
      onChange: handleChange,
      onKeyPress: handleKeyPress,
      placeholder,
      ref: inputRef,
    };

    // `react-text-mask` does not support 'email' or 'number' input types
    if (mask && !['email', 'number'].includes(type)) {
      return <MaskedInput {...defaultProps} mask={mask} guide={guide} />;
    }

    return <input {...defaultProps} />;
  };

  const classes = cx('form-group', className, {
    [config.classes.notValid]: validationMessage,
    [config.classes.required]: required,
  });

  return (
    <div className={classes}>
      <FormLabel id={id}>{label}</FormLabel>
      {prefixIcon ? (
        <div className="form-prefix-wrapper">
          <div className="form-prefix-content">
            <Icon icon={prefixIcon} />
          </div>
          {inputRender()}
        </div>
      ) : (
        inputRender()
      )}
      <FormFooter
        explanationMessage={explanationMessage}
        validationMessage={validationMessage}
      />
    </div>
  );
};

Input.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,
  guide: PropTypes.bool,
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  prefixIcon: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  guide: false,
};

export default Input;
