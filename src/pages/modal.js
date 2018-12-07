import React from 'react';

import FoundationLayout from '../layouts/Foundation';
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
        <Modal open={this.state.open} handleOutsideModalClick={this.handleModalToggle}>
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
  handleOutsideModalClick: 'Leave blank to keep modal open on background-click',
  size: "<code>oneOf(['small', 'large',])</code>", // eslint-disable-line single-quotes
};

const ModalDocs = () => (
  <FoundationLayout pageTitle="Modal">
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
  </FoundationLayout>
);

export default ModalDocs;
