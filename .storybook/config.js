import { addDecorator, addParameters, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withPropsTable } from 'storybook-addon-react-docgen';

import ExampleFill from './components/ExampleFill';
import Wrapper from '../src/helpers/Wrapper';

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
  withPropsTable({
    propTablesExclude: [ExampleFill],
  })
);
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(story => (
  <Wrapper>
    <div
      css={theme => ({
        padding: theme.space.base,
      })}
    >
      {story()}
    </div>
  </Wrapper>
));

//
// Load stories
//

const req = require.context('../src/components/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
