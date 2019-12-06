import { useMemo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import FormControlWrapper from './FormControlWrapper';
import { form } from '../assets/styles/utility';
import { generateUUID } from '../helpers/utility';
import caretDown from '../assets/icons/caret-down.svg';

export const StylesSelectVariables = (theme, props = {}) => ({
  iconSize: theme.fontSize.xsmall,
  get arrow() {
    return {
      content: "''",
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: form.variables(theme).padding,
      backgroundImage: `url(${caretDown})`,
      filter: theme.fontColor.base__filter,
      width: this.iconSize,
      height: this.iconSize,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      pointerEvents: 'none',
      opacity: props.disabled && theme.opacity.base,
      zIndex: '2',
    };
  },
  get arrowOffset() {
    return this.iconSize + form.variables(theme).padding + theme.space.small;
  },
});

const Select = ({
  className,
  disabled,
  explanationMessage,
  label,
  size,
  multiple,
  name,
  noContrast,
  options,
  required,
  validationMessage,
  wrapperProps,
  ...opts
}) => {
  const theme = useTheme();

  // Only regenerate this if the name prop changes
  const id = useMemo(() => `${name}-${generateUUID()}`, [name]);

  const renderOpts = option => {
    // If the option has options as well we're in an `<optgroup>`
    if (option.options) {
      return (
        <optgroup key={option.value} label={option.label}>
          {option.options.map(childOption => (
            <option key={childOption.value} value={childOption.value}>
              {childOption.label}
            </option>
          ))}
        </optgroup>
      );
    }

    // We're in a default single-level `<option>`
    return (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    );
  };

  return (
    <FormControlWrapper
      required={required}
      label={label}
      labelProps={{
        htmlFor: id,
      }}
      explanationMessage={explanationMessage}
      validationMessage={validationMessage}
      {...wrapperProps}
    >
      <div
        css={[
          {
            position: 'relative',
          },

          !multiple &&
            !size && {
              '&::after': StylesSelectVariables(theme, { disabled }).arrow,
            },

          theme.settings.contrast.enable &&
            theme.settings.contrast.form &&
            !noContrast && {
              '.u-contrast &': {
                '&::after': {
                  filter: theme.contrast.filter,
                },
              },
            },
        ]}
        className={cx('CK__Select', className)}
      >
        <select
          id={id}
          name={name}
          multiple={multiple}
          disabled={disabled}
          size={size}
          css={[
            form.base(theme),
            form.input(theme, { error: validationMessage, noContrast }),
            {
              // Remove default style in browsers that support `appearance`
              appearance: 'none',
              // Remove the inheritance of text transform in Firefox.
              textTransform: 'none',

              // 1. Change font properties to `inherit` in all browsers
              // 2. Don't inherit the `font-weight` and use `bold` instead.
              // @NOTE: Both declarations don't work in Chrome, Safari and Opera.

              optgroup: {
                font: 'inherit', // 1
                fontWeight: theme.fontWeight.bold, // 2
              },
            },

            !multiple &&
              !size && [
                {
                  padding: `0 ${StylesSelectVariables(theme).arrowOffset}px 0 ${
                    form.variables(theme).padding
                  }px`,

                  // Remove select arrows from IE
                  '&::-ms-expand': {
                    display: 'none',
                  },

                  option: {
                    fontColor: theme.fontColor.base,
                  },
                },
              ],

            (multiple || size) && [
              {
                height: 'auto',
                padding: 0,
                maxHeight: 150,

                option: {
                  padding: form.variables(theme).padding,
                },
              },
            ],
          ]}
          {...opts}
        >
          {options.map(renderOpts)}
        </select>
      </div>
    </FormControlWrapper>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  label: PropTypes.string,
  multiple: PropTypes.bool,
  size: PropTypes.number,
  name: PropTypes.string.isRequired,
  noContrast: PropTypes.bool,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool,
  validationMessage: PropTypes.string,
  wrapperProps: PropTypes.object,
};

export default Select;
