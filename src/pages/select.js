import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Live from '../docs/Live';
import { Button, Select } from '../components';

const SelectExample = `
() => {
  const [selected, setSelected] = useState(-1);

  const handleChange = (name, value) => {
    console.log({name, value});
    setSelected(value);
  };

  const selectOpts = [
    { value: 1, label: 'Option One' },
    { value: 'test-string', label: 'Option Two' },
    { value: 3, label: 'Option Three' },
    { value: 4, label: 'Option Four' },
  ];

  return (
    <Fragment>
      <Button
        className="u-link"
        onClick={() => setSelected('test-string')}
        type="reset"
      >
        Set to Option 2
      </Button>
      <Select
        onChange={handleChange}
        selected={selected}
        name="select"
        label="Choose One"
        options={selectOpts}
      />
    </Fragment>
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
