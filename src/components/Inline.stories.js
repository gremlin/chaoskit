import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import { Inline } from '.';
import ExampleFill from '../../.storybook/components/ExampleFill';
import ListItem from './ListItem';

storiesOf('Components|Inline', module).add(
  'Overview',
  () => (
    <Inline
      size={select(
        'Size',
        ['small', 'base', 'medium', 'large', 'xlarge'],
        'base'
      )}
      wrap={boolean('Wrap', true)}
    >
      <ListItem>
        <ExampleFill />
      </ListItem>
      <ListItem>
        <ExampleFill />
      </ListItem>
      <ListItem>
        <ExampleFill />
      </ListItem>
      <ListItem>
        <ExampleFill />
      </ListItem>
      <ListItem>
        <ExampleFill />
      </ListItem>
    </Inline>
  ),
  {
    notes: `Sometimes your content doesn&apos;t belong in a grid system. So, for when
      you have more "free-form" content that you'd like proper
      spacing horizontally and vertically when they stack, we created the Inline
      component. You can modify alignment by using flexbox properties.

      > Only \`<ListItem />\` should be used as a child component.`,
  }
);
