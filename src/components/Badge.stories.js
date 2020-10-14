import Badge from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    children: 'Badge',
  },
}

const Story = (args) => <Badge {...args} />

export const Overview = Story.bind({})
