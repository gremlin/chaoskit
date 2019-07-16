import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import { Tooltip } from '.';

const params = {
  content: () => text('Content', '😜 Hey there!'),
  placement: () =>
    select('Position', ['top', 'bottom', 'left', 'right'], 'bottom'),
  trigger: () => text('Trigger', 'Trigger'),
};

storiesOf('Components|Tooltip', module).add(
  'Overview',
  () => (
    <Tooltip content={params.content()} placement={params.placement()}>
      <div css={{ display: 'inline-block' }}>{params.trigger()}</div>
    </Tooltip>
  ),
  {
    notes: `The Tooltip component can be wrapped around any fellow component or
          standard HTML; just make sure it&apos;s only one child!

          > Tooltip content can contain normal strings or other components. Go
          crazy!`,
  }
);
