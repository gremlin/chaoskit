/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// The following two functions are used to trigger a specific class used to attach the `scroll-behavior` modifier; to avoid unecessary smooth-scrolling to the top of the page between routes
exports.onPreRouteUpdate = () => {
  document.documentElement.classList.remove('is-loaded');
};

exports.onRouteUpdate = () => {
  document.documentElement.classList.add('is-loaded');
};
