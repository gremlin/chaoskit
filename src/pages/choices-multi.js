import React from 'react';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import BaseLayout from '../layouts/BaseLayout';
import Live from '../docs/Live';
import { ChoicesMulti } from '../components';

const ChoicesMultiExample = `
() => {
  const [selected, setSelected] = useState([]);

  const selectOpts = [
    { value: 1, label: 'Option One' },
    { value: 'test-string', label: 'Option Two' },
    { value: 3, label: 'Option Three' },
    { value: 4, label: 'Option Four' },
  ];

  const handleChange = (name, selectedColors) => {
    setSelected(selectedColors);
  };

  const handleRemoveItem = (item) => {
    const newSelected = [...selected];
    const index = newSelected.indexOf(item);

    if (index !== -1) newSelected.splice(index, 1);

    setSelected(newSelected);
  };

  useEffect(() => {
    const newSelected = [];

    selected.forEach((value) => {
      const validatedOption = selectOpts.find(x => x.value === value);

      newSelected.push(validatedOption);
    });

    setSelected(newSelected);
  }, []);

  useUpdateEffect(() => {
    console.log({ selected });
  }, [selected]);

  return (
    <ChoicesMulti
      selected={selected}
      options={selectOpts}
      name="colors"
      label="Favorite colors"
      placeholder="Choose your favorite colors"
      onChange={handleChange}
      removeItem={handleRemoveItem}
    />
  );
}
`.trim();

const ChoicesMultiScope = {
  React,
  ChoicesMulti,
  useUpdateEffect,
};

const ChoicesMultiPropDescriptions = {};

const ChoicesMultiDocs = () => (
  <BaseLayout pageTitle="Choices Multi">
    <p>
      Uses <a href="https://github.com/paypal/downshift">downshift</a> to
      provide ULTIMATE-POWER and flexibility to more complex{' '}
      <code>&lt;select&gt;</code> UIs.
    </p>
    <Live
      code={ChoicesMultiExample}
      scope={ChoicesMultiScope}
      component={ChoicesMulti}
      propDescriptions={ChoicesMultiPropDescriptions}
    />
  </BaseLayout>
);

export default ChoicesMultiDocs;
