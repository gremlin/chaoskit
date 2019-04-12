import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Live from '../docs/Live';
import { ChoicesSingle } from '../components';

const ChoicesSingleExample = `
() => {
  const [selected, setSelected] = useState(-1);

  const handleChange = (name, selectedColor) => {
    setSelected(selectedColor.value);
  };

  const handleRemoveItem = () => {
    setSelected(-1);
  }

  useEffect(() => {
    console.log({ selected });
  }, [selected]);

  const selectOpts = [
    { value: 1, label: 'Option One' },
    { value: 'test-string', label: 'Option Two' },
    { value: 3, label: 'Option Three' },
    { value: 4, label: 'Option Four' },
  ];

  return (
    <ChoicesSingle
      selected={selected}
      options={selectOpts}
      label="Favorite color"
      placeholder="Choose a color"
      name="color"
      onChange={handleChange}
      removeItem={handleRemoveItem}
    />
  );
}
`.trim();

const ChoicesSingleScope = {
  React,
  ChoicesSingle,
};

const ChoicesSinglePropDescriptions = {};

const ChoicesSingleDocs = () => (
  <BaseLayout pageTitle="Choices Single">
    <p>
      Uses <a href="https://github.com/paypal/downshift">downshift</a> to
      provide ULTIMATE-POWER and flexibility to more complex{' '}
      <code>&lt;select&gt;</code> UIs.
    </p>
    <Live
      code={ChoicesSingleExample}
      scope={ChoicesSingleScope}
      component={ChoicesSingle}
      propDescriptions={ChoicesSinglePropDescriptions}
    />
  </BaseLayout>
);

export default ChoicesSingleDocs;
