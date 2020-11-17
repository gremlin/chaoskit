import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'

const columnOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const gutterOptions = ['collapse', 'small', 'base', 'medium', 'large', 'xlarge']

const BlockGrid = ({
  className,
  gutter = { base: 'base' },
  size = {},
  ...rest
}) => {
  const theme = useTheme()

  const percentWidth = (columnSize) => {
    const calc = 100 / columnSize

    return `${calc}%`
  }

  const gutterCalc = (gutterSize) => [
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
  ]

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

          '> .CK__ListItem': {
            // Default child elements of row to 100% width until size modifiers kick-in
            flex: '0 0 100%',
            maxWidth: '100%',
          },
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
            '> .CK__ListItem': {
              flexBasis: percentWidth(size.small),
              maxWidth: percentWidth(size.small),
            },
          },
        },

        size.medium && {
          [theme.mq.medium]: {
            '> .CK__ListItem': {
              flexBasis: percentWidth(size.medium),
              maxWidth: percentWidth(size.medium),
            },
          },
        },

        size.large && {
          [theme.mq.large]: {
            '> .CK__ListItem': {
              flexBasis: percentWidth(size.large),
              maxWidth: percentWidth(size.large),
            },
          },
        },

        size.xlarge && {
          [theme.mq.xlarge]: {
            '> .CK__ListItem': {
              flexBasis: percentWidth(size.xlarge),
              maxWidth: percentWidth(size.xlarge),
            },
          },
        },
      ]}
      className={clsx('CK__BlockGrid', className)}
      {...rest}
    />
  )
}

BlockGrid.propTypes = {
  className: PropTypes.string,
  /** Labels based off of media query breakpoints */
  gutter: PropTypes.shape({
    base: PropTypes.oneOf(gutterOptions),
    small: PropTypes.oneOf(gutterOptions),
    medium: PropTypes.oneOf(gutterOptions),
    large: PropTypes.oneOf(gutterOptions),
    xlarge: PropTypes.oneOf(gutterOptions),
  }),
  /** Labels based off of media query breakpoints */
  size: PropTypes.shape({
    base: PropTypes.oneOf(columnOptions),
    small: PropTypes.oneOf(columnOptions),
    medium: PropTypes.oneOf(columnOptions),
    large: PropTypes.oneOf(columnOptions),
    xlarge: PropTypes.oneOf(columnOptions),
  }),
}

export default BlockGrid
