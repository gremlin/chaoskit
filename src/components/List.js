import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const List = ({ className, type, ...opts }) => {
  const classes = cx('u-list', className, {
    'u-list--space': type && type.includes('space'),
    'u-list--border': type && type.includes('border'),
    'u-list--number': type && type.includes('number'),
    'u-list--circles': type && type.includes('circles'),
  });

  return <ul className={classes} {...opts} />;
};

List.propTypes = {
  className: PropTypes.string,
  type: PropTypes.array,
};

export default List;
