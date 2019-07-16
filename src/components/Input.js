import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MaskedInput from 'react-text-mask';

import FormFooter from './FormFooter';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import Icon, { StylesIconVariables } from './Icon';
import { form } from '../assets/styles/utility';
import { generateUUID } from '../helpers/utility';

export const StylesInputBase = (theme, props = {}) => [
  form.base(theme),
  {
    //  Remove default style in browsers that support `appearance`
    appearance: 'none',
  },

  // Apply default form styling, except for `file`, `submit`, `reset`, `button` and `image`
  !['file', 'submit', 'reset', 'button', 'image'].includes(props.type) &&
    form.input(theme, {
      error: props.validationMessage,
      noContrast: props.noContrast,
    }),

  // Fix the cursor style for Chrome's increment/decrement buttons. For certain `font-size` values of the `input`, it causes the cursor style of the decrement button to change from `default` to `text`.
  props.type === 'number' && {
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      height: 'auto',
    },
  },

  // Remove inner padding and search cancel button in Chrome, Safari and Opera on OS X.
  props.type === 'search' && {
    '&::-webkit-search-cancel-button, &::-webkit-search-decoration': {
      appearance: 'none',
    },
  },
  {
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

  props.prefixIcon && {
    paddingLeft: `calc(${form.variables(theme).padding +
      theme.space.small}px + ${StylesIconVariables.base})`,
  },
];

const Input = forwardRef(
  (
    {
      className,
      disabled,
      label,
      guide,
      mask,
      name,
      noContrast,
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

    const inputRender = () => {
      const defaultProps = {
        id,
        name,
        type,
        ref,
        disabled,
        ...opts,
      };

      // `react-text-mask` does not support 'email' or 'number' input types
      if (mask && !['email', 'number'].includes(type)) {
        return (
          <MaskedInput
            {...defaultProps}
            mask={mask}
            guide={guide}
            render={(maskRef, props) => (
              <input
                css={theme =>
                  StylesInputBase(theme, {
                    type,
                    prefixIcon,
                    validationMessage,
                    noContrast,
                  })
                }
                className={cx('CK__Input', className)}
                ref={input => maskRef(input)}
                {...props}
              />
            )}
          />
        );
      }

      return (
        <input
          css={theme =>
            StylesInputBase(theme, {
              type,
              prefixIcon,
              validationMessage,
              noContrast,
            })
          }
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
          <div css={{ position: 'relative' }}>
            <div
              css={theme => [
                {
                  color: theme.fontColor.muted,
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  left: form.variables(theme).padding,
                  zIndex: 2,
                  opacity: disabled && theme.opacity.base,
                },

                theme.settings.contrast.enable &&
                  theme.settings.contrast.form &&
                  !noContrast && {
                    '.u-contrast &': {
                      color: theme.contrast.muted,
                    },
                  },
              ]}
            >
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
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
  guide: PropTypes.bool,
  noContrast: PropTypes.bool,
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
