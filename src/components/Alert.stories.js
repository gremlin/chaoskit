import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import { Alert } from '.';

storiesOf('Components|Alert', module).add('Overview', () => (
  <Alert
    title="Who am I making this out to?"
    type={select(
      'Type',
      ['default', 'primary', 'warning', 'danger'],
      'default'
    )}
    close
    collapse={boolean('Collapse', false)}
  >
    <p>
      And then the battle is not so bad? What are you hacking off? Is it my
      torso?! It is! My precious torso! I decline the title of Iron Cook and
      accept the lesser title of Zinc Saucier, which I just made up. Uhh… also,
      comes with double prize money.
    </p>
  </Alert>
));
