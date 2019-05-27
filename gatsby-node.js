/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Custom Webpack configuration
exports.onCreateWebpackConfig = ({
  stage,
  // rules,
  loaders,
  // plugins,
  actions,
}) => {
  if (['develop'].includes(stage)) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|cache|public)/,
            use: [
              {
                loader: 'eslint-loader',
              },
              {
                loader: 'stylelint-custom-processor-loader',
              },
            ],
          },
        ],
      },
    });
  }

  // Get around certain 3rd party modules that define `window`
  // https://next.gatsbyjs.org/docs/debugging-html-builds/#debugging-html-builds
  if (stage.includes('html')) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scriptjs/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
