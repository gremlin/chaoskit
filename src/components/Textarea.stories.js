import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Textarea from './Textarea'

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  args: {
    label: 'Form label',
    name: 'textarea',
    explanationMessage: 'Explanation message',
  },
}

const Story = (args) => <Textarea {...args} />

export const Overview = Story.bind({})

export const Contrast = Story.bind({})

Contrast.decorators = [
  (Example) => (
    <ContrastWrapper>
      <Example />
    </ContrastWrapper>
  ),
]
