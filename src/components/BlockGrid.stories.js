import { storiesOf } from '@storybook/react';

import { BlockGrid, ListItem } from '.';
import ExampleFill from '../../.storybook/components/ExampleFill';

storiesOf('Components|Block Grid', module)
  .add(
    'Overview',
    () => (
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
    ),
    {
      notes: `Block Grids allow us to evenly split list items within a grid by
      specifying the number of items per row. Block Grids inherently add a
      negative left and right offset so it is flush with the edge of the column
      it is in.

      > There should be no whitespace modifiers attached to the \`<Row />\` component
        or its direct child - \`<RowColumn />\`. You can attach them on adjacent DOM or by
        wrapping the component.`,
    }
  )
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
