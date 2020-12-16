import { rgba } from 'polished'

const StylesTableVariables = (theme) => ({
  contrast: {
    emphasis: rgba(theme.contrast.base, 0.15),
  },
})
export const styles = (theme) => ({
  // 1. Remove spacing between table cells.
  // 2. Block element behavior
  // 3. Style
  table: [
    {
      // 1
      borderCollapse: 'collapse',
      borderSpacing: '0',
      // 2
      width: '100%',
      // 3
      marginBottom: theme.space.base,
      captionSide: 'bottom',
      border: theme.border.base,
      boxShadow: theme.boxShadow.base,
      borderRadius: theme.borderRadius.base,
      tableLayout: 'fixed',
      maxWidth: 'max-content',
      display: 'block',
      overflowX: 'auto',

      'tr:first-of-type': {
        borderTop: 0,
      },
    },

    theme.settings.contrast.enable &&
      theme.settings.contrast.table && {
        '.u-contrast &': {
          borderColor: theme.contrast.base,

          'tr:first-of-type': {
            borderColor: theme.contrast.base,
          },
        },
      },
  ],

  thead: {
    tr: [
      {
        background: theme.color.panel.base,
      },

      theme.settings.contrast.enable &&
        theme.settings.contrast.table && {
          '.u-contrast &': {
            background: StylesTableVariables(theme).contrast.emphasis,
          },
        },
    ],

    th: [
      {
        verticalAlign: 'bottom',
        fontWeight: theme.fontWeight.bold,
        lineHeight: theme.lineHeight.small,
        fontSize: theme.fontSize.small,
        textAlign: 'left',
        borderBottom: theme.border.base,

        '&:first-of-type': {
          borderTopLeftRadius: theme.borderRadius.base,
        },

        '&:last-of-type': {
          borderTopRightRadius: theme.borderRadius.base,
        },
      },
    ],
  },

  tr: [
    {
      borderTop: theme.border.base,

      '&:hover, &:focus': {
        background: theme.color.panel.base,
      },
    },

    theme.settings.contrast.enable &&
      theme.settings.contrast.table && {
        '.u-contrast &': {
          borderColor: theme.contrast.base,

          '&:hover': {
            background: StylesTableVariables(theme).contrast.emphasis,
          },
        },
      },
  ],

  'th, td': [
    {
      padding: theme.space.small + theme.space.xsmall,

      '&:last-child': {
        borderRight: 0,
      },
    },

    theme.settings.contrast.enable &&
      theme.settings.contrast.table && {
        '.u-contrast &': {
          borderColor: theme.contrast.base,
        },
      },
  ],

  td: {
    verticalAlign: 'top',
  },

  'caption, tfoot': [
    {
      padding: theme.space.small,
      fontSize: theme.fontSize.small,
      color: theme.fontColor.muted,

      'tr:first-of-type': {
        borderTop: theme.border.base,
      },
    },

    theme.settings.contrast.enable &&
      theme.settings.contrast.table && {
        '.u-contrast &': {
          color: theme.contrast.muted,

          'tr:first-of-type': {
            borderColor: theme.contrast.base,
          },
        },
      },
  ],
})
