import React from 'react';

import FoundationLayout from '../layouts/Foundation';
import { Badge, Inline } from '../components';
import Live from '../docs/Live';

const BadgeExample = `
<Inline>
  <Badge label="Default badge" />
  <Badge label="Primary badge" type="primary" />
  <Badge label="Danger badge" type="danger" />
</Inline>
`.trim();

const BadgeRoundedExample = `
<Inline>
  <Badge rounded label="Default badge" />
  <Badge rounded label="Primary badge" type="primary" />
  <Badge rounded label="Danger badge" type="danger" />
</Inline>
`.trim();

const BadgePropDescriptions = {
  type: "<code>oneOf(['primary', 'danger'])</code>", // eslint-disable-line single-quotes
};

const BadgeScope = {
  Badge,
  Inline,
};

const BadgeDocs = () => (
  <FoundationLayout pageTitle="Badge">
    <p>
      Badges are indicators and have no interactivity. They are used to indicate
      an item&apos;s current state.
    </p>

    <Live
      code={BadgeExample}
      scope={BadgeScope}
      component={Badge}
      propDescriptions={BadgePropDescriptions}
    />

    <h3>Rounded Badges</h3>

    <Live
      code={BadgeRoundedExample}
      scope={BadgeScope}
      component={Badge}
      showDocs={false}
    />
  </FoundationLayout>
);

export default BadgeDocs;
