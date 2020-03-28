import { Fragment, useState } from 'react'
import useUpdateEffect from 'react-use/lib/useUpdateEffect'

import Button from './Button'
import Modal from './Modal'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'

const ModalExample = props => {
  const [isOpen, toggleOpen] = useState(false)

  const handleToggle = () => {
    toggleOpen(!isOpen)
  }

  useUpdateEffect(() => {
    if (!isOpen) {
      console.log('closing')
    } else {
      console.log('opening')
    }
  }, [])

  const handleComplete = open => {
    if (open) {
      console.log('open')
    } else {
      console.log('close')
    }
  }

  return (
    <Fragment>
      <Modal
        onComplete={handleComplete}
        onReverseComplete={() => console.log('closed')}
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

export default ModalExample
