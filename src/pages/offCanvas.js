import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import { Button, OffCanvas } from '../components';
import Live from '../docs/Live';

const OffCanvasExample = `
() => {
  const [isOpen, toggleOpen] = useState(false);

  const handleToggle = () => {
    toggleOpen(!isOpen);
  };

  return (
    <Fragment>
      <OffCanvas
        onStart={() => console.log('opening')}
        onComplete={() => console.log('opened')}
        onReverseStart={() => console.log('closing')}
        onReverseComplete={() => console.log('closed')}
        open={isOpen}
        onOffCanvasToggle={handleToggle}
      >
        Test
      </OffCanvas>

      <Button onClick={handleToggle} type="primary">Open OffCanvas</Button>
    </Fragment>
  );
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
