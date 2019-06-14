import cx from 'classnames';
import PropTypes from 'prop-types';

import { misc } from '../assets/styles/utility';
import { StylesModalVariables } from './Modal';

const ModalFooter = ({ align, className, ...opts }) => (
  <div
    css={theme => [
      misc.trimChildren,
      {
        display: 'flex',
        alignItems: 'center',
        justifyContent: [align],
        padding: StylesModalVariables(theme).padding,
      },
    ]}
    className={cx('CK__ModalFooter', className)}
    {...opts}
  />
);

ModalFooter.propTypes = {
  align: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  className: PropTypes.string,
};

ModalFooter.defaultProps = {
  align: 'flex-start',
};

export default ModalFooter;
