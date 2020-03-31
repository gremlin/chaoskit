import uuid from '@lukeed/uuid'

/**
 * Used for more performant scroll listeners
 * Example: window.addEventListener('scroll', throttleScroll(() => console.log('PERFORMANCE!')));
 *
 * @param  {function} action
 * @return {function}
 */
export function throttleScroll(action) {
  let isRunning = false
  // eslint-disable-next-line func-names
  return function () {
    if (isRunning) return
    isRunning = true
    window.requestAnimationFrame(() => {
      action()
      isRunning = false
    })
  }
}

// @NOTE Wrapper function to not break existing functionality elsewhere
export function generateUUID() {
  return uuid()
}

/**
 * Check for touch screen capability
 * @SOURCE https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript/4819886#4819886
 *
 * @return {Boolean} [description]
 */
export function isTouchDevice() {
  return 'ontouchstart' in document.documentElement
}
