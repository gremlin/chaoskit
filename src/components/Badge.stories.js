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

storiesOf('Components|Badge', module)
  .addParameters({
    info: {
      text:
        "Badges are indicators and have no interactivity. They are used to indicate an item's current state.",
    },
  })
  .add('Overview', () => (
    <Badge
      className={params.className()}
      rounded={params.rounded()}
      label={params.label()}
      type={params.type()}
    />
  ));
