import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Badge } from '.';

const params = {
  rounded: () => boolean('Rounded', false),
  label: () => text('Label', 'Badge'),
  type: () => select('Type', ['default', 'primary', 'danger'], 'default'),
};

storiesOf('Components|Badge', module).add('Overview', () => (
  <Badge
    rounded={params.rounded()}
    label={params.label()}
    type={params.type()}
  />
));
