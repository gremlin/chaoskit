const webpack = require('webpack')

const prettierConfig = require('../prettier.config.js')

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

    // Add SVGR Loader
    // ========================================================
    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'))

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    }

    // Merge our rule with existing assetLoader rules
    config.module.rules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            ref: true,
            icon: true
          },
        },
        assetLoader,
      ],
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
