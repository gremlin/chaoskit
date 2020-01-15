import { Fragment, useState } from 'react';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from './Button';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const ModalExample = () => {
  const [isOpen, toggleOpen] = useState(false);

  const handleToggle = () => {
    toggleOpen(!isOpen);
  };

  return (
    <Fragment>
      <Modal
        onStart={action('opening')}
        onComplete={action('opened')}
        onReverseStart={action('closing')}
        onReverseComplete={action('closed')}
        size={select('size', ['base', 'small', 'large'], 'base')}
        open={isOpen}
        onOutsideModalClick={handleToggle}
      >
        <ModalHeader title="Hello" onCloseClick={handleToggle} />
        <ModalBody>test</ModalBody>
        <ModalFooter>hello</ModalFooter>
      </Modal>

      <Button onClick={handleToggle} type="primary">
        Open Modal
      </Button>
    </Fragment>
  );
};

// @TODO For docs
// When resetting UI on-close (like form-values), use the `onReverseComplete` prop; which waits until the animation is complete to fire

export const Overview = () => <ModalExample />;
