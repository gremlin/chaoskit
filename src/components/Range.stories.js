import { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

import Range from './Range'

export default {
  title: 'Forms/Range',
  component: Range,
}

const params = {
  disabled: () => boolean('Disabled', false),
  label: () => text('Label', 'Form label'),
  explanationMessage: () => text('Explanation Message', 'Explanation message'),
  validationMessage: () => text('Validation Message', 'Validation message'),
  required: () => boolean('Required', false),
}

const RangeExample = ({ ...props }) => {
  const [value, setValue] = useState(2)

  return (
    <Range
      label="Range"
      name="example"
      value={value}
      step={1}
      min={1}
      max={10}
      onChange={({ target: { value: rangeValue } }) => {
        action('Current value')(rangeValue)

        setValue(rangeValue)
      }}
      {...props}
    />
  )
}

export const Overview = () => (
  <RangeExample
    disabled={params.disabled()}
    label={params.label()}
    explanationMessage={params.explanationMessage()}
    validationMessage={params.validationMessage()}
    required={params.required()}
  />
)
