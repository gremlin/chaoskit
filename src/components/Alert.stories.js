import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
};

export const Overview = () => (
  <Alert
    onStart={action('closing')}
    onComplete={action('closed')}
    onReverseStart={action('opening')}
    onReverseComplete={action('open')}
    title="Who am I making this out to?"
    type={select(
      'Type',
      ['default', 'primary', 'warning', 'danger'],
      'default'
    )}
    close
    collapse={boolean('Collapse', false)}
  >
    <div>
      <p>
        And then the battle is not so bad? What are you hacking off? Is it my
        torso?! It is! My precious torso! I decline the title of Iron Cook and
        accept the lesser title of Zinc Saucier, which I just made up. Uhh…
        also, comes with double prize money.
      </p>
    </div>
  </Alert>
);
