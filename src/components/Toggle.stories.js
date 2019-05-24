import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Toggle } from '.';

storiesOf('Forms|Toggle', module)
  .addDecorator(withSmartKnobs)
  .add('Overview', () => <Toggle label="Label" />);
