import PropTypes from 'prop-types';
import React from 'react';

const Subnav = (props) => {
  const { children } = props;

  return (
    <div className="subnav-wrapper">
      <div className="subnav">
        {children}
      </div>
    </div>
  );
};

Subnav.propTypes = {
  children: PropTypes.node,
};

export default Subnav;
