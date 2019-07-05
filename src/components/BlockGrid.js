import PropTypes from 'prop-types';
import cx from 'classnames';
import { withTheme } from 'emotion-theming';

import { misc } from '../assets/styles/utility';

const BlockGrid = ({ className, gutter, size, theme, ...opts }) => {
  const percentWidth = columnSize => {
    const calc = 100 / columnSize;

    return `${calc}%`;
  };

  const gutterCalc = gutterSize => [
    gutter[gutterSize] && {
      [theme.mq[gutterSize]]: {
        margin: `${
          gutter[gutterSize] === 'collapse'
            ? 0
            : -theme.space[gutter[gutterSize]]
        }px 0 0 ${
          gutter[gutterSize] === 'collapse'
            ? 0
            : -theme.space[gutter[gutterSize]]
        }px`,

        '> .CK__ListItem': {
          paddingLeft:
            gutter[gutterSize] === 'collapse'
              ? 0
              : theme.space[gutter[gutterSize]],
          paddingTop:
            gutter[gutterSize] === 'collapse'
              ? 0
              : theme.space[gutter[gutterSize]],
        },
      },
    },
  ];

  return (
    <ul
      css={[
        {
          // 1. Reset list-style to allow use of `<ul>`
          display: 'flex',
          flex: '0 1 auto',
          flexFlow: 'row wrap',

          // 1
          padding: '0',
          listStyle: 'none',

          '> .CK__ListItem': [
            misc.trimChildren,
            {
              // Default child elements of row to 100% width until size modifiers kick-in
              flex: '0 0 100%',
              maxWidth: '100%',
            },
          ],
        },

        gutter.base && {
          margin: `${
            gutter.base === 'collapse' ? 0 : -theme.space[gutter.base]
          }px 0 0 ${
            gutter.base === 'collapse' ? 0 : -theme.space[gutter.base]
          }px`,

          '> .CK__ListItem': {
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

        //
        // Size
        //

        size.base && {
          '> .CK__ListItem': {
            flexBasis: percentWidth(size.base),
            maxWidth: percentWidth(size.base),
          },
        },

        size.small && {
          [theme.mq.small]: {
            '.CK__ListItem': {
              flexBasis: percentWidth(size.small),
              maxWidth: percentWidth(size.small),
            },
          },
        },

        size.medium && {
          [theme.mq.medium]: {
            '.CK__ListItem': {
              flexBasis: percentWidth(size.medium),
              maxWidth: percentWidth(size.medium),
            },
          },
        },

        size.large && {
          [theme.mq.large]: {
            '.CK__ListItem': {
              flexBasis: percentWidth(size.large),
              maxWidth: percentWidth(size.large),
            },
          },
        },

        size.xlarge && {
          [theme.mq.xlarge]: {
            '.CK__ListItem': {
              flexBasis: percentWidth(size.xlarge),
              maxWidth: percentWidth(size.xlarge),
            },
          },
        },
      ]}
      className={cx('CK__BlockGrid', className)}
      {...opts}
    />
  );
};

BlockGrid.propTypes = {
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
  size: PropTypes.shape({
    base: PropTypes.number,
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
    xlarge: PropTypes.number,
  }),
  theme: PropTypes.object.isRequired,
};

BlockGrid.defaultProps = {
  gutter: { base: 'base' },
  size: {},
};

export default withTheme(BlockGrid);
