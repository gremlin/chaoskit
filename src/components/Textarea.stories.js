import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Textarea } from '.';

storiesOf('Forms|Textarea', module)
  .addDecorator(withSmartKnobs)
  .add('Overview', () => <Textarea label="Label" />);
