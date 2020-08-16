import ExampleFill from '../../.storybook/components/ExampleFill'

import Row from './Row'
import RowColumn from './RowColumn'

export default {
  title: 'Components/Row',
  component: Row,
  subcomponents: { RowColumn },
  args: {
    gutter: { base: 'base' },
  },
  parameters: {
    docs: {
      description: {
        component: `We use a 12-column grid with a default grid-gutter of \`16px\`. Columns that add-up to more than 12 automatically get some space in-between. So you can use grids for dayz 'yo.

There should be no whitespace modifiers attached to the \`<Row />\` component or its direct children`,
      },
    },
  },
}

const Story = (args) => (
  <Row {...args}>
    <RowColumn size={{ base: 3 }}>
      <ExampleFill />
    </RowColumn>
    <RowColumn size={{ base: 4 }}>
      <ExampleFill />
    </RowColumn>
    <RowColumn size={{ base: 5 }}>
      <ExampleFill />
    </RowColumn>
    <RowColumn size={{ base: 6 }}>
      <ExampleFill />
    </RowColumn>
    <RowColumn size={{ base: 6 }}>
      <ExampleFill />
    </RowColumn>
    <RowColumn size={{ base: 8 }}>
      <ExampleFill />
    </RowColumn>
    <RowColumn size={{ base: 4 }}>
      <ExampleFill />
    </RowColumn>
  </Row>
)

export const Overview = Story.bind({})
