import { useState } from 'react'

import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Range from './Range'

export default {
  title: 'Forms/Range',
  component: Range,
  args: {
    step: 1,
    min: 1,
    max: 10,
    name: 'range',
  },
  argTypes: {
    value: {
      control: {
        disable: true,
      },
    },
  },
}

const Story = (args) => {
  const [value, setValue] = useState(2)

  return (
    <Range
      value={value}
      onChange={({ target: { value: rangeValue } }) => {
        setValue(rangeValue)
      }}
      {...args}
    />
  )
}

export const Overview = Story.bind({})

export const Contrast = Story.bind({})

Contrast.args = {
  contrast: true,
}

Contrast.decorators = [
  (Example) => (
    <ContrastWrapper variation="dark">
      <Example />
    </ContrastWrapper>
  ),
]
