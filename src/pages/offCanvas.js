import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import { Button, OffCanvas } from '../components';
import Live from '../docs/Live';

const OffCanvasExample = `
class Example extends React.Component {
  state = {
    open: false,
  };

  handleOffCanvasToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleOffCanvasReverseComplete = () => {
    console.log('Fires when offCanvas is closed');
  }

  render() {
    return (
      <Fragment>
        <OffCanvas
          open={this.state.open}
          onOffCanvasToggle={this.handleOffCanvasToggle}
          onReverseComplete={this.handleOffCanvasReverseComplete}
        >
          Test
        </OffCanvas>

        <Button onClick={this.handleOffCanvasToggle} type="primary">Open OffCanvas</Button>
      </Fragment>
    );
  }
}
`.trim();

const OffCanvasPropDescriptions = {
  align: "<code>oneOf(['left', 'right'])</code>", // eslint-disable-line single-quotes
};

const OffCanvasScope = {
  Button,
  OffCanvas,
};

const OffCanvasDocs = () => (
  <BaseLayout pageTitle="OffCanvas">
    <p>
      Frequently used for mobile navigations and shopping carts, the OffCanvas
      component provides ample space to accomodate accessory information for the
      current page.
    </p>
    <Live
      code={OffCanvasExample}
      scope={OffCanvasScope}
      component={OffCanvas}
      propDescriptions={OffCanvasPropDescriptions}
    />
  </BaseLayout>
);

export default OffCanvasDocs;
