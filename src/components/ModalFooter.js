import cx from 'classnames';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import { misc } from '../assets/styles/utility';
import { StylesModalVariables } from './Modal';

const ModalFooter = ({ className, ...opts }) => {
  const theme = useTheme();

  return (
    <div
      css={[
        misc.trimChildren,
        {
          padding: StylesModalVariables(theme).padding,
        },
      ]}
      className={cx('CK__ModalFooter', className)}
      {...opts}
    />
  );
};

ModalFooter.propTypes = {
  className: PropTypes.string,
};

export default ModalFooter;
