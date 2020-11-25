import ContrastWrapper from '../../.storybook/components/ContrastWrapper'
import { Search } from '../assets/icons'

import Input from './Input'

export default {
  title: 'Forms/Input',
  component: Input,
  args: {
    label: 'Form label',
    name: 'input',
    explanationMessage: 'Explanation message',
    placeholder: 'Placeholder',
    prefixIcon: <Search />,
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
