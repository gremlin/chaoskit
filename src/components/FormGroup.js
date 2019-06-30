import PropTypes from 'prop-types';
import cx from 'classnames';

const FormGroup = ({ className, ...opts }) => (
  <div
    css={theme => ({
      '+ .CK__FormGroup': {
        marginTop: theme.space.base,
      },
    })}
    className={cx('CK__FormGroup', className)}
    {...opts}
  />
);

FormGroup.propTypes = {
  className: PropTypes.string,
};

export default FormGroup;
