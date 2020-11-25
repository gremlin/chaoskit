import { Twitter } from '../assets/icons'

import SocialIcon from './SocialIcon'

export default {
  title: 'Components/Social Icon',
  component: SocialIcon,
  args: {
    url: 'https://twitter.com/gremlininc',
  },
}

const Story = (args) => (
  <SocialIcon {...args}>
    <Twitter />
  </SocialIcon>
)

export const Overview = Story.bind({})
