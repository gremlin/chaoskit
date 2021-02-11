import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Select from './Select'

export default {
  title: 'Forms/Select',
  component: Select,
  args: {
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

const Story = (args) => (
  <Select {...args}>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </Select>
)

export const Overview = Story.bind({})

export const Contrast = Story.bind({})

Contrast.decorators = [
  (Example) => (
    <ContrastWrapper>
      <Example />
    </ContrastWrapper>
  ),
]
