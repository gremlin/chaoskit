import cx from 'classnames';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import { RadioGroupContext } from './RadioGroup';
import { misc, form } from '../assets/styles/utility';
import { generateUUID } from '../helpers/utility';

export const StylesRadioVariables = {
  size: 22,
  iconSize: 8,
};

const Radio = ({ className, disabled, label, value, ...opts }) => {
  const { selectedValue, name, onChange, noContrast } = useContext(
    RadioGroupContext
  );
  const id = `${name}-${generateUUID()}`;

  return (
    <div
      css={theme => [
        {
          display: 'inline-flex',
          alignItems: 'center',
          fontSize: theme.fontSize.base,
        },
      ]}
      className={cx('CK__Radio', className)}
    >
      <input
        type="radio"
        disabled={disabled}
        name={name}
        value={value}
        id={id}
        checked={value === selectedValue}
        onChange={onChange}
        css={theme => [
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
                  background: theme.color.primary.base,
                  width: StylesRadioVariables.iconSize,
                  height: StylesRadioVariables.iconSize,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  borderRadius: '50%',
                  display: 'inline-block',
                  position: 'absolute',
                  left:
                    (StylesRadioVariables.size -
                      StylesRadioVariables.iconSize) /
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
                  background: theme.contrast.base,
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
          css={theme => [
            {
              cursor: 'pointer',
              userSelect: 'none',
              paddingLeft: StylesRadioVariables.size + theme.space.small,
              position: 'relative',
              lineHeight: theme.lineHeight.small,

              '&::before': {
                content: "''",
                position: 'absolute',
                left: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                border: theme.border.base,
                borderRadius: '50%',
                height: StylesRadioVariables.size,
                width: StylesRadioVariables.size,
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

Radio.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Radio;
