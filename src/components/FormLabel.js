import PropTypes from 'prop-types';
import cx from 'classnames';

import { text } from '../assets/styles/utility';
import asterisk from '../assets/icons/asterisk.svg';

const FormLabel = ({
  children, className, id, required, valid, ...opts
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

      (required || valid) && {
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

      theme.settings.contrast
          && theme.settings.formContrast && {
        '.u-contrast &': [
          { color: theme.contrast.base },

          (required || valid) && {
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
  valid: PropTypes.bool,
};

FormLabel.defaultProps = {
  valid: null,
};

export default FormLabel;
