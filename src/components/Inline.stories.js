import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Inline } from '.';

storiesOf('Components|Inline', module)
  .addDecorator(withSmartKnobs)
  .add('Overview', () => (
    <Inline>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Inline>
  ));
