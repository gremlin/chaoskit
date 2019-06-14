import cx from 'classnames';
import PropTypes from 'prop-types';

import { misc } from '../assets/styles/utility';
import { StylesModalVariables } from './Modal';

const ModalBody = ({ className, ...opts }) => (
  <div
    css={theme => [
      misc.trimChildren,
      {
        padding: StylesModalVariables(theme).padding,
      },
    ]}
    className={cx('CK__ModalBody', className)}
    {...opts}
  />
);

ModalBody.propTypes = {
  className: PropTypes.string,
};

export default ModalBody;
