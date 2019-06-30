import PropTypes from 'prop-types';
import cx from 'classnames';

import { text } from '../assets/styles/utility';
import asterisk from '../assets/icons/asterisk.svg';
import close from '../assets/icons/close.svg';

export const StylesFormLabelBase = (theme, props = {}) => [
  text.heading(theme, 'base'),
  {
    display: 'block', // Behave like block-level element
    marginBottom: theme.space.small,
    color: theme.fontColor.base,
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

  theme.settings.contrast
    && theme.settings.formContrast && {
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

const FormLabel = ({
  children, className, id, required, error, ...opts
}) => (children ? (
  <label // eslint-disable-line jsx-a11y/label-has-for
    htmlFor={id}
    css={theme => StylesFormLabelBase(theme, { required, error })}
    className={cx('CK__FormLabel', className)}
    {...opts}
  >
    {children}
  </label>
) : null);

FormLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
};

export default FormLabel;
