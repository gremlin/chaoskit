import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FormGroup = forwardRef(({ className, ...opts }, ref) => (
  <div
    css={theme => ({
      '+ .CK__FormGroup': {
        marginTop: theme.space.base,
      },
    })}
    className={cx('CK__FormGroup', className)}
    ref={ref}
    {...opts}
  />
));

FormGroup.propTypes = {
  className: PropTypes.string,
};

export default FormGroup;
