const webpack = require('webpack');

module.exports = {
  stories: ['../src/components/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async config => {
    // Provide React by default (since we don't need it with Emotion)
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      })
    );

    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
      // Emotion preset must run BEFORE reacts preset to properly convert css-prop.
      // Babel preset-ordering runs reversed (from last to first). Emotion has to be after React preset.
      require.resolve('@emotion/babel-preset-css-prop'),
    ];

    /**
     * Custom plugins
     */

    /*
    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve('@babel/plugin-proposal-class-properties'),
    ];
    */

    // Enable eslint
    config.module.rules.push({
      test: /\.jsx?$/,
      exclude: /(node_modules|cache)/,
      use: [
        {
          loader: 'eslint-loader',
        },
      ],
    });

    config.node = {
      module: 'empty',
      dgram: 'empty',
      dns: 'mock',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    };

    // Return the altered config
    return config;
  },
};
