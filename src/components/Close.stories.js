import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { action } from '@storybook/addon-actions';

import { Close } from '.';

storiesOf('Components|Close', module)
  .addDecorator(withSmartKnobs)
  .add('Overview', () => <Close onClick={action('Click')} />);
