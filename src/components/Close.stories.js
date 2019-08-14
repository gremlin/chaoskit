import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Close } from '.';
import Contrast from '../../.storybook/components/Contrast';

storiesOf('Components|Close', module)
  .add('Overview', () => <Close onClick={action('Clicked')} />)
  .add('Contrast', () => (
    <Contrast>
      <Close onClick={action('Clicked')} />
    </Contrast>
  ));
