import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import './stories/Intro';

//
// Import styles
//

import '../src/assets/styles/site.scss';

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
  }),
);
addDecorator(withKnobs);
addDecorator(story => <div className="docs__root">{story()}</div>);
addDecorator(centered);

//
// Load stories
//

const req = require.context('../src/components/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
