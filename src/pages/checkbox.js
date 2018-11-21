import React from 'react';

import FoundationLayout from '../layouts/Foundation';
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
  <FoundationLayout pageTitle="Checkbox">
    <h2>Checkbox</h2>
    <Live
      code={CheckboxExample}
      scope={CheckboxScope}
      component={Checkbox}
      propDescriptions={CheckboxPropDescriptions}
    />
  </FoundationLayout>
);

export default CheckboxDocs;
