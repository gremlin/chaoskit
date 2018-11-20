import React from 'react';

import FoundationLayout from '../layouts/Foundation';
import { Alert, Button, Icon, Inline, List, ListItem } from '../components';
import Live from '../docs/Live';

const ButtonDocs = () => {
  const ButtonExample = `
  <Fragment>
    <Inline>
      <Button>Blank</Button>
      <Button type="default">Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="danger">Danger</Button>
      <Button type="outlinePrimary">Primary Outline</Button>
      <Button type="reset" className="u-link">Reset</Button>
    </Inline>
  </Fragment>
  `.trim();

  const ButtonSizeExample = `
  <Fragment>
    <Inline>
      <Button type="primary">Primary</Button>
      <Button size="small" type="secondary">Secondary</Button>
      <Button size="xsmall" type="danger">Danger</Button>
    </Inline>
  </Fragment>
  `.trim();

  const ButtonIconExample = `
  <Fragment>
    <Inline>
      <Button type="primary" iconOnly><Icon icon="download" /></Button>
      <Button size="xsmall" type="secondary" iconOnly><Icon icon="copy" /></Button>
    </Inline>
  </Fragment>
  `.trim();

  const ButtonLoadingExample = `
  <Fragment>
    <Inline>
      <Button type="default" loading>Default</Button>
      <Button size="small" type="primary" loading>Primary</Button>
      <Button size="xsmall" type="secondary" iconOnly loading><Icon icon="download" /></Button>
    </Inline>
  </Fragment>
  `.trim();

  const ButtonContrastExample = `
  <Fragment>
    <div className="u-pa--large u-bgPrimary u-contrast">
      <Inline>
        <Button>Blank</Button>
        <Button type="default">Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="secondary" noContrast>Secondary</Button>
      </Inline>
    </div>
  </Fragment>
  `.trim();

  const ButtonScope = {
    Button,
    Icon,
    Inline,
  };

  const ButtonPropDescriptions = {
    type: "<code>oneOf(['reset', 'default', 'primary', 'secondary', 'danger', 'chaosMonkey', 'outlinePrimary'])</code>", // eslint-disable-line single-quotes
    size: "<code>oneOf(['xsmall', 'small'])</code>", // eslint-disable-line single-quotes
  };

  return (
    <FoundationLayout pageTitle="Button">
      <Live
        code={ButtonExample}
        scope={ButtonScope}
        component={Button}
        propDescriptions={ButtonPropDescriptions}
      />
      <Alert type="warning" title="Notes">
        <List type={['number', 'space']}>
          <ListItem>
            <code>type=&quot;reset&quot;</code> is used for elements that have no direct path attached to them; to ensure we keep our markup semantic and accessible.
          </ListItem>
          <ListItem>
            When aligning buttons next to each other, consider using the <a href="/inline/">Inline</a> component for proper horizontal and vertical spacing.
          </ListItem>
        </List>
      </Alert>

      <h3>Size variations</h3>
      <Live
        code={ButtonSizeExample}
        scope={ButtonScope}
        component={Button}
        showDocs={false}
      />

      <h3>Icon only</h3>
      <p>Icon buttons only contain a single icon and can be used to indicate shortcuts. Icons are automatically sized based on the button size modifier provided.</p>
      <Live
        code={ButtonIconExample}
        scope={ButtonScope}
        component={Button}
        showDocs={false}
      />

      <h3>Loading state</h3>
      <p>Bundling the <a href="/loader/">Loader</a> component; we can provide more tactile feedback to users while fetching remote data.</p>
      <Live
        code={ButtonLoadingExample}
        scope={ButtonScope}
        component={Button}
        showDocs={false}
      />

      <h3>Contrast</h3>
      <p>The Button component automatically adapts to parent containers containing <code>.u-contrast</code>.</p>
      <Live
        code={ButtonContrastExample}
        scope={ButtonScope}
        component={Button}
        showDocs={false}
      />
      <Alert type="warning" title="Note">
        <p>If you&apos;d like to override the contrast styles for a given button, you can apply the <code>noContrast</code> prop.</p>
      </Alert>

    </FoundationLayout>
  );
};

export default ButtonDocs;
