import cx from 'classnames';
import PropTypes from 'prop-types';

import { list } from '../assets/styles/utility';

const List = ({ className, space, type, border, ...opts }) => (
  <ul
    css={theme => [
      {
        listStyle: 'none',
        paddingLeft: 0,
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr)',
        gridGap: space && theme.space[space],
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

export default List;
