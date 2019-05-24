import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Loader } from '.';

storiesOf('Components|Loader', module)
  .addDecorator(withSmartKnobs)
  .add('Overview', () => <Loader />);
