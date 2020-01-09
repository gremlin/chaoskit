import { storiesOf } from '@storybook/react';

import { Inline, SocialIcon } from '.';
import ListItem from './ListItem';

storiesOf('Components|Social Icon', module).add('Overview', () => (
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
));
