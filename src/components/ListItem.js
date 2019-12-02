import cx from 'classnames';
import PropTypes from 'prop-types';

const ListItem = ({ className, ...opts }) => (
  <li
    css={{
      '>:last-of-type': {
        marginBottom: 0,
      },
    }}
    className={cx('CK__ListItem', className)}
    {...opts}
  />
);

ListItem.propTypes = {
  className: PropTypes.string,
};

export default ListItem;
