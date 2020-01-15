import BlockGrid from './BlockGrid';
import ListItem from './ListItem';
import ExampleFill from '../../.storybook/components/ExampleFill';

export default {
  title: 'Components/Block Grid',
  component: BlockGrid,
};

// @TODO For docs
// Block Grids allow us to evenly split list items within a grid by specifying the number of items per row. Block Grids inherently add a negative left and right offset so it is flush with the edge of the column it is in.
// There should be no whitespace modifiers attached to the \`<Row />\` component or its direct children

export const Overview = () => (
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
);

export const GutterSpacing = () => (
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
);

export const AlignmentModifiers = () => (
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
);
