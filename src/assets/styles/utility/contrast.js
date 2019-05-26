import { merge } from 'lodash-es';

import { text } from '.';

export const styles = theme => ({
  '.u-contrast': {
    // Text
    color: theme.contrast.base,

    // Links
    'a:not([class]), .u-link': {
      color: theme.contrast.base,

      '&:hover, &:focus': {
        ...merge(text.underline, {
          color: theme.contrast.base,
        }),
      },
    },

    // Code
    ':not(pre) > code, :not(pre) > kbd, :not(pre) > samp': {
      color: theme.contrast.base,
      borderColor: theme.contrast.border,
      background: 'transparent',
    },

    // Headings
    'h1, h2, h3, h4, h5': {
      color: theme.contrast.base,
    },

    hr: {
      borderTopColor: theme.contrast.hr,
    },
  },
});
