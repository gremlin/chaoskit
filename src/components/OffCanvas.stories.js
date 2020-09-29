import { Fragment, useState } from 'react'

import Button from './Button'
import OffCanvas from './OffCanvas'

export default {
  title: 'Components/OffCanvas',
  component: OffCanvas,
  args: {
    panelWidth: 350,
    align: 'left',
  },
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
    panelWidth: {
      control: {
        type: 'number',
      },
    },
    onComplete: { action: 'Open' },
    onReverseComplete: { action: 'Closed' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'When resetting UI on-close (like form-values), use the `onReverseComplete` prop; which waits until the animation is complete to fire',
      },
    },
  },
}

const Story = (args) => {
  const [isOpen, toggleOpen] = useState(false)

  const handleToggle = () => {
    toggleOpen(!isOpen)
  }

  return (
    <Fragment>
      <OffCanvas {...args} open={isOpen} setIsOpen={toggleOpen}>
        Test
      </OffCanvas>

      <Button onClick={handleToggle} type="primary">
        Open OffCanvas
      </Button>
    </Fragment>
  )
}

export const Overview = Story.bind({})
