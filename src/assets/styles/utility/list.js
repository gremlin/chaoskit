import { tint } from 'polished';

export const numbers = ({ theme = {}, fill = theme.color.primary.base }) => ({
  counterReset: 'list-counter',

  '> li': {
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: theme.space.base,

    '&::before': {
      content: 'counter(list-counter, decimal)',
      counterIncrement: 'list-counter',
      fontWeight: theme.fontWeight.bold,
      color: fill,
    },
  },
});

export const circles = ({
  theme = {},
  fill = theme.color.primary.base,
  hoverFill = false,
  fontSize = theme.fontSize.base,
  circleSize = 8,
}) => ({
  '> li': [
    {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: theme.space.base,

      '&::before': {
        content: "''",
        position: 'relative',
        display: 'inline-block',
        width: circleSize,
        height: circleSize,
        borderRadius: '50%',
        border: `1px solid ${fill}`,
      },

      '::before': {
        top: `${(fontSize * theme.lineHeight.base - circleSize) / 2}px`,
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
});
