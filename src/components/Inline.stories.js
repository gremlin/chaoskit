import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Inline } from '.';

const params = {
  className: () => text('Class', ''),
  size: () => select(
    'Size',
    ['small', 'default', 'medium', 'large', 'xlarge'],
    'default',
  ),
  wrap: () => boolean('Wrap', false),
};

storiesOf('Components|Inline', module).add('Overview', () => (
  <Inline
    size={params.size()}
    wrap={params.wrap()}
    className={params.className()}
  >
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Inline>
));
