import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'

const gutterOptions = ['collapse', 'small', 'base', 'medium', 'large', 'xlarge']

const Row = ({ className, gutter = { base: 'base' }, ...rest }) => {
  const theme = useTheme()

  const gutterCalc = (size) => [
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
  ]

  return (
    <div
      css={[
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
      className={clsx(`CK__Row ${theme.settings.classes.trim}`, className)}
      {...rest}
    />
  )
}

Row.propTypes = {
  className: PropTypes.string,
  gutter: PropTypes.shape({
    base: PropTypes.oneOf(gutterOptions),
    small: PropTypes.oneOf(gutterOptions),
    medium: PropTypes.oneOf(gutterOptions),
    large: PropTypes.oneOf(gutterOptions),
    xlarge: PropTypes.oneOf(gutterOptions),
  }),
}

export default Row
