import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Checkbox from './Checkbox'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox',
    name: 'checkbox',
    value: 'value',
  },
  argTypes: { onChange: { action: 'Toggled' } },
}

const Story = (args) => <Checkbox {...args} />

export const Overview = Story.bind({})

export const Contrast = Story.bind({})

Contrast.decorators = [
  (Example) => (
    <ContrastWrapper>
      <Example />
    </ContrastWrapper>
  ),
]
