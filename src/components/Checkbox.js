import { useContext } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import { CheckboxGroupContext } from './CheckboxGroup';
import checkbox from '../assets/icons/check.svg';
import { misc, form } from '../assets/styles/utility';
import { generateUUID } from '../helpers/utility';

export const StylesCheckboxVariables = {
  size: 22,
  iconSize: 12,
};

const Checkbox = ({ className, disabled, label, name, value, ...opts }) => {
  const theme = useTheme();
  const { noContrast } = useContext(CheckboxGroupContext);

  const id = `${name}-${generateUUID()}`;

  return (
    <div
      css={[
        {
          display: 'inline-flex',
          alignItems: 'center',
          fontSize: theme.fontSize.base,
        },
      ]}
      className={cx('CK__Checkbox', className)}
    >
      <input
        value={value}
        type="checkbox"
        disabled={disabled}
        name={name}
        id={id}
        css={[
          misc.hide,
          {
            '&:not(:disabled)': {
              cursor: 'pointer',
            },

            '&:checked': {
              '+ label': {
                '&::before': {
                  borderColor: theme.color.primary.base,
                },

                '&::after': {
                  content: "''",
                  width: StylesCheckboxVariables.iconSize,
                  height: StylesCheckboxVariables.iconSize,
                  backgroundImage: `url(${checkbox})`,
                  filter: theme.color.primary.filter,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  display: 'inline-block',
                  position: 'absolute',
                  left:
                    (StylesCheckboxVariables.size -
                      StylesCheckboxVariables.iconSize) /
                    2,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                },
              },
            },

            '&:disabled': {
              '+ label': {
                opacity: theme.opacity.base,
                cursor: 'not-allowed',

                '&::before': {
                  backgroundColor: theme.color.panel.base,
                },
              },
            },
          },

          theme.settings.contrast.enable &&
            theme.settings.contrast.form &&
            !noContrast && {
              '.u-contrast &': {
                '+ label::before': {
                  borderColor: theme.contrast.base,
                },

                '&:checked + label::after': {
                  filter: theme.contrast.filter,
                },

                '&:disabled + label::before': {
                  backgroundColor: form.variables(theme).contrast.background,
                },
              },
            },
        ]}
        {...opts}
      />
      {label && (
        <label // eslint-disable-line jsx-a11y/label-has-for
          htmlFor={id}
          css={[
            {
              cursor: 'pointer',
              userSelect: 'none',
              paddingLeft: StylesCheckboxVariables.size + theme.space.small,
              position: 'relative',
              lineHeight: theme.lineHeight.small,

              '&::before': {
                content: "''",
                position: 'absolute',
                left: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                border: theme.border.base,
                borderRadius: theme.borderRadius.base,
                height: StylesCheckboxVariables.size,
                width: StylesCheckboxVariables.size,
                boxShadow: theme.boxShadow.base,
              },
            },
          ]}
        >
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  name: PropTypes.string.isRequired,
  noContrast: PropTypes.bool,
  value: PropTypes.string,
};

export default Checkbox;
