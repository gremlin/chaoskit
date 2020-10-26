import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Input from './Input'

export default {
  title: 'Forms/Input',
  component: Input,
  args: {
    label: 'Form label',
    name: 'input',
    validationMessage: 'Validation message',
    explanationMessage: 'Explanation message',
    placeholder: 'Placeholder',
  },
}

const Story = (args) => <Input {...args} />

export const Overview = Story.bind({})

export const FloatingLabel = Story.bind({})

FloatingLabel.args = {
  label: null,
  floatingLabel: true,
}

export const Contrast = Story.bind({})

Contrast.decorators = [
  (Example) => (
    <ContrastWrapper>
      <Example />
    </ContrastWrapper>
  ),
]

export const ContrastFloatingLabel = Story.bind({})

ContrastFloatingLabel.args = {
  label: null,
  floatingLabel: true,
}

ContrastFloatingLabel.decorators = [
  (Example) => (
    <ContrastWrapper>
      <Example />
    </ContrastWrapper>
  ),
]
