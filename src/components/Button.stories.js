import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Button } from '.';

const params = {
  disabled: () => boolean('Disabled', false),
  label: () => text('Label', 'Button'),
  type: () => select(
    'Type',
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
  size: () => select('Size', ['default', 'xsmall', 'small'], 'default'),
};

storiesOf('Button', module)
  .addParameters({
    info: {
      text: `
        Yep a description
      `,
    },
  })
  .add(
    'Variations',
    () => (
      <Button
        disabled={params.disabled()}
        type={params.type()}
        size={params.size()}
      >
        {params.label()}
      </Button>
    ),
    {
      notes: 'I am a note',
    },
  );
