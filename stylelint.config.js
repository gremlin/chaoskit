module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
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
