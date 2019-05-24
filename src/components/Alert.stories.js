import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Alert } from '.';

storiesOf('Components|Alert', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .add('Overview', () => <Alert />);
