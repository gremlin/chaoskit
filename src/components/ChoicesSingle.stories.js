import { useState } from 'react'
import useUpdateEffect from 'react-use/lib/useUpdateEffect'

import ChoicesSingle from './ChoicesSingle'

export default {
  title: 'Forms/Choices (Single)',
  component: ChoicesSingle,
}

const Story = (args) => {
  const [selected, setSelected] = useState(-1)

  const handleChange = (name, selectedColor) => {
    setSelected(selectedColor.value)
  }

  const handleRemoveItem = () => {
    setSelected(-1)
  }

  useUpdateEffect(() => {
    console.log({ selected }) // eslint-disable-line no-console
  }, [selected])

  return (
    <ChoicesSingle
      {...args}
      selected={selected}
      onChange={handleChange}
      removeItem={handleRemoveItem}
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
  removeItem: {
    control: {
      disable: true,
    },
  },
  onChange: {
    control: {
      disable: true,
    },
  },
}
