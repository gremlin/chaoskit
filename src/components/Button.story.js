import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Button from './Button'
import Icon from './Icon'

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
  children: <Icon icon="check" />,
}

IconOnly.argTypes = {
  children: {
    control: {
      type: null,
    },
  },
}

export const Contrast = Story.bind({})

Contrast.decorators = [(story) => <ContrastWrapper>{story()}</ContrastWrapper>]
