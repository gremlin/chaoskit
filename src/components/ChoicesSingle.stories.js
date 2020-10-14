import { useState } from 'react'

import ChoicesSingle from './ChoicesSingle'

export default {
  title: 'Forms/Choices (Single)',
  component: ChoicesSingle,
}

const Story = (args) => {
  const [selectedItem, setSelectedItem] = useState({})

  function handleSelectedItemChange({ selectedItem: selected }) {
    console.log(selected)

    setSelectedItem(selected)
  }

  return (
    <ChoicesSingle
      selectedItem={selectedItem}
      handleSelectedItemChange={handleSelectedItemChange}
      {...args}
    />
  )
}

export const Overview = Story.bind({})

Overview.args = {
  label: 'Favorite color',
  placeholder: 'Choose a color',
  name: 'color',
  options: [
    { value: 1, label: 'Option One' },
    { value: 'test-string', label: 'Option Two' },
    { value: 3, label: 'Option Three' },
    { value: 4, label: 'Option Four' },
  ],
}

Overview.argTypes = {
  selected: {
    control: {
      disable: true,
    },
  },
  options: {
    control: {
      disable: true,
    },
  },
  selectedItem: {
    control: {
      disable: true,
    },
  },
  handleSelectedItem: {
    control: {
      disable: true,
    },
  },
}
