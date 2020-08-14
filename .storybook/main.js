const webpack = require('webpack')

const prettierConfig = require('../prettier.config.js');

module.exports = {
  stories: ['../src/components/*.story.js'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      backgrounds: false,
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
    config.module.rules.push({
      test: /\.jsx?$/,
      exclude: /(node_modules|cache)/,
      use: [
        {
          loader: 'eslint-loader',
        },
      ],
      enforce: 'pre',
    })

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
