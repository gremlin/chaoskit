/**
 * Loop over DOM nodes
 * @param  {array}   array
 * @param  {function} callback
 * @param  {scope}   scope
 * @return {void}
 */
export function forEach(array, callback, scope) {
  for (let i = 0, { length } = array; i < length; i += 1) {
    callback.call(scope, i, array[i]);
  }
}

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
  return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateUUID); // eslint-disable-line
}

/**
 * Get unique items in array by value
 *
 * @param  {array} array
 * @param  {string} propertyName
 * @return {array}
 */
export function unique(array, propertyName) {
  return array.filter((e, i) => array.findIndex(a => a[propertyName] === e[propertyName]) === i);
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 *
 * @param  {integer} min
 * @param  {integer} max
 * @return {integer}
 */
export function getRandomInteger(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Determine if link is external
 *
 * @param  {string}  url
 * @return {Boolean}
 */
export function isExternalUrl(url) {
  return !/^\/(?!\/)/.test(url);
}

/**
 * Make sure all internal links end with `/` to match directory structure
 *
 * @param  {string} url
 * @return {string}
 */
export function directoryUrl(url) {
  if (isExternalUrl(url)) return url;

  let newUrl = url;

  if (!newUrl.endsWith('/')) {
    newUrl = `${newUrl}/`;
  }

  return newUrl;
}

/**
 * Check for touch screen capability
 * @SOURCE https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript/4819886#4819886
 *
 * @return {Boolean} [description]
 */
export function isTouchDevice() {
  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  const mq = query => window.matchMedia(query).matches;

  if ((('ontouchstart' in window) || window.DocumentTouch) && document instanceof window.DocumentTouch) {
    return true;
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}

/**
 * Add-in proper punctuation for numbers
 *
 * @param  {integer} number
 * @return {string}
 */
export function formatNumber(number) {
  const parts = number.toFixed(2).toString().split('.');

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return parts.join('.');
}

export function formatNumberShorthand(number, min = 1e3) {
  // Alter numbers larger than 1k
  if (number >= min) {
    const units = ['k', 'M', 'B', 'T'];

    const order = Math.floor(Math.log(number) / Math.log(1000));

    const unitname = units[(order - 1)];
    const num = (number / (1000 ** order)).toFixed(2);

    // Output number remainder + unitname
    return num + unitname;
  }

  // return formatted original number
  return number.toLocaleString();
}
