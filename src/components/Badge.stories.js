import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Badge } from '.';

storiesOf('Components|Badge', module)
  .addDecorator(withSmartKnobs)
  .add('Overview', () => <Badge label="Badge" />);
