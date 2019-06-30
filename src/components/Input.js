import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MaskedInput from 'react-text-mask';

import FormFooter from './FormFooter';
import FormLabel from './FormLabel';
import Icon from './Icon';
import { generateUUID } from '../helpers/utility';
import { config } from '../helpers/config';

const Input = React.forwardRef(
  (
    {
      className,
      label,
      guide,
      mask,
      name,
      onChange,
      type,
      validationMessage,
      explanationMessage,
      prefixIcon,
      required,
      ...opts
    },
    ref,
  ) => {
    const id = `${name}-${generateUUID()}`;

    const handleChange = ({ target: { name: fieldName, value } }) => {
      onChange(fieldName, value);
    };

    const inputRender = () => {
      const defaultProps = {
        id,
        className: 'form-input',
        name,
        type,
        onChange: handleChange,
        ref,
        ...opts,
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
        <FormLabel required={required} error={validationMessage} id={id}>
          {label}
        </FormLabel>
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
  },
);

Input.propTypes = {
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
  guide: PropTypes.bool,
  onChange: PropTypes.func,
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
