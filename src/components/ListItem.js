import cx from 'classnames';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

const ListItem = ({ className, ...opts }) => {
  const theme = useTheme();

  return (
    <li
      css={{
        /*
        '>:last-of-type': {
          marginBottom: 0,
        },
        */

        'ul:not(.CK__Inline), ol': {
          marginTop: theme.space.base,
          paddingLeft: theme.space.base,
        },
      }}
      className={cx('CK__ListItem', className)}
      {...opts}
    />
  );
};

ListItem.propTypes = {
  className: PropTypes.string,
};

export default ListItem;
