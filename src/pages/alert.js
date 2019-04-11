import React, { useState } from 'react';

import BaseLayout from '../layouts/BaseLayout';
import { Alert, Button } from '../components';
import Live from '../docs/Live';

const AlertExample = `
() => {
  const [isCollapsed, setCollapse] = useState(false);

  return (
    <Fragment>
      <div><Button className="u-link" onClick={() => setCollapse(!isCollapsed)} type="reset">Toggle Alert</Button></div>
      <Alert
        collapse={isCollapsed}
        type="primary"
        title="Who am I making this out to?"
        close
      >
        <p>And then the battle's not so bad? What are you hacking off? Is it my torso?! 'It is!' My precious torso! I decline the title of Iron Cook and accept the lesser title of Zinc Saucier, which I just made up. Uhh… also, comes with double prize money.</p>
      </Alert>
    </Fragment>
  )
}`.trim();

const AlertPropDescriptions = {
  type: "<code>oneOf(['primary', 'warning', 'danger',])</code>", // eslint-disable-line single-quotes
};

const AlertScope = {
  Alert,
  Button,
  useState,
};

const AlertDocs = () => (
  <BaseLayout pageTitle="Alert">
    <p>
      Alerts can be used to draw attention to and provide context to key page
      actions.
    </p>

    <Live
      code={AlertExample}
      scope={AlertScope}
      component={Alert}
      propDescriptions={AlertPropDescriptions}
    />
  </BaseLayout>
);

export default AlertDocs;
