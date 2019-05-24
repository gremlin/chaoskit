import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { action } from '@storybook/addon-actions';

import { Close } from '.';

storiesOf('Components|Close', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .add('Overview', () => <Close onClick={action('Click')} />);
