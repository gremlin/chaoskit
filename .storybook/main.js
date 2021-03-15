const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')

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

    //
    // SVGR
    //

    // Remove .svgs from default loader
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg')
    )

    fileLoaderRule.exclude = /\.svg$/

    // Target svgs with fallback to file-loader
    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            ref: true,
            icon: true,
          },
        },
        'file-loader',
      ],
    })

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
