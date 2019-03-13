import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

//
// Import styles/fonts
//

import '../src/assets/styles/_webfonts.scss';
import '../src/assets/styles/site.scss';

//
// Parameters
//

addParameters({
  options: {
    brandName: 'ChaosKit',
  },
});

//
// Decorators
//

addDecorator(
  withInfo({
    header: false,
  }),
);
addDecorator(withKnobs);
addDecorator(centered);

//
// Load stories
//

const req = require.context('../src/components/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
