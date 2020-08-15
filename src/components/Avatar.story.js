import Avatar from './Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    image: 'https://source.unsplash.com/random',
    name: 'Zach Schnackel',
    fallbackIcon: 'user-circle',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Without the `image` prop, Avatars will first attempt to create a monogram version based on the `name` prop; ultimately falling back to a generic user icon.',
      },
    },
  },
}

const Story = (args) => <Avatar {...args} />

export const Overview = Story.bind({})
