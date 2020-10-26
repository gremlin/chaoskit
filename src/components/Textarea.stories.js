import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Textarea from './Textarea'

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  args: {
    label: 'Form label',
    name: 'textarea',
    placeholder: 'Message',
    validationMessage: 'Validation message',
    explanationMessage: 'Explanation message',
  },
}

const Story = (args) => <Textarea {...args} />

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
