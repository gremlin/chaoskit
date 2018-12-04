import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const List = (props) => {
  const { children, className, type, ...opts } = props;
  const classes = cx('u-list', className, {
    'u-list--space': type && type.includes('space'),
    'u-list--border': type && type.includes('border'),
    'u-list--number': type && type.includes('number'),
    'u-list--circles': type && type.includes('circles'),
  });

  return (
    <ul className={classes} {...opts}>
      {children}
    </ul>
  );
};

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.array,
};

export default List;
