import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Radio from './Radio'

export default {
  title: 'Forms/Radio',
  component: Radio,
  args: {
    label: 'Radio',
    name: 'radio',
    value: 'value',
  },
  argTypes: { onChange: { action: 'Toggled' } },
}

const Story = (args) => <Radio {...args} />

export const Overview = Story.bind({})

export const Contrast = Story.bind({})

Contrast.decorators = [
  (Example) => (
    <ContrastWrapper>
      <Example />
    </ContrastWrapper>
  ),
]
