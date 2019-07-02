import PropTypes from 'prop-types';
import cx from 'classnames';

import { misc } from '../assets/styles/utility';

const Row = ({ className, size, ...opts }) => (
  <div
    css={theme => [
      misc.trimChildren,
      {
        // 1. Margin so wrapping columns have space
        // 2. Reset list-style to allow use of `<ul>`
        display: 'flex',
        flex: '0 1 auto',
        flexFlow: 'row wrap',
        marginLeft: size === 'collapse' ? 0 : -theme.space[size],
        // 1
        marginTop: size === 'collapse' ? 0 : -theme.space[size],
        // 2
        padding: '0',
        listStyle: 'none',

        // Default spacing/flex attributes
        '> .CK__RowColumn': {
          paddingLeft: size === 'collapse' ? 0 : theme.space[size],
          paddingTop: size === 'collapse' ? 0 : theme.space[size],
        },
      },
    ]}
    className={cx('CK__Row', className)}
    {...opts}
  />
);

Row.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf([
    'collapse',
    'small',
    'base',
    'medium',
    'large',
    'xlarge',
  ]),
};

Row.defaultProps = {
  size: 'base',
};

export default Row;
