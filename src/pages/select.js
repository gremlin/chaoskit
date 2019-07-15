import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Live from '../docs/Live';
import { Button, Select } from '../components';

const SelectExample = `
() => {
  const handleChange = ({ target: { name, value } }) => {
    console.log({name, value});
  };

  const selectOpts = [
    { value: 1, label: 'Option One' },
    { value: 'test-string', label: 'Option Two' },
    { value: 3, label: 'Option Three' },
    { value: 4, label: 'Option Four' },
  ];

  return (
    <Select
      onChange={handleChange}
      defaultValue="3"
      name="select"
      label="Choose One"
      options={selectOpts}
    />
  );
}
`.trim();

const SelectScope = {
  Button,
  React,
  Select,
};

const SelectPropDescriptions = {
  explanationMessage: 'Field descriptions',
  validationMessage: 'Error messages with field',
};

const SelectDocs = () => (
  <BaseLayout pageTitle="Select">
    <Live
      code={SelectExample}
      scope={SelectScope}
      component={Select}
      propDescriptions={SelectPropDescriptions}
    />
  </BaseLayout>
);

export default SelectDocs;
