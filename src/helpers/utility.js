/**
 * Used for more performant scroll listeners
 * Example: window.addEventListener('scroll', throttleScroll(() => console.log('PERFORMANCE!')));
 *
 * @param  {function} action
 * @return {function}
 */
export function throttleScroll(action) {
  let isRunning = false;
  // eslint-disable-next-line func-names
  return function() {
    if (isRunning) return;
    isRunning = true;
    window.requestAnimationFrame(() => {
      action();
      isRunning = false;
    });
  };
}

/**
 * Taken from https://www.npmjs.com/package/uuid
 *
 * @param  {string} a
 * @return {string}
 */
export function generateUUID(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16) // eslint-disable-line no-bitwise
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateUUID); // eslint-disable-line
}

/**
 * Check for touch screen capability
 * @SOURCE https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript/4819886#4819886
 *
 * @return {Boolean} [description]
 */
export function isTouchDevice() {
  return 'ontouchstart' in document.documentElement;
}
