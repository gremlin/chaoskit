import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Button, Icon } from '.';

const Close = ({ className, onClick }) => {
  const classes = cx('close', className);

  return (
    <Button type="reset" onClick={onClick} className={classes}>
      <Icon icon="close" />
    </Button>
  );
};

Close.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Close;
