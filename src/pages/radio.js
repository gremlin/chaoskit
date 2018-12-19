import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Live from '../docs/Live';
import { RadioGroup, Radio } from '../components';

const RadioExample = `
class Example extends React.Component {
  handleChange = (name, value) => {
    console.log(name, value)
  }

  render() {
    return (
      <RadioGroup onChange={this.handleChange} name="example" label="Radio">
        <Radio label="Test" value="test_value" />
        <Radio label="Test 2" value="test_value2" />
      </RadioGroup>
    );
  }
}
`.trim();

const RadioScope = {
  React,
  RadioGroup,
  Radio,
};

const RadioPropDescriptions = {};

const RadioDocs = () => (
  <BaseLayout pageTitle="Radio">
    <Live
      code={RadioExample}
      scope={RadioScope}
      component={Radio}
      propDescriptions={RadioPropDescriptions}
    />
  </BaseLayout>
);

export default RadioDocs;
