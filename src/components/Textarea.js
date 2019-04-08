import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TextareaAutoSize from 'react-textarea-autosize';

import { FormFooter, FormLabel } from '.';
import { generateUUID } from '../helpers/utility';
import { config } from '../helpers/config';

const Textarea = ({
  className,
  disabled,
  focus,
  initialValue,
  label,
  name,
  onChange,
  onKeyPress,
  placeholder,
  validationMessage,
  explanationMessage,
  required,
}) => {
  const textareaRef = useRef();
  const [value, setValue] = useState('');

  useEffect(() => {
    if (initialValue) setValue(initialValue);
  }, []);

  useEffect(
    () => {
      if (focus) textareaRef.current.focus();
    },
    [focus],
  );

  const id = `${name}-${generateUUID()}`;

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

  const classes = cx('form-group', className, {
    [config.classes.notValid]: validationMessage,
    [config.classes.required]: required,
  });

  return (
    <div className={classes}>
      <FormLabel id={id}>{label}</FormLabel>
      <TextareaAutoSize
        id={id}
        disabled={disabled}
        focus={focus ? 'true' : null}
        name={name}
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        inputRef={textareaRef}
      />
      <FormFooter
        explanationMessage={explanationMessage}
        validationMessage={validationMessage}
      />
    </div>
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Textarea;
