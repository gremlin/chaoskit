import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Select from './Select'

export default {
  title: 'Forms/Select',
  component: Select,
  args: {
    options: [
      { value: 1, label: 'Option One' },
      { value: 'test-string', label: 'Option Two' },
      { value: 3, label: 'Option Three' },
      { value: 4, label: 'Option Four' },
    ],
    name: 'select',
    label: 'Form label',
    required: true,
    explanationMessage: 'Explanation message',
  },
  argTypes: {
    onChange: { action: 'Changed' },
    options: {
      control: {
        disable: true,
      },
    },
  },
}

const Story = (args) => <Select {...args} />

export const Overview = Story.bind({})

export const Contrast = Story.bind({})

Contrast.decorators = [
  (Example) => (
    <ContrastWrapper>
      <Example />
    </ContrastWrapper>
  ),
]
