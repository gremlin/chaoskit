module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'if',
          'else',
          'each',
          'include',
          'mixin',
          'for',
          'content',
          'return',
          'function',
          'at-root',
          'extend',
          'svg-load',
        ],
      },
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['include', 'mixin'],
      },
    ],
    'max-nesting-depth': [
      5,
      {
        ignore: ['blockless-at-rules'],
      },
    ],
    'no-descending-specificity': null,
    'string-quotes': 'single',
  },
};
