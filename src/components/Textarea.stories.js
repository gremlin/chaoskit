import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import { Textarea } from '.';

const params = {
  label: () => text('Label', 'Label'),

  disabled: () => boolean('Disabled', false),

  explanationMessage: () => text('Explanation message', 'Explanation message'),
  validationMessage: () => text('Validation message', ''),
  initialValue: () => text('Initial value', 'Initial value'),
};

storiesOf('Forms|Textarea', module).add('Overview', () => (
  <Textarea
    label={params.label()}
    name="field-name"
    initialValue={params.initialValue()}
    validationMessage={params.validationMessage()}
    explanationMessage={params.explanationMessage()}
  />
));
