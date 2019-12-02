import cx from 'classnames';
import PropTypes from 'prop-types';

import { list } from '../assets/styles/utility';

const List = ({ as: Component, className, space, type, border, ...opts }) => (
  <Component
    css={theme => [
      {
        listStyle: 'none',
        paddingLeft: 0,
        display: 'grid',
        gridTemplateColumns: 'minmax(auto, 1fr)',
        gap: space && theme.space[space],
      },

      border && {
        '> li:not(:first-of-type)': {
          paddingTop: space && theme.space[space],
          borderTop: theme.border.base,
        },
      },

      type === 'numbers' && list.numbers({ theme }),

      type === 'circles' &&
        list.circles({ theme, space: space && theme.space[space], border }),
    ]}
    className={cx('UK__List', className)}
    {...opts}
  />
);

List.propTypes = {
  as: PropTypes.oneOf(['ul', 'ol']),
  border: PropTypes.bool,
  className: PropTypes.string,
  space: PropTypes.oneOf([
    'xsmall',
    'small',
    'base',
    'medium',
    'large',
    'xlarge',
  ]),
  type: PropTypes.oneOf(['numbers', 'circles']),
};

List.defaultProps = {
  as: 'ul',
};

export default List;
