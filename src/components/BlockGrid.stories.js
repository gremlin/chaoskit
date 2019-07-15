import { storiesOf } from '@storybook/react';

import { BlockGrid, ListItem } from '.';
import ExampleFill from '../docs/ExampleFill';

storiesOf('Components|Block Grid', module)
  .add('Overview', () => (
    <BlockGrid size={{ base: 4 }}>
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
      <ListItem>
        <ExampleFill />
      </ListItem>
      <ListItem>
        <ExampleFill />
      </ListItem>
    </BlockGrid>
  ))
  .add('Gutter Spacing', () => (
    <BlockGrid
      size={{ base: 4 }}
      gutter={{ base: 'collapse', small: 'large', medium: 'xlarge' }}
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
    </BlockGrid>
  ))
  .add('Alignment Modifiers', () => (
    <BlockGrid
      size={{ small: 2, medium: 3 }}
      css={{ justifyContent: 'flex-end' }}
    >
      <ListItem>
        <ExampleFill />
      </ListItem>
      <ListItem>
        <ExampleFill />
      </ListItem>
    </BlockGrid>
  ));
