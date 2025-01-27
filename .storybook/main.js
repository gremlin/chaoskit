const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')

const prettierConfig = require('../prettier.config.js');

module.exports = {
  stories: ['../src/components/*.stories.@(js|mdx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      backgrounds: false,
      controls: { expanded: true },
    },
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    // Provide React by default (since we don't need it with Emotion)
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      })
    )

    config.module.rules[0].use[0].options.presets.push(
      require.resolve('@emotion/babel-preset-css-prop')
    )

    // Enable eslint
    config.plugins.push(
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      })
    )

    config.node = {
      module: 'empty',
      dgram: 'empty',
      dns: 'mock',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    }

    // Return the altered config
    return config
  },
}
