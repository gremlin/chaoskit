import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { Close } from '.';

const params = {
  className: () => text('Class', ''),
};

storiesOf('Close', module).add('Variations', () => (
  <Close className={params.className()} />
));
