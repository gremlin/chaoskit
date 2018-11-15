/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const StylelintPlugin = require('stylelint-webpack-plugin');

// Custom Webpack configuration
exports.onCreateWebpackConfig = ({
  stage,
  //rules,
  loaders,
  //plugins,
  actions,
}) => {
  if (['develop'].includes(stage)) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.js$|\.jsx$/,
            exclude: /(node_modules|cache|public)/,
            use: [
              {
                loader: 'eslint-loader',
              },
            ],
          },
        ],
      },
      plugins: [
        new StylelintPlugin({
          files: ['src/assets/styles/**/*.scss'],
          configFile: 'stylelint.config.js',
          syntax: 'scss',
          emitErrors: false,
        }),
      ],
    });
  }
};
