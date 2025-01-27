import * as React from 'react'

import Dropdown from './Dropdown'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    trigger: {
      label: 'Dropdown',
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
  },
}

const Story = (args) => <Dropdown {...args} />

export const Overview = Story.bind({})

Overview.args = {
  children: <p>Hello from the dropdown!</p>,
}
