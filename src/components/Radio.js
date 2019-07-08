import cx from 'classnames';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import { RadioGroupContext } from './RadioGroup';
import { generateUUID } from '../helpers/utility';

const Radio = props => {
  const { className, disabled, label, value, ...opts } = props;

  const { selectedValue, name, onChange } = useContext(RadioGroupContext);
  const id = `${name}-${generateUUID()}`;

  return (
    <div css={{}} className={cx('CK__Radio', className)}>
      <input
        type="radio"
        disabled={disabled}
        name={name}
        value={value}
        id={id}
        checked={value === selectedValue}
        onChange={onChange}
        {...opts}
      />
      {label && (
        <label // eslint-disable-line jsx-a11y/label-has-for
          htmlFor={id}
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
