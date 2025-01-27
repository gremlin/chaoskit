import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Input from './Input'

export default {
  title: 'Forms/Input',
  component: Input,
  args: {
    label: 'Form label',
    name: 'input',
    explanationMessage: 'Explanation message',
    placeholder: 'Placeholder',
    required: true,
  },
}

const Story = (args) => <Input {...args} />

export const Overview = Story.bind({})

export const Contrast = Story.bind({})

Contrast.decorators = [
  (Example) => (
    <ContrastWrapper>
      <Example />
    </ContrastWrapper>
  ),
]
