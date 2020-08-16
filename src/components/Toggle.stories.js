import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Toggle from './Toggle'

export default {
  title: 'Forms/Toggle',
  component: Toggle,
  args: {
    label: 'Form label',
    name: 'toggle',
    value: 'value',
  },
  argTypes: { onChange: { action: 'Toggled' } },
}

const Story = (args) => <Toggle {...args} />

export const Overview = Story.bind({})

export const Contrast = Story.bind({})

Contrast.decorators = [
  (Example) => (
    <ContrastWrapper>
      <Example />
    </ContrastWrapper>
  ),
]
