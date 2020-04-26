import Inline from './Inline'
import ListItem from './ListItem'
import SocialIcon from './SocialIcon'

export default {
  title: 'Components/Social Icon',
  component: SocialIcon,
}

export const Overview = () => (
  <Inline>
    <ListItem>
      <SocialIcon service="twitter" url="https://twitter.com" />
    </ListItem>
    <ListItem>
      <SocialIcon service="facebook" url="https://facebook.com" />
    </ListItem>
    <ListItem>
      <SocialIcon service="instagram" url="https://instagram.com" />
    </ListItem>
    <ListItem>
      <SocialIcon service="youtube" url="https://youtube.com" />
    </ListItem>
    <ListItem>
      <SocialIcon service="linkedin" url="https://linkedin.com" />
    </ListItem>
  </Inline>
)
