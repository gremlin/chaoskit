import * as React from 'react'

import Button from './Button'
import Modal from './Modal'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'

export default {
  title: 'Components/Modal',
  component: Modal,
  subcomponents: { Button, ModalHeader, ModalBody, ModalFooter },
  args: {
    animateFrom: 'bottom',
    size: 'base',
  },
  argTypes: {
    animateFrom: {
      control: {
        type: 'select',
        options: ['bottom', 'top'],
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['base', 'small', 'large', 'xlarge'],
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
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Modal {...args} open={isOpen} setIsOpen={setIsOpen}>
        <ModalHeader title="Hello" setIsOpen={setIsOpen} />
        <ModalBody>
          <p>test</p>
        </ModalBody>
        <ModalFooter>hello</ModalFooter>
      </Modal>

      <Button type="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
    </>
  )
}

export const Overview = Story.bind({})
