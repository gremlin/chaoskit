import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { action } from '@storybook/addon-actions';

import { Close } from '.';

storiesOf('Components|Close', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text:
        'While no one likes to wait; great things come to those that do. For those times, a loader is available to notify users some magic is happening behind the scenes. Loaders are just as maluable as any piece of text; with both their size and color inheritting from its own, or parent selectors.',
    },
  })
  .add('Overview', () => <Close onClick={action('Click')} />);
