import { useState, useEffect } from 'react';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { ChoicesMulti } from '.';

const ChoicesMultiExample = () => {
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

  const handleRemoveItem = item => {
    const newSelected = [...selected];
    const index = newSelected.indexOf(item);

    if (index !== -1) newSelected.splice(index, 1);

    setSelected(newSelected);
  };

  useEffect(() => {
    const newSelected = [];

    selected.forEach(value => {
      const validatedOption = selectOpts.find(x => x.value === value);

      newSelected.push(validatedOption);
    });

    setSelected(newSelected);
  }, []);

  useUpdateEffect(() => {
    // eslint-disable-next-line no-console
    console.log({ selected });
  }, [selected]);

  return (
    <ChoicesMulti
      disabled={boolean('Disabled', false)}
      selected={selected}
      options={selectOpts}
      name="colors"
      label="Favorite colors"
      placeholder="Choose your favorite colors"
      onChange={handleChange}
      removeItem={handleRemoveItem}
    />
  );
};

storiesOf('Forms|Choices (Multi)', module).add('Overview', () => (
  <ChoicesMultiExample />
));
