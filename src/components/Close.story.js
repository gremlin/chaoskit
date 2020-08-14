import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Close from './Close'

export default {
  title: 'Components/Close',
  component: Close,
  argTypes: { onClick: { action: 'Clicked' } },
}

const Story = (args) => <Close {...args} />

export const Overview = Story.bind({})

export const Contrast = Story.bind({})

Contrast.decorators = [(story) => <ContrastWrapper>{story()}</ContrastWrapper>]
