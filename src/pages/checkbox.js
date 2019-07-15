import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Docs from '../docs/Docs';
import Live from '../docs/Live';
import { CheckboxGroup, Checkbox } from '../components';

const CheckboxExample = `
() => {
  const handleChange = ({target: { name, value, checked } }) => {
    console.log(name, value, checked);
  };

  return (
    <CheckboxGroup label="Checkboxes">
      <Checkbox name="example" onChange={handleChange} label="Test" value="test_value" />
    </CheckboxGroup>
  )
}`.trim();

const CheckboxScope = {
  React,
  CheckboxGroup,
  Checkbox,
};

const CheckboxPropDescriptions = {};

const CheckboxDocs = () => (
  <BaseLayout pageTitle="Checkbox">
    <h3>CheckboxGroup</h3>
    <Docs component={CheckboxGroup} />
    <h3>Checkbox</h3>
    <Live
      code={CheckboxExample}
      scope={CheckboxScope}
      component={Checkbox}
      propDescriptions={CheckboxPropDescriptions}
    />
  </BaseLayout>
);

export default CheckboxDocs;
