import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Badge } from '.';

const params = {
  className: () => text('Class', ''),
  rounded: () => boolean('Rounded', false),
  label: () => text('Label', 'Badge'),
  type: () => select('Type', ['default', 'primary', 'danger'], 'default'),
};

storiesOf('Badge', module).add('Variations', () => (
  <Badge
    className={params.className()}
    rounded={params.rounded()}
    label={params.label()}
    type={params.type()}
  />
));
