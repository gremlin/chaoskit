import * as React from 'react'

import Alert from './Alert'

export default {
  title: 'Components/Alert',
  component: Alert,
  args: {
    title: 'Who am I making this out to?',
    children: (
      <p>
        And then the battle is not so bad? What are you hacking off? Is it my
        torso?! It is! My precious torso! I decline the title of Iron Cook and
        accept the lesser title of Zinc Saucier, which I just made up. Uhh…
        also, comes with double prize money.
      </p>
    ),
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
}

const Story = (args) => {
  const [reveal, setReveal] = React.useState(true)

  return <Alert {...args} reveal={reveal} setReveal={setReveal} />
}

export const Overview = Story.bind({})
