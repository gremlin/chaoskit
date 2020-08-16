import Tooltip from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    content: 'Hello from the tooltip!',
  },
}

const Story = (args) => (
  <Tooltip {...args}>
    <div css={{ display: 'inline-block' }}>Hover</div>
  </Tooltip>
)

export const Overview = Story.bind({})

export const Interactive = Story.bind({})

Interactive.args = {
  content: 'You can interact with me!',
  interactive: true,
}
