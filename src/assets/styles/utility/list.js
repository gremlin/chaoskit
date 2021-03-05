import { tint } from 'polished'

export const reset = {
  listStyle: 'none',
  paddingLeft: 0,
  display: 'grid',
}

export const numbers = ({
  theme = {},
  space = 0,
  border = false,
  fill = theme.color.primary.base,
  noContrast = false,
}) => {
  const circleSize = theme.height['2xsmall']

  return {
    counterReset: 'list-counter',

    '> li': {
      listStyle: 'none',
      paddingLeft: theme.height.xsmall + theme.space.small,
      position: 'relative',

      '&::before': [
        {
          content: 'counter(list-counter, decimal)',
          counterIncrement: 'list-counter',
          fontWeight: theme.fontWeight.bold,
          background: fill,
          borderRadius: theme.borderRadius.rounded,
          width: circleSize,
          height: circleSize,
          lineHeight: `${circleSize}px`,
          textAlign: 'center',
          fontSize: theme.fontSize.xsmall,
          color: theme.contrast.base,
          position: 'absolute',
          left: 0,
        },

        theme.settings.contrast.enable &&
          !noContrast && {
            '.u-contrast &': {
              background: theme.contrast.base,
              color: theme.color.primary.base,
            },
          },
      ],

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
  noContrast = false,
}) => ({
  '> li': [
    {
      display: 'block',
      position: 'relative',
      paddingLeft: theme.space.base + circleSize,

      '&::before': [
        {
          content: "''",
          position: 'absolute',
          left: 0,
          display: 'inline-block',
          width: circleSize,
          height: circleSize,
          borderRadius: theme.borderRadius.rounded,
          border: '1px solid',
          borderColor: fill,
        },

        theme.settings.contrast.enable &&
          !noContrast && {
            '.u-contrast &': {
              borderColor: theme.contrast.border,
            },
          },
      ],

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
