import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Badge } from '.';

storiesOf('Components|Badge', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .add('Overview', () => <Badge label="Badge" />);
