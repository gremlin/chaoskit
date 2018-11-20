import React from 'react';

import FoundationLayout from '../layouts/Foundation';
import { Alert, Loader, Inline } from '../components';
import Live from '../docs/Live';

const LoaderExample = `
<Loader />
`.trim();

const LoaderExampleManipulate = `
<Inline>
  <Loader className="u-textFluid--h1-h2 u-textPrimary" />
  <Loader className="u-textLarge u-textDanger" />
</Inline>
`.trim();

const LoaderScope = {
  Loader,
  Inline,
};

const LoaderDocs = () => (
  <FoundationLayout pageTitle="Loader">
    <p>While no one likes to wait; great things come to those that do. For those times, a loader is available to notify users some magic is happening behind the scenes.</p>

    <Live
      code={LoaderExample}
      scope={LoaderScope}
      component={Loader}
      showDocs={false}
    />

    <h3>Manipulating Loaders</h3>
    <p>Loaders are just as maluable as any piece of text; with both their size and color inheritting from its own, or parent selectors.</p>
    <Live
      code={LoaderExampleManipulate}
      scope={LoaderScope}
      component={Loader}
      showDocs={false}
    />

    <Alert type="warning" title="🕵️ Did you know?‍">
      <p>The Loader component is re-used within the <a href="/button/">Button</a> component via its <code>loading</code> prop.</p>
    </Alert>
  </FoundationLayout>
);

export default LoaderDocs;
