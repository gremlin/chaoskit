import PropTypes from 'prop-types';
import cx from 'classnames';
import { withTheme } from 'emotion-theming';

import { misc } from '../assets/styles/utility';

const Row = ({
  className, gutter, theme, ...opts
}) => {
  const gutterCalc = size => [
    gutter[size] && {
      [theme.mq[size]]: {
        marginLeft:
          gutter[size] === 'collapse' ? 0 : -theme.space[gutter[size]],
        // 1
        marginTop: gutter[size] === 'collapse' ? 0 : -theme.space[gutter[size]],

        '> .CK__RowColumn': {
          paddingLeft:
            gutter[size] === 'collapse' ? 0 : theme.space[gutter[size]],
          paddingTop:
            gutter[size] === 'collapse' ? 0 : theme.space[gutter[size]],
        },
      },
    },
  ];

  return (
    <div
      css={[
        misc.trimChildren,
        {
          // 1. Reset list-style to allow use of `<ul>`
          display: 'flex',
          flex: '0 1 auto',
          flexFlow: 'row wrap',

          // 1
          padding: '0',
          listStyle: 'none',
        },

        gutter.base && {
          marginLeft:
            gutter.base === 'collapse' ? 0 : -theme.space[gutter.base],
          // 1
          marginTop: gutter.base === 'collapse' ? 0 : -theme.space[gutter.base],

          '> .CK__RowColumn': {
            paddingLeft:
              gutter.base === 'collapse' ? 0 : theme.space[gutter.base],
            paddingTop:
              gutter.base === 'collapse' ? 0 : theme.space[gutter.base],
          },
        },

        gutterCalc('small'),
        gutterCalc('medium'),
        gutterCalc('large'),
        gutterCalc('xlarge'),
      ]}
      className={cx('CK__Row', className)}
      {...opts}
    />
  );
};

Row.propTypes = {
  className: PropTypes.string,
  gutter: PropTypes.shape({
    base: PropTypes.oneOf([
      'collapse',
      'small',
      'base',
      'medium',
      'large',
      'xlarge',
    ]),
    small: PropTypes.oneOf([
      'collapse',
      'small',
      'base',
      'medium',
      'large',
      'xlarge',
    ]),
    medium: PropTypes.oneOf([
      'collapse',
      'small',
      'base',
      'medium',
      'large',
      'xlarge',
    ]),
    large: PropTypes.oneOf([
      'collapse',
      'small',
      'base',
      'medium',
      'large',
      'xlarge',
    ]),
    xlarge: PropTypes.oneOf([
      'collapse',
      'small',
      'base',
      'medium',
      'large',
      'xlarge',
    ]),
  }),
  theme: PropTypes.object.isRequired,
};

Row.defaultProps = {
  gutter: { base: 'base' },
};

export default withTheme(Row);
