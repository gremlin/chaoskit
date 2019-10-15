import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from 'emotion-theming';

const FormGroup = forwardRef(({ className, ...opts }, ref) => {
  const theme = useTheme();

  return (
    <div
      css={{
        '+ .CK__FormGroup': {
          marginTop: theme.space.base,
        },
      }}
      className={cx('CK__FormGroup', className)}
      ref={ref}
      {...opts}
    />
  );
});

FormGroup.propTypes = {
  className: PropTypes.string,
};

export default FormGroup;
