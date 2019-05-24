import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from './Button';
import Icon from './Icon';

const Close = ({ className, ...opts }) => {
  const classes = cx('close', className);

  return (
    <Button type="reset" className={classes} {...opts}>
      <Icon icon="close" />
    </Button>
  );
};

Close.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Close;
