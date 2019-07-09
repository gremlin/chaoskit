export const styles = (theme, StylesGlobalVariables) => {
  const colors =
    theme.settings.prism.theme === 'light'
      ? {
          background: StylesGlobalVariables.code.background,
          base: theme.fontColor.base,
          noLanguage: StylesGlobalVariables.code.color,
          comment: 'slategray',
          punctuation: '#999',
          property: '#905',
          selector: '#690',
          operator: '#a67f59',
          atrule: '#07a',
          function: '#dd4a68',
          regex: '#e90',
        }
      : {
          background: '#282c34',
          base: '#abb2bf',
          noLanguage: StylesGlobalVariables.code.color,
          comment: '#5c6370',
          punctuation: '#abb2bf',
          property: '#d19a66',
          selector: '#d19a66',
          operator: '#56b6c2',
          atrule: '#c678dd',
          function: '#61afef',
          regex: '#c678dd',
        };

  return [
    {
      'code[class*="language-"], pre[class*="language-"]': {
        color: colors.base,
        fontFamily: theme.fontFamily.code,
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        wordWrap: 'normal',
        lineHeight: theme.lineHeight.base,
        tabSize: '4',
        hyphens: 'none',
        border: theme.settings.prism.theme === 'dark' && 0,
      },

      // Code blocks
      'pre[class*="language-"]': {
        padding: theme.space.base,
        overflow: 'auto',
        background: colors.background,
      },

      // Inline code
      ':not(pre) > code[class*="language-"]': [
        {
          whiteSpace: 'normal',
          color: colors.noLanguage,
        },

        theme.settings.prism.theme === 'dark' && {
          background: theme.contrast.base,
        },
      ],

      '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
        color: colors.comment,
      },

      '.token.punctuation': {
        color: colors.punctuation,
      },

      '.namespace': {
        opacity: 0.7,
      },

      '.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted': {
        color: colors.property,
      },

      '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
        color: colors.selector,
      },

      '.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string': {
        color: colors.operator,
      },

      '.token.atrule, .token.attr-value, .token.keyword': {
        color: colors.atrule,
      },

      '.token.function': {
        color: colors.function,
      },

      '.token.regex, .token.important, .token.variable': {
        color: colors.regex,
      },

      '.token.important, .token.bold': {
        fontWeight: theme.fontWeight.bold,
      },

      '.token.italic': {
        fontStyle: 'italic',
      },

      '.token.entity': {
        cursor: 'help',
      },

      'pre.line-numbers': {
        position: 'relative',
        paddingLeft: '3.8em',
        counterReset: 'linenumber',
      },

      'pre.line-numbers > code': {
        position: 'relative',
      },

      '.line-numbers .line-numbers-rows': {
        position: 'absolute',
        pointerEvents: 'none',
        top: '0',
        fontSize: '100%',
        left: '-3.8em',
        width: '3em ', // Works for line-numbers below 1000 lines
        letterSpacing: '-1px',
        borderRight: `1px solid ${
          theme.settings.prism.theme === 'light'
            ? theme.fontColor.muted
            : theme.contrast.muted
        }`,
        userSelect: 'none',
      },

      '.line-numbers-rows > span': {
        pointerEvents: 'none',
        display: 'block',
        counterIncrement: 'linenumber',
      },

      '.line-numbers-rows > span::before': {
        content: 'counter(linenumber)',
        color:
          theme.settings.prism.theme === 'light'
            ? theme.fontColor.muted
            : theme.contrast.muted,
        display: 'block',
        paddingRight: '0.8em',
        textAlign: 'right',
      },
    },
  ];
};
