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

            // 1. Remove default style in browsers that support `appearance`
            // 2. Apply default form styling, except for `range`, `radio`, `checkbox`, `file`,
            // `submit`, `reset`, `button` and `image`
            // 3. Removes excess padding in IE 8/9/10.
            // 4. Improves consistency of cursor style for clickable elements
            // 5. Fix the cursor style for Chrome's increment/decrement buttons. For certain
            // `font-size` values of the `input`, it causes the cursor style of the
            // decrement button to change from `default` to `text`.
            // 6. Remove inner padding and search cancel button in Chrome, Safari and Opera on OS X.
            // 7. Vertical alignment

            {
              // 1
              '&:not([type]), &[type="text"], &[type="password"], &[type="email"], &[type="url"], &[type="search"], &[type="tel"], &[type="number"], &[type="datetime"], &[type="range"]': {
                appearance: 'none',
              },

              // 2
              '&:not([type]), &[type="text"], &[type="password"], &[type="datetime"], &[type="datetime-local"], &[type="date"], &[type="month"], &[type="time"], &[type="week"], &[type="number"], &[type="email"], &[type="url"], &[type="search"], &[type="tel"], &[type="color"]': form.input(
                theme
              ),

              // 5
              '&[type="number"]': {
                '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
                  height: 'auto',
                },
              },

              // 6
              '&[type="search"]': {
                '&::-webkit-search-cancel-button, &::-webkit-search-decoration': {
                  appearance: 'none',
                },
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
