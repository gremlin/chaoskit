import { useState, useEffect } from 'react'
import useUpdateEffect from 'react-use/lib/useUpdateEffect'

import ChoicesMulti from './ChoicesMulti'

export default {
  title: 'Forms/Choices (Multi)',
  component: ChoicesMulti,
}

const Story = (args) => {
  const [selected, setSelected] = useState([])

  const selectOpts = [
    { value: 1, label: 'Option One' },
    { value: 'test-string', label: 'Option Two' },
    { value: 3, label: 'Option Three' },
    { value: 4, label: 'Option Four' },
  ]

  const handleChange = (name, selectedColors) => {
    setSelected(selectedColors)
  }

  const handleRemoveItem = (item) => {
    const newSelected = [...selected]
    const index = newSelected.indexOf(item)

    if (index !== -1) newSelected.splice(index, 1)

    setSelected(newSelected)
  }

  useEffect(() => {
    const newSelected = []

    selected.forEach((value) => {
      const validatedOption = selectOpts.find((x) => x.value === value)

      newSelected.push(validatedOption)
    })

    setSelected(newSelected)
  }, [])

  useUpdateEffect(() => {
    console.log({ selected }) // eslint-disable-line no-console
  }, [selected])

  return (
    <ChoicesMulti
      {...args}
      selected={selected}
      onChange={handleChange}
      removeItem={handleRemoveItem}
    />
  )
}

export const Overview = Story.bind({})

Overview.args = {
  label: 'Favorite colors',
  searchPlaceholder: 'Choose your favorite colors',
  name: 'colors',
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
