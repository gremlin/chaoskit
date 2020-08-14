import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  parameters: {
    docs: { description: { component: 'some component **markdown**' } },
  },
}

const Story = (args) => <Button {...args} />

export const Overview = Story.bind({})
