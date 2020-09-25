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

export const Contrast = Story.bind({})
