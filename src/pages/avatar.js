import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import { Alert, Avatar, Inline } from '../components';
import Live from '../docs/Live';

const AvatarExample = `
<Inline>
  <Avatar />
  <Avatar name="Zach Schnackel" />
  <Avatar image="https://images.unsplash.com/photo-1543126705-599ab38c7ccf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be9f31b2aff937a5f21120cec91fe816&auto=format&fit=crop&w=1234&q=80" />
</Inline>
`.trim();

const AvatarSizeExample = `
<Inline>
  <Avatar />
  <Avatar size="large" image="https://images.unsplash.com/photo-1543126705-599ab38c7ccf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be9f31b2aff937a5f21120cec91fe816&auto=format&fit=crop&w=1234&q=80" />
</Inline>
`.trim();

const AvatarPropDescriptions = {
  size: "<code>oneOf(['default', 'large'])</code>", // eslint-disable-line single-quotes
};

const AvatarScope = {
  Avatar,
  Inline,
};

const AvatarDocs = () => (
  <BaseLayout pageTitle="Avatar">
    <p>
      Avatars provide flexible ways of adding personality to our applications.
    </p>

    <Alert type="warning" title="Note">
      <p>
        Without the <code>image</code> prop, Avatars will first attempt to
        create a monogram version based on the <code>name</code> prop;
        ultimately falling back to a generic user icon.
      </p>
    </Alert>

    <Live
      code={AvatarExample}
      scope={AvatarScope}
      component={Avatar}
      propDescriptions={AvatarPropDescriptions}
    />

    <h3>Size variations</h3>

    <Live
      code={AvatarSizeExample}
      scope={AvatarScope}
      component={Avatar}
      showDocs={false}
    />
  </BaseLayout>
);

export default AvatarDocs;
