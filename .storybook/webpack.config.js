const webpack = require('webpack');

module.exports = ({ config }) => {
  // Provide React by default (since we don't need it with Emotion)
  config.plugins.push(
    new webpack.ProvidePlugin({
      React: 'react',
    })
  );

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

  // @NOTE Breaks build currently
  // config.module.rules.push({
  //   test: /\.stories\.jsx?$/,
  //   loaders: [require.resolve('@storybook/addon-storysource/loader')],
  //   enforce: 'pre',
  // });

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
};
