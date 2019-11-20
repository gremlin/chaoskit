import { storiesOf } from '@storybook/react';

import Range from './Range';

storiesOf('Forms|Range', module).add('Overview', () => (
  <Range label="Amount" name="range" />
));
