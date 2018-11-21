import React from 'react';

import FoundationLayout from '../layouts/Foundation';
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
  <FoundationLayout pageTitle="Radio">
    <Live
      code={RadioExample}
      scope={RadioScope}
      component={Radio}
      propDescriptions={RadioPropDescriptions}
    />
  </FoundationLayout>
);

export default RadioDocs;
