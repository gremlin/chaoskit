import React from 'react';

import FoundationLayout from '../layouts/Foundation';
import { Icon, Inline } from '../components';
import Live from '../docs/Live';

const IconExample = `
<Inline>
  <Icon icon="arrow-up" size="small" />
  <Icon icon="arrow-right" />
  <Icon icon="arrow-down" />
  <Icon icon="arrow-left" size="large" />
</Inline>
`.trim();

const IconScope = {
  Icon,
  Inline,
};

const IconPropDescriptions = {
  size: "<code>oneOf(['small', 'large', 'xlarge'])</code>", // eslint-disable-line quotes
};

const IconDocs = () => (
  <FoundationLayout pageTitle="Icon">
    <Live
      code={IconExample}
      scope={IconScope}
      component={Icon}
      propDescriptions={IconPropDescriptions}
    />
  </FoundationLayout>
);

export default IconDocs;
