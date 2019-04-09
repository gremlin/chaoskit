import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TextareaAutoSize from 'react-textarea-autosize';

import { FormFooter, FormLabel } from '.';
import { generateUUID } from '../helpers/utility';
import { config } from '../helpers/config';

const Textarea = ({
  className,
  focus,
  label,
  name,
  onChange,
  validationMessage,
  explanationMessage,
  required,
  ...opts
}) => {
  const textareaRef = useRef();

  useEffect(
    () => {
      if (focus) textareaRef.current.focus();
    },
    [focus],
  );

  const id = `${name}-${generateUUID()}`;

  const handleChange = ({ target: { name: fieldName, value: fieldValue } }) => {
    onChange(fieldName, fieldValue);
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
        focus={focus ? 'true' : null}
        name={name}
        onChange={handleChange}
        inputRef={textareaRef}
        {...opts}
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
  focus: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Textarea;
