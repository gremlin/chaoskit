import cx from 'classnames';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import FormControlWrapper from './FormControlWrapper';
import { generateUUID } from '../helpers/utility';

const StylesRangeVariables = theme => ({
  thumb: {
    size: theme.height.xxxsmall,
    background: theme.color.light.base,
    border: theme.border.base,
  },
  track: {
    height: theme.height.xxxsmall / 3,
    background: theme.color.panel.dark,
    backgroundFocus: theme.color.panel.dark,
  },
});

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
            background: 'transparent',
            padding: 0,
            // 2
            maxWidth: '100%',
            // 3
            width: '100%',

            '&::-moz-focus-outer': {
              border: 0,
            },

            // Improves consistency of cursor style for clickable elements
            '&:not(:disabled)': {
              '&::-webkit-slider-thumb, &::moz-range-thumb, ::-ms-thumb': {
                cursor: 'pointer',
              },
            },

            //
            // Thumb
            //

            // Webkit
            '&::-webkit-slider-thumb': {
              appearance: 'none',
              transform: 'translateY(-40%)',
              height: StylesRangeVariables(theme).thumb.size,
              width: StylesRangeVariables(theme).thumb.size,
              borderRadius: '50%',
              background: StylesRangeVariables(theme).thumb.background,
              border: StylesRangeVariables(theme).thumb.border,
            },

            // Firefox
            '&::-moz-range-thumb': {
              height: StylesRangeVariables(theme).thumb.size,
              width: StylesRangeVariables(theme).thumb.size,
              borderRadius: '50%',
              background: StylesRangeVariables(theme).thumb.background,
              border: StylesRangeVariables(theme).thumb.border,
            },

            // Edge
            '&::-ms-thumb': {
              marginTop: 0,
              height: StylesRangeVariables(theme).thumb.size,
              width: StylesRangeVariables(theme).thumb.size,
              borderRadius: '50%',
              background: StylesRangeVariables(theme).thumb.background,
              border: StylesRangeVariables(theme).thumb.border,
            },

            '&::-ms-tooltip': {
              display: 'none',
            },

            //
            // Track
            //

            // Chrome
            '&::-webkit-slider-runnable-track': {
              height: StylesRangeVariables(theme).track.height,
              borderRadius: StylesRangeVariables(theme).track.height / 2,
              background: StylesRangeVariables(theme).track.background,

              // Safari does not have `focus` state. Using active instead
              '&:focus, &:active': {
                background: StylesRangeVariables(theme).track.backgroundFocus,
              },
            },

            // Firefox
            '&::-moz-range-track': {
              height: StylesRangeVariables(theme).track.height,
              borderRadius: StylesRangeVariables(theme).track.height / 2,
              background: StylesRangeVariables(theme).track.background,

              '&:focus': {
                background: StylesRangeVariables(theme).track.backgroundFocus,
              },
            },

            // Edge
            '&::-ms-fill-lower, &::-ms-fill-upper': {
              height: StylesRangeVariables(theme).track.height,
              borderRadius: StylesRangeVariables(theme).track.height / 2,
              background: StylesRangeVariables(theme).track.background,

              '&:focus': {
                background: StylesRangeVariables(theme).track.backgroundFocus,
              },
            },
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
  wrapperProps: PropTypes.object,
};

export default Range;
