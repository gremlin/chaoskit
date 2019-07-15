import { storiesOf } from '@storybook/react';

import { Inline, SocialIcon } from '.';

storiesOf('Components|Social Icon', module).add('Overview', () => (
  <Inline>
    <SocialIcon service="twitter" url="https://twitter.com" />
    <SocialIcon service="facebook" url="https://facebook.com" />
    <SocialIcon service="instagram" url="https://instagram.com" />
    <SocialIcon service="youtube" url="https://youtube.com" />
    <SocialIcon service="linkedin" url="https://linkedin.com" />
  </Inline>
));
