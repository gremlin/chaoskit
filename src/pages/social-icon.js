import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import { SocialIcon, Inline } from '../components';
import Live from '../docs/Live';

const SocialIconExample = `
() => (
  <Inline>
    <SocialIcon service="twitter" url="https://twitter.com" />
    <SocialIcon service="facebook" url="https://facebook.com" />
    <SocialIcon service="instagram" url="https://instagram.com" />
    <SocialIcon service="youtube" url="https://youtube.com" />
    <SocialIcon service="linkedin" url="https://linkedin.com" />
  </Inline>
)
`.trim();

const SocialIconPropDescriptions = {};

const SocialIconScope = {
  Inline,
  SocialIcon,
};

const SocialIconDocs = () => (
  <BaseLayout pageTitle="Social Icon">
    <Live
      code={SocialIconExample}
      scope={SocialIconScope}
      component={SocialIcon}
      propDescriptions={SocialIconPropDescriptions}
    />
  </BaseLayout>
);

export default SocialIconDocs;
