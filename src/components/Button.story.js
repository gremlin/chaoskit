import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
}

const Story = (args) => <Button {...args} />

export const Overview = Story.bind({})
