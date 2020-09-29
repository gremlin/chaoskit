module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    'emotion',
    'prettier',
    'import',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // @NOTE https://github.com/prettier/eslint-plugin-prettier/issues/65
    // "arrow-body-style": ["error", "as-needed"],
    'no-param-reassign': 0,
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/no-named-as-default': 'off',
    'max-len': [0],
    'react/forbid-prop-types': 0,
    'react/jsx-indent': 1,
    'react/jsx-filename-extension': 0,
    'react/no-danger': 0,
    'react/no-find-dom-node': 0,
    'react/no-unused-prop-types': 1,
    'react/prefer-stateless-function': 1,
    'react/require-default-props': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/react-in-jsx-scope': 'off',
    'react/forbid-foreign-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/no-access-state-in-setstate': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'prettier/prettier': 'error',
  },
}
