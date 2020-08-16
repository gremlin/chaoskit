import ExampleFill from '../../.storybook/components/ExampleFill'

import BlockGrid from './BlockGrid'
import ListItem from './ListItem'

export default {
  title: 'Components/Block Grid',
  component: BlockGrid,
  subcomponents: { ListItem },
  args: {
    size: { base: 4 },
    gutter: { base: 'base' },
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Block Grids allow us to evenly split list items within a grid by specifying the number of items per row. Block Grids inherently add a negative left and right offset so it is flush with the edge of the column it is in.

There should be no whitespace modifiers attached to the \`<BlockGrid />\` component or its direct children.

\`<ListItem />\` should always be the wrapper of any child component.`,
      },
    },
  },
}

const Story = (args) => (
  <BlockGrid {...args}>
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
)

// @TODO For docs
//
//

export const Overview = Story.bind({})
