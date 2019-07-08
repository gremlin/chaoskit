import cx from 'classnames';
import PropTypes from 'prop-types';
import { useRef } from 'react';

import { generateUUID } from '../helpers/utility';

const Checkbox = ({
  className,
  disabled,
  label,
  name,
  onChange,
  value,
  ...opts
}) => {
  const checkboxLabelRef = useRef();

  const id = `${name}-${generateUUID()}`;

  const toggleChecked = ({
    target: { name: fieldName, value: fieldValue, checked },
  }) => {
    onChange(fieldName, fieldValue, checked);
  };

  return (
    <div css={{}} className={cx('CK__Checkbox', className)}>
      <input
        value={value}
        type="checkbox"
        disabled={disabled}
        name={name}
        id={id}
        onChange={toggleChecked}
        {...opts}
      />
      {label && (
        <label // eslint-disable-line jsx-a11y/label-has-for
          htmlFor={id}
          ref={checkboxLabelRef}
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
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Checkbox;
