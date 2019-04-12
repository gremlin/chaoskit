import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Live from '../docs/Live';
import { Alert, Toggle } from '../components';

const ToggleExample = `
() => {
  const handleChange = (name, value, checked) => {
    console.log(name, value, checked);
  };

  return (
    <Fragment>
      <Toggle
        name="example"
        label="Optional label"
        onChange={handleChange}
        value="example_value"
      />
      <div className="u-mt--regular u-pa--large u-bgPrimary u-contrast">
        <h4>Contrast example</h4>
        <Toggle
          name="example2"
          label="Optional label2"
          onChange={handleChange}
          value="example_value2"
        />
      </div>
    </Fragment>
  );
}
`.trim();

const ToggleScope = {
  React,
  Toggle,
};

const TogglePropDescriptions = {};

const ToggleDocs = () => (
  <BaseLayout pageTitle="Toggle">
    <Live
      code={ToggleExample}
      scope={ToggleScope}
      component={Toggle}
      propDescriptions={TogglePropDescriptions}
    />
    <Alert type="warning" title="Note">
      <p>
        Toggles automatically inherit contrast styles when placed within a
        wrapper that contains the global <code>.u-contrast</code> class.
      </p>
    </Alert>
  </BaseLayout>
);

export default ToggleDocs;
