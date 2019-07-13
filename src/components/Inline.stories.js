import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import { Inline } from '.';
import ExampleFill from '../../.storybook/components/ExampleFill';

storiesOf('Components|Inline', module).add('Overview', () => (
  <Inline
    size={select(
      'Size',
      ['small', 'base', 'medium', 'large', 'xlarge'],
      'base'
    )}
    wrap={boolean('Wrap', true)}
  >
    <ExampleFill />
    <ExampleFill />
    <ExampleFill />
    <ExampleFill />
    <ExampleFill />
  </Inline>
));
