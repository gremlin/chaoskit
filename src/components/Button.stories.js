import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Button, Icon } from '.';
import Contrast from '../../.storybook/components/Contrast';
import icons from '../assets/icons/icons.json';

export const params = {
  disabled: () => boolean('Disabled', false),
  noRadius: () => boolean('No Radius', false),
  noContrast: () => boolean('No Contrast', false),
  icon: () => select('Icon', Object.keys(icons), 'check'),
  label: () => text('Label', 'Button'),
  loading: () => boolean('Loading', false),
  type: () =>
    select(
      'Type',
      ['reset', 'default', 'primary', 'secondary', 'danger', 'outlinePrimary'],
      'default'
    ),
  url: () => text('URL', ''),
  size: () => select('Size', ['base', 'xsmall', 'small'], 'base'),
};

storiesOf('Components|Button', module)
  .add(
    'Overview',
    () => (
      <Button
        disabled={params.disabled()}
        loading={params.loading()}
        type={params.type()}
        size={params.size()}
        noRadius={params.noRadius()}
        url={params.url()}
      >
        {params.label()}
      </Button>
    ),
    {
      notes:
        '> When aligning buttons next to each other, consider using the Inline component for proper horizontal and vertical spacing',
    }
  )
  .add(
    'Icon only',
    () => (
      <Button
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
      notes: `Icon buttons only contain a single icon and can be used to indicate shortcuts.

        > Icons are automatically sized based on the button size modifier provided.`,
    }
  )
  .add(
    'Contrast',
    () => (
      <Contrast>
        <Button
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
      </Contrast>
    ),
    {
      notes: `
        Automatically adapts to parent containers
        containing \`.u-contrast\`.

        If you'd like to override the contrast styles,
        you can apply the \`noContrast\` prop.
      `,
    }
  );
