import { select } from '@storybook/addon-knobs'
import { Fragment, useState } from 'react'

import Modal from './Modal'
import Button from './Button'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'

export default {
  title: 'Components/Modal',
  component: Modal,
}

const ModalExample = (props) => {
  const [isOpen, toggleOpen] = useState(false)

  const handleToggle = () => {
    toggleOpen(!isOpen)
  }

  const handleOnComplete = () => {
    console.log('Open complete!')
  }

  const handleReverseComplete = () => {
    console.log('Closed!')
  }

  return (
    <Fragment>
      <Modal
        onComplete={handleOnComplete}
        onReverseComplete={handleReverseComplete}
        open={isOpen}
        onOutsideModalClick={handleToggle}
        {...props}
      >
        <ModalHeader title="Hello" onCloseClick={handleToggle} />
        <ModalBody>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>

          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </ModalBody>
        <ModalFooter>hello</ModalFooter>
      </Modal>

      <Button onClick={handleToggle} type="primary">
        Open Modal
      </Button>
    </Fragment>
  )
}

// @TODO For docs
// When resetting UI on-close (like form-values), use the `onReverseComplete` prop; which waits until the animation is complete to fire

export const Overview = () => (
  <ModalExample
    size={select('size', ['base', 'small', 'large', 'xlarge'], 'base')}
  />
)
