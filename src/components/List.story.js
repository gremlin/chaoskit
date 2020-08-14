import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import List from './List'
import ListItem from './ListItem'

export default {
  title: 'Components/List',
  component: List,
}

const Story = (args) => (
  <List {...args}>
    <ListItem>List item 1</ListItem>
    <ListItem>List item 2</ListItem>
  </List>
)

export const Overview = Story.bind({})

export const Contrast = Story.bind({})

Contrast.decorators = [(story) => <ContrastWrapper>{story()}</ContrastWrapper>]
