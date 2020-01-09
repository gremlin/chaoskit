import { fluidRange } from 'polished';

// Avoid using this in SSR applications as they have trouble matching against universal selectors
// Use `.use-trimChildren` utility class instead
export const trimChildren = {
  '*': {
    '&:last-child': {
      marginBottom: '0 !important',
    },

    '> *': {
      '&:last-child': {
        marginBottom: '0 !important',
      },
    },
  },
};

export const overflow = {
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
};

export const hide = {
  // Note: The use of `clip-path` causes performance degredation on scroll events in Chrome.
  // For more information, see:
  // * h5bp/html5-boilerplate#2021
  // * zurb/foundation-sites#10914
  // * twbs/bootstrap#24906

  border: '0',
  clip: 'rect(0 0 0 0)',
  // clipPath: 'inset(50%)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
};

export const absoluteCenter = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

export const fluidSize = ({
  theme = {},
  property = 'padding',
  from = 0,
  to = 0,
  breakpointFrom = 'small',
  breakpointTo = 'large',
}) =>
  fluidRange(
    {
      prop: property,
      fromSize: `${from}px`,
      toSize: `${to}px`,
    },
    `${theme.breakpoint[breakpointFrom]}px`,
    `${theme.breakpoint[breakpointTo]}px`
  );
