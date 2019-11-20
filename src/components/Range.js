import cx from 'classnames';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { tint } from 'polished';

import FormControlWrapper from './FormControlWrapper';
import { generateUUID } from '../helpers/utility';

const StylesRangeVariables = theme => ({
  thumb: {
    size: theme.height.xxxsmall,
    background: theme.color.primary.base,
  },
  track: {
    borderRadius: theme.height.xxxsmall / 2,
    height: theme.height.xxxsmall / 3,
  },
});

const generateProgressGradient = (theme, { value = 0, min = 0, max = 0 }) => {
  const val = (value - min) / (max - min);
  const percentage = val * 100;

  return `linear-gradient(to right, ${
    StylesRangeVariables(theme).thumb.background
  } ${percentage}%, ${tint(
    0.75,
    StylesRangeVariables(theme).thumb.background
  )} ${percentage}%)`;
};

const Range = ({
  className,
  disabled,
  explanationMessage,
  label,
  name,
  noContrast,
  required,
  validationMessage,
  wrapperProps,
  min,
  max,
  step,
  ...props
}) => {
  const theme = useTheme();

  const id = `${name}-${generateUUID()}`;

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
      <input
        type="range"
        id={id}
        name={name}
        disabled={disabled}
        className={cx('CK__Range', className)}
        min={min}
        max={max}
        step={step}
        css={[
          {
            // 1. Normalize and defaults
            // 2. Prevent content overflow if a fixed width is used
            // 3. Style

            // 1
            boxSizing: 'border-box',
            margin: 0,
            verticalAlign: 'middle',
            appearance: 'none',
            background: generateProgressGradient(theme, {
              ...props,
              min,
              max,
              step,
            }),
            borderRadius: StylesRangeVariables(theme).track.borderRadius,
            height: StylesRangeVariables(theme).track.height,
            padding: 0,
            // 2
            maxWidth: '100%',
            // 3
            width: '100%',

            '&::-moz-focus-outer': {
              border: 0,
            },

            //
            // Thumb
            //

            // Webkit
            '&::-webkit-slider-thumb': {
              appearance: 'none',
              height: StylesRangeVariables(theme).thumb.size,
              width: StylesRangeVariables(theme).thumb.size,
              borderRadius: '50%',
              background: StylesRangeVariables(theme).thumb.background,
              border: 0,
            },

            // Firefox
            '&::-moz-range-thumb': {
              height: StylesRangeVariables(theme).thumb.size,
              width: StylesRangeVariables(theme).thumb.size,
              borderRadius: '50%',
              background: StylesRangeVariables(theme).thumb.background,
              border: 0,
            },

            // Edge
            '&::-ms-thumb': {
              marginTop: 0,
              height: StylesRangeVariables(theme).thumb.size,
              width: StylesRangeVariables(theme).thumb.size,
              borderRadius: '50%',
              background: StylesRangeVariables(theme).thumb.background,
              border: 0,
            },

            '&::-ms-tooltip': {
              display: 'none',
            },

            //
            // Track
            //

            '&::-webkit-slider-runnable-track, &::-moz-range-track, &::-ms-fill-lower, &::-ms-fill-upper': {
              height: StylesRangeVariables(theme).track.height,
              background: 'transparent',
            },
          },

          disabled && {
            opacity: theme.opacity.base,
            cursor: 'not-allowed',
          },
        ]}
        {...props}
      />
    </FormControlWrapper>
  );
};

Range.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  noContrast: PropTypes.bool,
  required: PropTypes.bool,
  validationMessage: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  wrapperProps: PropTypes.object,
};

export default Range;
