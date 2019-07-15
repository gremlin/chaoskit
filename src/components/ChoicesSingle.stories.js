import { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';

import { ChoicesSingle } from '.';

const ChoicesSingleExample = () => {
  const [selected, setSelected] = useState(-1);

  const handleChange = (name, selectedColor) => {
    setSelected(selectedColor.value);
  };

  const handleRemoveItem = () => {
    setSelected(-1);
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
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
};

storiesOf('Components|Choices (Single)', module).add('Overview', () => (
  <ChoicesSingleExample />
));
