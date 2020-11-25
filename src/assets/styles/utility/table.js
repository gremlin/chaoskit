export const styles = (theme) => ({
  // 1. Remove spacing between table cells.
  // 2. Block element behavior
  // 3. Style
  table: [
    {
      // 1
      borderCollapse: 'collapse',
      borderSpacing: 0,
      textIndent: 0,
      // 2
      width: '100%',
      // 3
      marginBottom: theme.space.base,
      captionSide: 'bottom',
      tableLayout: 'auto',
    },

    theme.settings.contrast.enable &&
      theme.settings.contrast.table && {
        '.u-contrast &': {
          borderColor: theme.contrast.base,
        },
      },
  ],

  thead: {
    th: [
      {
        verticalAlign: 'bottom',
        fontWeight: theme.fontWeight.bold,
        textAlign: 'center',
      },
    ],
  },

  'th, td': [
    {
      paddingTop: theme.space.small,
      paddingBottom: theme.space.small,
      paddingLeft: theme.space.base,
      paddingRight: theme.space.base,
    },

    theme.settings.contrast.enable &&
      theme.settings.contrast.table && {
        '.u-contrast &': {
          borderColor: theme.contrast.base,
        },
      },
  ],

  td: [
    {
      verticalAlign: 'top',
      border: theme.border.base,
    },

    theme.settings.contrast.enable &&
      theme.settings.contrast.table && {
        '.u-contrast &': {
          borderColor: theme.contrast.base,
        },
      },
  ],

  'caption, tfoot': [
    {
      padding: theme.space.small,
      fontSize: theme.fontSize.small,
      color: theme.fontColor.muted,
    },

    theme.settings.contrast.enable &&
      theme.settings.contrast.table && {
        '.u-contrast &': {
          color: theme.contrast.muted,
        },
      },
  ],
})
