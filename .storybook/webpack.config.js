const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');

const { postCssPlugins } = require('../utils/postcss-config');

module.exports = ({ config, mode }) => {
  const isEnvProduction = mode === 'PRODUCTION';

  /*  config.module.rules.push({
    test: /\.js$|\.jsx$/,
    exclude: /(node_modules|cache|public)/,
    use: [
      {
        loader: 'eslint-loader',
      },
    ],
  });*/

  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.s(a|c)ss$/,
    loaders: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: !isEnvProduction,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: () => postCssPlugins(),
          sourceMap: !isEnvProduction,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          importLoaders: 2,
          sourceMap: !isEnvProduction,
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.plugins.push(
    new StylelintPlugin({
      files: ['./src/assets/styles/**/*.scss'],
      configFile: './stylelint.config.js',
      syntax: 'scss',
      emitErrors: false,
    }),
  );

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
