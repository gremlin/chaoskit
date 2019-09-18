import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { Reveal } from '.';
import { params as buttonParams } from './Button.stories';

const params = {
  reveal: () => boolean('Reveal', false),
  trigger: {
    ...buttonParams,
  },
};

storiesOf('Components|Reveal', module).add('Overview', () => (
  <Reveal
    reveal={params.reveal()}
    trigger={{
      label: params.trigger.label(),
      props: {
        disabled: params.trigger.disabled(),
        type: params.trigger.type(),
        size: params.trigger.size(),
      },
    }}
  >
    Then we will go with that data file! Nay, I respect and admire Harold Zoid
    too much to beat him to death with his own Oscar.
  </Reveal>
));
