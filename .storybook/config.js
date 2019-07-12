import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import { ThemeProvider } from 'emotion-theming';
import { CacheProvider, Global } from '@emotion/core';
import createCache from '@emotion/cache';
import 'what-input';

import { theme } from '../src/assets/styles/theme';
import { fonts } from '../src/assets/styles/fonts';
import { globalStyles } from '../src/assets/styles/global';

// @TODO Potentially make this exportable or bring in from another spot
const ckCache = createCache({
  key: 'ck',
  // Only prefix the following style properties
  prefix: key => {
    switch (key) {
      case 'appearance':
      case 'box-decoration-break':
      case 'mask-border-outset':
      case 'mask-border-repeat':
      case 'mask-border-slice':
      case 'mask-border-source':
      case 'mask-border-width':
      case 'mask-border':
      case 'mask-clip':
      case 'mask-composite':
      case 'mask-image':
      case 'mask-origin':
      case 'mask-position':
      case 'mask-repeat':
      case 'mask-size':
      case 'mask':
      case 'text-emphasis-color':
      case 'text-emphasis-position':
      case 'text-emphasis-style':
      case 'text-emphasis':
        return true;
      default:
        return false;
    }
  },
  // stylisPlugins: [stylisCalc],
});

//
// Parameters
//

addParameters({
  options: {
    brandName: 'ChaosKit',
    brandUrl: 'https://www.github.com/gremlin/chaoskit',
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
  },
});

//
// Decorators
//

addDecorator(
  withInfo({
    header: false,
  })
);
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(story => (
  <CacheProvider value={ckCache}>
    <ThemeProvider theme={theme}>
      <Global styles={[globalStyles(theme), fonts(theme)]} />
      <div
        css={{
          padding: theme.space.base,
        }}
      >
        {story()}
      </div>
    </ThemeProvider>
  </CacheProvider>
));

//
// Load stories
//

const req = require.context('../src/components/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
