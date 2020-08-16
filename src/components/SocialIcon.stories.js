import SocialIcon from './SocialIcon'

export default {
  title: 'Components/Social Icon',
  component: SocialIcon,
  args: {
    service: 'twitter',
    url: 'https://twitter.com/gremlininc',
  },
}

const Story = (args) => <SocialIcon {...args} />

export const Overview = Story.bind({})
