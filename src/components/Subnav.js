import PropTypes from 'prop-types';
import React from 'react';

const Subnav = ({ children, ...opts }) => (
  <div className="subnav-wrapper" {...opts}>
    <div className="subnav">{children}</div>
  </div>
);

Subnav.propTypes = {
  children: PropTypes.node,
};

export default Subnav;
