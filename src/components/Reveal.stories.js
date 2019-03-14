import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Reveal } from '.';

const params = {
  className: () => text('Class', ''),
  content: () => text(
    'Content',
    'Then we will go with that data file! Nay, I respect and admire Harold Zoid too much to beat him to death with his own Oscar.',
  ),
  reveal: () => boolean('Reveal', false),
  trigger: {
    label: () => text('Trigger label', 'Reveal'),
    type: () => select(
      'Trigger type',
      [
        'reset',
        'default',
        'primary',
        'secondary',
        'teal',
        'danger',
        'outlinePrimary',
      ],
      'default',
    ),
  },
};

storiesOf('Components|Reveal', module).add('Overview', () => (
  <Reveal
    className={params.className()}
    reveal={params.reveal()}
    trigger={{
      label: params.trigger.label(),
      props: { type: params.trigger.type() },
    }}
  >
    {params.content()}
  </Reveal>
));
