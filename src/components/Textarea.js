import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TextareaAutoSize from 'react-textarea-autosize';

import FormLabel from './FormLabel';
import FormFooter from './FormFooter';
import { generateUUID } from '../helpers/utility';
import { config } from '../helpers/config';

const Textarea = ({
  className,
  label,
  name,
  onChange,
  validationMessage,
  explanationMessage,
  required,
  ...opts
}) => {
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
      <TextareaAutoSize id={id} name={name} onChange={handleChange} {...opts} />
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
  onChange: PropTypes.func,
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Textarea;
