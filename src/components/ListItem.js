import cx from 'classnames';
import PropTypes from 'prop-types';

const ListItem = ({ className, ...opts }) => (
  <li className={cx('CK__ListItem', className)} {...opts} />
);

ListItem.propTypes = {
  className: PropTypes.string,
};

export default ListItem;
