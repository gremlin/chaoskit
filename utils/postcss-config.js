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
exports.postCssPlugins = [
  pImport(),
  flexboxFixes(),
  inlineSVG({
    paths: [
      './node_modules/chaoskit/src/assets/icons/',
      './src/assets/icons/',
      './src/assets/media/',
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
