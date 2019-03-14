import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { Loader } from '.';

storiesOf('Components|Loader', module)
  .addParameters({
    info: {
      text:
        'While no one likes to wait; great things come to those that do. For those times, a loader is available to notify users some magic is happening behind the scenes.',
    },
  })
  .add('Overview', () => <Loader />)
  .add(
    'Manipulating Size/Color',
    () => (
      <Loader className={text('Classes', 'u-textFluid--h1-h2 u-textPrimary')} />
    ),
    {
      notes:
        'Loaders are just as maluable as any piece of text; with both their size and color inheritting from its own, or parent selectors.',
    },
  );
