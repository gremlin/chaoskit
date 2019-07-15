import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Close } from '.';

storiesOf('Components|Close', module).add('Overview', () => (
  <Close onClick={action('Clicked')} />
));
