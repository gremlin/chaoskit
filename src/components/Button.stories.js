import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Button, Icon } from '.';
import icons from '../assets/icons/icons.json';

export const params = {
  actionType: () => select('actionType', ['button', 'submit', 'reset'], 'button'),
  className: () => text('className', ''),
  disabled: () => boolean('disabled', false),
  noRadius: () => boolean('noRadius', false),
  noContrast: () => boolean('nContrast', false),
  icon: () => select('icon', Object.keys(icons), 'check'),
  label: () => text('label', 'Button'),
  loading: () => boolean('loading', false),
  type: () => select(
    'type',
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
  url: () => text('url', ''),
  size: () => select('size', ['default', 'xsmall', 'small'], 'default'),
};

storiesOf('Components|Button', module)
  .add('Overview', () => (
    <Button
      actionType={params.actionType()}
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
  .add('Icon only', () => (
    <Button
      actionType={params.actionType()}
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
  ))
  .add(
    'Contrast',
    () => (
      <div className="u-gradient--blue-green u-pa--large u-contrast">
        <Button
          actionType={params.actionType()}
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
      notes:
        'The Button component automatically adapts to parent containers containing `.u-contrast`. If you&apos;d like to override the contrast styles for a given button, you can apply the `noContrast` prop.',
    },
  );
