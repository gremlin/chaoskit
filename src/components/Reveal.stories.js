import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Reveal from './Reveal';
import { params as buttonParams } from './Button.stories';

export default {
  title: 'Components/Reveal',
  component: Reveal,
};

const params = {
  reveal: () => boolean('Reveal', false),
  trigger: {
    ...buttonParams,
  },
};

export const Overview = () => (
  <Reveal
    onStart={action('opening')}
    onComplete={action('opened')}
    onReverseStart={action('closing')}
    onReverseComplete={action('closed')}
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
);
