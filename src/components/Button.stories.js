import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Button, Icon } from '.';

const params = {
  className: () => text('Class', ''),
  disabled: () => boolean('Disabled', false),
  noRadius: () => boolean('No Radius', false),
  noContrast: () => boolean('No Contrast', false),
  label: () => text('Label', 'Button'),
  loading: () => boolean('Loading', false),
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
        className={params.className()}
        disabled={params.disabled()}
        loading={params.loading()}
        type={params.type()}
        size={params.size()}
        noRadius={params.noRadius()}
      >
        {params.label()}
      </Button>
    ),
    {
      notes: 'I am a note',
    },
  )
  .add('Icon only', () => (
    <Button
      className={params.className()}
      iconOnly
      disabled={params.disabled()}
      loading={params.loading()}
      type={params.type()}
      size={params.size()}
    >
      <Icon icon="check" />
    </Button>
  ))
  .add('Contrast', () => (
    <div className="u-gradient--blue-green u-pa--large u-contrast">
      <Button
        className={params.className()}
        disabled={params.disabled()}
        loading={params.loading()}
        type={params.type()}
        size={params.size()}
        noRadius={params.noRadius()}
        noContrast={params.noContrast()}
      >
        {params.label()}
      </Button>
    </div>
  ));
