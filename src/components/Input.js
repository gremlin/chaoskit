import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MaskedInput from 'react-text-mask';

import FormFooter from './FormFooter';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import Icon from './Icon';
import { form } from '../assets/styles/utility';
import { generateUUID } from '../helpers/utility';

const Input = forwardRef(
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
    ref
  ) => {
    const id = `${name}-${generateUUID()}`;

    const handleChange = ({ target: { name: fieldName, value } }) => {
      onChange(fieldName, value);
    };

    const inputRender = () => {
      const defaultProps = {
        id,
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

      return (
        <input
          css={theme => [
            form.base(theme),
            {
              //  Remove default style in browsers that support `appearance`
              appearance: 'none',

              // Apply default form styling, except for `file`, `submit`, `reset`, `button` and `image`
              '&:not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="file"]):not([type="image"])': form.input(
                theme
              ),

              // Fix the cursor style for Chrome's increment/decrement buttons. For certain `font-size` values of the `input`, it causes the cursor style of the decrement button to change from `default` to `text`.
              '&[type="number"]': {
                '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
                  height: 'auto',
                },
              },

              // Remove inner padding and search cancel button in Chrome, Safari and Opera on OS X.
              '&[type="search"]': {
                '&::-webkit-search-cancel-button, &::-webkit-search-decoration': {
                  appearance: 'none',
                },
              },

              // 1. Correct the inability to style clickable types in iOS and Safari.
              // 2. Change font properties to `inherit` in Safari.
              '&::--webkit-file-upload-button': {
                appearance: 'button', // 1
                font: 'inherit', // 2
              },

              // Remove clear button in IE on inputs
              '&::ms-clear': {
                display: 'none',
              },

              // Removes `box-shadow` for invalid controls in Firefox.
              '&:invalid': {
                boxShadow: 'none',
              },
            },
          ]}
          className={cx('CK__Input', className)}
          {...defaultProps}
        />
      );
    };

    return (
      <FormGroup>
        <FormLabel required={required} error={!!validationMessage} id={id}>
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
      </FormGroup>
    );
  }
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
