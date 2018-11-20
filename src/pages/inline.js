import React from 'react';

import FoundationLayout from '../layouts/Foundation';
import { Alert, Button, Inline } from '../components';
import Live from '../docs/Live';

const InlineExample = `
<Inline>
  <Button>Blank</Button>
  <Button type="default">Default</Button>
  <Button type="primary">Primary</Button>
  <Button type="secondary">Secondary</Button>
  <Button type="danger">Danger</Button>
  <Button type="outlinePrimary">Primary Outline</Button>
  <Button type="reset" className="u-link">Reset</Button>
</Inline>
`.trim();

const InlinePropDescriptions = {
  size: "<code>oneOf(['small', 'medium', 'large', 'xlarge'])</code>", // eslint-disable-line single-quotes
};

const InlineScope = {
  Button,
  Inline,
};

const InlineDocs = () => (
  <FoundationLayout pageTitle="Inline">
    <p>Sometimes your content doesn&apos;t belong in a grid system. So, for when you have more &quot;free-form&quot; content that you&apos;d like proper spacing horizontally and vertically when they stack, we created the Inline component. You can modify alignment by using our <a href="/flex/">Flex</a> utilities.</p>

    <Live
      code={InlineExample}
      scope={InlineScope}
      component={Inline}
      propDescriptions={InlinePropDescriptions}
    />

    <Alert type="warning" title="Note‍">
      <p>There should be no whitespace modifiers attached to the Inline component or its direct children. You can attach them on adjacent DOM or by wrapping the component in a <code>&lt;div&gt;</code></p>
    </Alert>
  </FoundationLayout>
);

export default InlineDocs;
