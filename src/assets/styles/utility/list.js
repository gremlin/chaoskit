import { tint } from 'polished'

export const reset = {
  listStyle: 'none',
  paddingLeft: 0,
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
}

export const numbers = ({
  theme = {},
  space = 0,
  border = false,
  fill = theme.color.primary.base,
}) => {
  const circleSize = theme.height.xxsmall

  return {
    counterReset: 'list-counter',

    '> li': {
      listStyle: 'none',
      paddingLeft: theme.height.xsmall + theme.space.small,
      position: 'relative',

      '&::before': {
        content: 'counter(list-counter, decimal)',
        counterIncrement: 'list-counter',
        fontWeight: theme.fontWeight.bold,
        background: fill,
        borderRadius: '50%',
        width: circleSize,
        height: circleSize,
        lineHeight: `${circleSize}px`,
        textAlign: 'center',
        fontSize: theme.fontSize.xsmall,
        color: theme.contrast.base,
        position: 'absolute',
        left: 0,
      },

      '&:first-of-type::before': {
        top: 0,
      },

      '&:not(:first-of-type)::before': {
        top: border ? space : null,
      },
    },
  }
}

export const circles = ({
  theme = {},
  fill = theme.color.primary.base,
  hoverFill = false,
  space = 0,
  circleSize = 8,
  border = false,
}) => ({
  '> li': [
    {
      display: 'block',
      position: 'relative',
      paddingLeft: theme.space.base + circleSize,

      '&::before': {
        content: "''",
        position: 'absolute',
        left: 0,
        display: 'inline-block',
        width: circleSize,
        height: circleSize,
        borderRadius: '50%',
        border: `1px solid ${fill}`,
      },

      '&:first-of-type::before': {
        top: `calc((1em * ${theme.lineHeight.base} - ${circleSize}px) / 2)`,
      },

      '&:not(:first-of-type)::before': {
        top: `calc((1em * ${theme.lineHeight.base} - ${circleSize}px) / 2${
          border ? ` + ${space}px` : ''
        })`,
      },
    },

    hoverFill && {
      '&:hover, &:focus': {
        '&::before': {
          background: tint(0.925, fill),
        },
      },
    },
  ],
})
