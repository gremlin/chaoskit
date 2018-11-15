// PostCSS processors
const pImport = require('postcss-import');
const flexboxFixes = require('postcss-flexbugs-fixes');
const autoprefixer = require('autoprefixer');
const size = require('postcss-size');
const easings = require('postcss-easings');
const gradients = require('postcss-easing-gradients');
const inlineSVG = require('postcss-inline-svg-multipath'); // Using custom package since `post-css-inline-svg` only supports one value right now https://github.com/TrySound/postcss-inline-svg/pull/38
const assets = require('postcss-assets');
const sorting = require('postcss-sorting');
const cssnano = require('cssnano');

// PostCSS config
const postCssPlugins = [
  pImport(),
  flexboxFixes(),
  inlineSVG({
    paths: [
      './src/assets/icons/',
    ],
  }),
  autoprefixer(),
  size(),
  easings(),
  gradients(),
  assets(),
  sorting(),
  cssnano({
    discardUnused: false,
    zindex: false,
    reduceIdents: false,
    mergeIdents: false,
  }),
];

module.exports = {
  siteMetadata: {
    title: 'ChaosKit',
    description: 'A lightweight and modular front-end framework for developing fast and powerful web interfaces within Gremlin',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gremlin',
        short_name: 'Gremlin',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#23c386',
        display: 'minimal-ui',
        icon: './src/assets/media/favicon-base.png',
      },
    },
  ],
};
