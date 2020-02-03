import { useState, useEffect } from 'react'
import useUpdateEffect from 'react-use/lib/useUpdateEffect'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ChoicesMulti from './ChoicesMulti'

export default {
  title: 'Forms/Choices (Multi)',
  component: ChoicesMulti,
}

const ChoicesMultiExample = () => {
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

  const handleRemoveItem = item => {
    const newSelected = [...selected]
    const index = newSelected.indexOf(item)

    if (index !== -1) newSelected.splice(index, 1)

    setSelected(newSelected)
  }

  useEffect(() => {
    const newSelected = []

    selected.forEach(value => {
      const validatedOption = selectOpts.find(x => x.value === value)

      newSelected.push(validatedOption)
    })

    setSelected(newSelected)
  }, [])

  useUpdateEffect(() => {
    action('Selected')({ selected })
  }, [selected])

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
  )
}

export const Overview = () => <ChoicesMultiExample />
