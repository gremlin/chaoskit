import ControlLabel from './ControlLabel'
import ControlWrapper from './ControlWrapper'
import Input from './Input'

export default {
  title: 'Forms/ControlWrapper',
  component: ControlWrapper,
}

const Story = (args) => (
  <ControlWrapper {...args}>
    <ControlLabel>Hello there this is a very long label</ControlLabel>
    <Input name="test" />
  </ControlWrapper>
)

export const Overview = Story.bind({})
