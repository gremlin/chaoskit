import PropTypes from 'prop-types';
import React from 'react';

const ListItem = ({ children, className, ...opts }) => (
  <li className={className} {...opts}>
    {children}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ListItem.defaultProps = {
  children: null,
};

export default ListItem;
