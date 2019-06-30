import PropTypes from 'prop-types';
import cx from 'classnames';

import { text } from '../assets/styles/utility';
import asterisk from '../assets/icons/asterisk.svg';
import close from '../assets/icons/close.svg';

const FormLabel = ({
  children, className, id, required, error, ...opts
}) => (children ? (
  <label // eslint-disable-line jsx-a11y/label-has-for
    htmlFor={id}
    css={theme => [
      text.heading(theme),
      {
        display: 'block', // Behave like block-level element
        marginBottom: theme.space.small,
        color: theme.fontColor.base,
      },

      (required || error) && {
        '&::after': {
          content: "''",
          display: 'inline-block',
          backgroundRepeat: 'no-repeat',
          width: theme.fontSize.xxsmall,
          height: theme.fontSize.xxsmall,
          backgroundSize: 'contain',
          marginLeft: theme.space.xsmall,
          position: 'relative',
          top: '-0.25em',
        },
      },

      required && {
        '&::after': {
          backgroundImage: `url(${asterisk})`,
          filter: theme.color.danger.filter,
        },
      },

      error && {
        '&::after': {
          backgroundImage: `url(${close})`,
          filter: theme.color.danger.filter,
        },
      },

      theme.settings.contrast
          && theme.settings.formContrast && {
        '.u-contrast &': [
          { color: theme.contrast.base },

          (required || error) && {
            '&::after': {
              filter: theme.contrast.filter,
            },
          },
        ],
      },
    ]}
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
