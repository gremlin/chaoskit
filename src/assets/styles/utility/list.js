import { tint } from 'polished';

export const reset = () => ({
  listStyle: 'none',
  paddingLeft: 0,
  display: 'grid',
  gridTemplateColumns: 'minmax(auto, 1fr)',
});

export const numbers = ({ theme = {}, fill = theme.color.primary.base }) => ({
  counterReset: 'list-counter',

  '> li': {
    listStyle: 'none',

    '&::before': {
      content: 'counter(list-counter, decimal)',
      counterIncrement: 'list-counter',
      marginRight: theme.space.base,
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
        top: `${(fontSize * theme.lineHeight.base - circleSize) / 2}px`,
      },

      '&:not(:first-of-type)::before': {
        top: `${(fontSize * theme.lineHeight.base - circleSize) / 2 +
          (border && space)}px`,
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
