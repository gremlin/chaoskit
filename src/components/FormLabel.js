import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from 'emotion-theming';

import asterisk from '../assets/icons/asterisk.svg';
import close from '../assets/icons/close.svg';

export const StylesFormLabelBase = (theme, props = {}) => [
  {
    display: 'block', // Behave like block-level element
    marginBottom: theme.space.small,
    color: theme.fontColor.base,
    fontWeight: theme.fontWeight.bold,
    lineHeight: theme.lineHeight.small,
    cursor: 'default',
  },

  (props.required || props.error) && {
    '&::after': {
      content: "''",
      display: 'inline-block',
      backgroundRepeat: 'no-repeat',
      width: theme.fontSize.xxsmall,
      height: theme.fontSize.xxsmall,
      backgroundSize: 'contain',
      marginLeft: theme.space.small,
      position: 'relative',
      top: '-0.25em',
    },
  },

  props.required && {
    '&::after': {
      backgroundImage: `url(${asterisk})`,
      filter: theme.color.danger.filter,
    },
  },

  props.error && {
    '&::after': {
      backgroundImage: `url(${close})`,
      filter: theme.color.danger.filter,
    },
  },

  theme.settings.contrast.enable &&
    theme.settings.contrast.form && {
      '.u-contrast &': [
        { color: theme.contrast.base },

        (props.required || props.error) && {
          '&::after': {
            filter: theme.contrast.filter,
          },
        },
      ],
    },
];

const FormLabel = forwardRef(
  ({ as, children, className, required, error, ...opts }, ref) => {
    const theme = useTheme();
    const Component = as;

    return children ? (
      <Component
        css={StylesFormLabelBase(theme, { required, error })}
        className={cx('CK__FormLabel', className)}
        ref={ref}
        {...opts}
      >
        {children}
      </Component>
    ) : null;
  }
);

FormLabel.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
};

FormLabel.defaultProps = {
  as: 'label',
};

export default FormLabel;
