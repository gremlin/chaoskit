import { Back, Expo } from 'gsap/TweenMax';

/**
 * Default configuration
 * @type {Object}
 */
export const config = {
  easing: Expo.easeInOut,
  easingBounce: Back.easeOut.config(1),
  classes: {
    required: 'is-required',
    valid: 'is-valid',
    notValid: 'is-notValid',
    open: 'is-open',
    active: 'is-active',
    hidden: 'is-hidden',
    uHidden: 'u-hidden',
    loading: 'is-loading',
    disabled: 'is-disabled',
  },
};
