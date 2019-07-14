import { createPlugin } from 'docz-core';
import webpack from 'webpack';

export default {
  title: 'ChaosKit',
  description:
    'ChaosKit is a lightweight and modular front-end framework for developing fast and powerful web interfaces within Gremlin.',
  wrapper: 'src/docs/Wrapper',
  codeSandbox: false,
  modifyBundlerConfig: config => {
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

    config.node = {
      module: 'empty',
      dgram: 'empty',
      dns: 'mock',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    };

    return config;
  },

  plugins: [
    createPlugin({
      modifyBabelRc(babelrc) {
        return {
          ...babelrc,
          plugins: [
            ...babelrc.plugins,
            [
              '@babel/plugin-transform-react-jsx',
              { pragma: '___EmotionJSX', pragmaFrag: 'React.Fragment' },
            ],
          ],
        };
      },
    }),
  ],
};
