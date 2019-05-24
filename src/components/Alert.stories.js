import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Alert } from '.';

storiesOf('Components|Alert', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .add('Overview', () => (
    <Alert title="Who am I making this out to?">
      <p>
        And then the battle is not so bad? What are you hacking off? Is it my
        torso?! It is! My precious torso! I decline the title of Iron Cook and
        accept the lesser title of Zinc Saucier, which I just made up. Uhh…
        also, comes with double prize money.
      </p>
    </Alert>
  ));
