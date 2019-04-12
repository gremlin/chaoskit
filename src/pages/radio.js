import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Live from '../docs/Live';
import Docs from '../docs/Docs';
import { RadioGroup, Radio } from '../components';

const RadioExample = `
() => {
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (name, value) => {
    console.log(name, value);

    setSelectedValue(value);
  };

  return (
    <RadioGroup selectedValue={selectedValue} onChange={handleChange} name="example" label="Radio">
      <Radio label="Test" value="test_value" />
      <Radio label="Test 2" value="test_value2" />
    </RadioGroup>
  );
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
    <h3>RadioGroup</h3>
    <Docs component={RadioGroup} />
    <h3>Radio</h3>
    <Live
      code={RadioExample}
      scope={RadioScope}
      component={Radio}
      propDescriptions={RadioPropDescriptions}
    />
  </BaseLayout>
);

export default RadioDocs;
