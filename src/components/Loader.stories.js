import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Loader from './Loader'

export default {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component:
          'Loaders are just as maluable as any piece of text; with both their size and color inheritting from its own, or parent selectors.',
      },
    },
  },
}

const Story = (args) => <Loader {...args} />

export const Overview = Story.bind({})

export const Contrast = Story.bind({})

Contrast.decorators = [
  (Example) => (
    <ContrastWrapper>
      <Example />
    </ContrastWrapper>
  ),
]
