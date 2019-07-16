import { Fragment, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Button, OffCanvas } from '.';

const OffCanvasExample = () => {
  const [isOpen, toggleOpen] = useState(false);

  const handleToggle = () => {
    toggleOpen(!isOpen);
  };

  return (
    <Fragment>
      <OffCanvas
        onStart={action('opening')}
        onComplete={action('opened')}
        onReverseStart={action('closing')}
        onReverseComplete={action('closed')}
        open={isOpen}
        onOffCanvasToggle={handleToggle}
        align={select('align', ['left', 'right'], 'left')}
        panelWidth={number('Panel Width', 300)}
      >
        Test
      </OffCanvas>

      <Button onClick={handleToggle} type="primary">
        Open OffCanvas
      </Button>
    </Fragment>
  );
};

storiesOf('Components|OffCanvas', module)
  .addParameters({
    props: {
      propTables: [OffCanvas],
    },
  })
  .add('Overview', () => <OffCanvasExample />, {
    notes:
      'When resetting UI on-close (like form-values), use the `onReverseComplete` prop; which waits until the animation is complete to fire',
  });
