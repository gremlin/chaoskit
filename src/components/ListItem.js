import PropTypes from 'prop-types';
import React from 'react';

const ListItem = ({ className, ...opts }) => (
  <li className={className} {...opts} />
);

ListItem.propTypes = {
  className: PropTypes.string,
};

export default ListItem;
