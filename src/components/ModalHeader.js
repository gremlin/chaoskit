import cx from 'classnames';
import PropTypes from 'prop-types';

import Close, { StylesCloseVariables } from './Close';
import { StylesModalVariables } from './Modal';

const StylesModalHeaderVariables = theme => ({
  closeOffset: theme.space.small,
});

const ModalHeader = ({ centered, className, onCloseClick, title, ...opts }) => (
  <div
    css={theme => [
      {
        display: 'flex',
        padding: StylesModalVariables(theme).padding,
        justifyContent: 'space-between',
      },

      centered && {
        marginLeft:
          StylesCloseVariables(theme).size +
          StylesModalHeaderVariables(theme).closeOffset,
      },
    ]}
    className={cx('CK__ModalHeader', className)}
    {...opts}
  >
    <h4
      css={[
        {
          marginBottom: 0,
        },

        centered && {
          flex: 1,
          textAlign: 'center',
        },
      ]}
    >
      {title}
    </h4>
    <Close
      onClick={onCloseClick}
      css={theme => ({
        marginLeft: StylesModalHeaderVariables(theme).closeOffset,
      })}
    />
  </div>
);

ModalHeader.propTypes = {
  centered: PropTypes.bool,
  className: PropTypes.string,
  onCloseClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalHeader;
