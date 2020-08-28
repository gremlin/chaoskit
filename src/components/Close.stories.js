import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Close from './Close'

export default {
  title: 'Components/Close',
  component: Close,
}

const Story = (args) => <Close {...args} />

export const Overview = Story.bind({})

export const Contrast = Story.bind({})

Contrast.decorators = [
  (Example) => (
    <ContrastWrapper>
      <Example />
    </ContrastWrapper>
  ),
]
