import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Live from '../docs/Live';
import { CheckboxGroup, Checkbox } from '../components';

const CheckboxExample = `
class Example extends React.Component {
  handleChange = (name, value, checked) => {
    console.log(name, value, checked);
  }

  render() {
    return (
      <CheckboxGroup label="Checkboxes">
        <Checkbox name="example" onChange={this.handleChange} label="Test" value="test_value" />
      </CheckboxGroup>
    );
  }
}
`.trim();

const CheckboxScope = {
  React,
  CheckboxGroup,
  Checkbox,
};

const CheckboxPropDescriptions = {};

const CheckboxDocs = () => (
  <BaseLayout pageTitle="Checkbox">
    <Live
      code={CheckboxExample}
      scope={CheckboxScope}
      component={Checkbox}
      propDescriptions={CheckboxPropDescriptions}
    />
  </BaseLayout>
);

export default CheckboxDocs;
