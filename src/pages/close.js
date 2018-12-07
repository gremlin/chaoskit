import React from 'react';

import FoundationLayout from '../layouts/Foundation';
import { Close } from '../components';
import Live from '../docs/Live';

const CloseExample = `
class Example extends React.Component {
  handleClick = () => {
    alert('You clicked me!');
  }

  render() {
    return <Close onClick={this.handleClick} />
  }
}
`.trim();

const ClosePropDescriptions = {};

const CloseScope = {
  Close,
};

const CloseDocs = () => (
  <FoundationLayout pageTitle="Close">
    <p>
      Plain and simple - a reusable and ready-to-interact-with close button.
    </p>

    <Live
      code={CloseExample}
      scope={CloseScope}
      component={Close}
      propDescriptions={ClosePropDescriptions}
    />
  </FoundationLayout>
);

export default CloseDocs;
