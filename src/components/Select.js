import cx from 'classnames';
import PropTypes from 'prop-types';

import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormFooter from './FormFooter';
import { form } from '../assets/styles/utility';
import { generateUUID } from '../helpers/utility';
import caretDown from '../assets/icons/caret-down.svg';

const StylesSelectVariables = (theme, props = {}) => ({
  iconSize: 12,
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
  onChange,
  required,
  validationMessage,
  ...opts
}) => {
  const id = `${name}-${generateUUID()}`;

  const handleOnChange = ({
    target: { name: fieldName, value: fieldValue },
  }) => {
    const selectedValue = parseInt(fieldValue, 10)
      ? parseInt(fieldValue, 10)
      : fieldValue;

    onChange(fieldName, selectedValue);
  };

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
    <FormGroup>
      <FormLabel required={required} error={!!validationMessage} id={id}>
        {label}
      </FormLabel>
      <div
        css={theme => [
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
          onChange={handleOnChange}
          multiple={multiple}
          disabled={disabled}
          size={size}
          css={theme => [
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
                  padding: `0 ${StylesSelectVariables(theme).iconSize +
                    form.variables(theme).padding +
                    theme.space.small}px 0 ${form.variables(theme).padding}px`,

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
      <FormFooter
        explanationMessage={explanationMessage}
        validationMessage={validationMessage}
      />
    </FormGroup>
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
  onChange: PropTypes.func,
  required: PropTypes.bool,
  validationMessage: PropTypes.string,
};

export default Select;
