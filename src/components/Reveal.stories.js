import { useState } from 'react'

import Reveal from './Reveal'
import Button from './Button'

export default {
  title: 'Components/Reveal',
  component: Reveal,
  subcomponents: { Button },
  args: {
    trigger: {
      label: 'Toggle',
      props: {
        type: 'primary',
      },
    },
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    onComplete: { action: 'Open' },
    onReverseComplete: { action: 'Closed' },
  },
}

const Story = (args) => {
  const [reveal, setReveal] = useState(false)

  return (
    <Reveal {...args} reveal={reveal} setReveal={setReveal}>
      Then we will go with that data file! Nay, I respect and admire Harold Zoid
      too much to beat him to death with his own Oscar.
    </Reveal>
  )
}

export const Overview = Story.bind({})
