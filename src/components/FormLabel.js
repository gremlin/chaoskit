import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

const FormLabel = (props) => {
  const { children, className, id } = props;
  const classes = cx('form-label', className);

  return (
    children ? (
      <label // eslint-disable-line jsx-a11y/label-has-for
        htmlFor={id}
        className={classes}
      >
        {children}
      </label>
    ) : null
  );
};

FormLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default FormLabel;
