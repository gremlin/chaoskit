import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Docs from '../docs/Docs';
import Live from '../docs/Live';
import {
  Alert,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from '../components';

const ModalExample = `
class Example extends React.Component {
  state = {
    open: false,
  };

  handleModalToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <Fragment>
        <Modal onStart={() => console.log('opening')} onComplete={() => console.log('opened')} onReverseStart={() => console.log('closing')} onReverseComplete={() => console.log('closed')} open={this.state.open} onOutsideModalClick={this.handleModalToggle}>
          <ModalHeader title="Hello" onCloseClick={this.handleModalToggle} />
          <ModalBody>
            test
          </ModalBody>
          <ModalFooter>
            hello
          </ModalFooter>
        </Modal>

        <Button onClick={this.handleModalToggle} type="primary">Open Modal</Button>
      </Fragment>
    );
  }
}
`.trim();

const ModalScope = {
  React,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
};

const ModalPropDescriptions = {
  onOutsideModalClick: 'Leave blank to keep modal open on background-click',
  size: "<code>oneOf(['small', 'large',])</code>", // eslint-disable-line single-quotes
};

const ModalDocs = () => (
  <BaseLayout pageTitle="Modal">
    <h3>ModalHeader</h3>
    <Docs component={ModalHeader} />
    <h3>ModalBody</h3>
    <Docs component={ModalBody} />
    <h3>ModalFooter</h3>
    <Docs component={ModalFooter} />
    <h3>Modal</h3>
    <Live
      code={ModalExample}
      scope={ModalScope}
      component={Modal}
      propDescriptions={ModalPropDescriptions}
    />
    <Alert type="warning" title="Note">
      <p>
        When resetting UI on-close (like form-values), use the{' '}
        <code>onReverseComplete</code> prop; which waits until the animation is
        complete to fire
      </p>
    </Alert>
  </BaseLayout>
);

export default ModalDocs;
