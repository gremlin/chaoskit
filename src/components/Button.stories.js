import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Button, Icon } from '.';

const params = {
  className: () => text('Class', ''),
  disabled: () => boolean('Disabled', false),
  noRadius: () => boolean('No Radius', false),
  noContrast: () => boolean('No Contrast', false),
  icon: () => text('Icon', 'check'),
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
  url: () => text('URL', ''),
  size: () => select('Size', ['default', 'xsmall', 'small'], 'default'),
};

storiesOf('Components|Button', module)
  .addParameters({
    info: {
      text: `
        > When aligning buttons next to each other, consider using the Inline component for proper horizontal and vertical spacing.
      `,
    },
  })
  .add('Overview', () => (
    <Button
      className={params.className()}
      disabled={params.disabled()}
      loading={params.loading()}
      type={params.type()}
      size={params.size()}
      noRadius={params.noRadius()}
      url={params.url()}
    >
      {params.label()}
    </Button>
  ))
  .add(
    'Icon only',
    () => (
      <Button
        className={params.className()}
        iconOnly
        disabled={params.disabled()}
        loading={params.loading()}
        type={params.type()}
        size={params.size()}
        url={params.url()}
      >
        <Icon icon={params.icon()} />
      </Button>
    ),
    {
      notes:
        'Icon buttons only contain a single icon and can be used to indicate shortcuts. Icons are automatically sized based on the button size modifier provided.',
    },
  )
  .add(
    'Contrast',
    () => (
      <div className="u-gradient--blue-green u-pa--large u-contrast">
        <Button
          className={params.className()}
          disabled={params.disabled()}
          loading={params.loading()}
          type={params.type()}
          size={params.size()}
          noRadius={params.noRadius()}
          noContrast={params.noContrast()}
          url={params.url()}
        >
          {params.label()}
        </Button>
      </div>
    ),
    {
      notes: `
        The Button component automatically adapts to parent containers
        containing \`.u-contrast\`.

        If you'd like to override the contrast styles for a given button,
        you can apply the \`noContrast\` prop.
      `,
    },
  );