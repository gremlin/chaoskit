import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Tooltip } from '.';

storiesOf('Components|Tooltip', module)
  .addParameters({
    info: {
      text: `
        1. The Tooltip component can be wrapped around any fellow component or
        standard HTML; just make sure it&apos;s only one child!
        1. Tooltip content can contain normal strings or other components. Go
        crazy!
      `,
    },
  })
  .addDecorator(withSmartKnobs)
  .add('Overview', () => (
    <Tooltip content="😜 Hey there!" placement="bottom">
      <div className="u-inlineBlock">Trigger tooltip</div>
    </Tooltip>
  ));
