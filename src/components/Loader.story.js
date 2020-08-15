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

export const Overview = () => <Loader />
