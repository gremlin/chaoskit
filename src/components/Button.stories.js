import ContrastWrapper from '../../.storybook/components/ContrastWrapper'
import { ReactComponent as CheckSvg } from '../assets/icons/check.svg'

import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    type: 'default',
  },
}

const Story = (args) => <Button {...args} />

export const Overview = Story.bind({})

export const IconOnly = Story.bind({})

IconOnly.args = {
  iconOnly: true,
  children: <CheckSvg />,
}

IconOnly.argTypes = {
  children: {
    control: {
      disable: true,
    },
  },
}

export const Contrast = Story.bind({})

Contrast.decorators = [
  (Example) => (
    <ContrastWrapper>
      <Example />
    </ContrastWrapper>
  ),
]
