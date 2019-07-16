import { Fragment, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from '.';

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
        size={select('size', ['base', 'small', 'large'], 'default')}
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

storiesOf('Components|Modal', module)
  .addParameters({
    props: {
      propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
    },
  })
  .add('Overview', () => <ModalExample />, {
    notes:
      'When resetting UI on-close (like form-values), use the `onReverseComplete` prop; which waits until the animation is complete to fire',
  });
