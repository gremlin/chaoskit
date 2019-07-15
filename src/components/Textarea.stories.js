import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import { Textarea } from '.';
import Contrast from '../docs/Contrast';

const params = {
  disabled: () => boolean('Disabled', false),
  label: () => text('Label', 'Form label'),
  explanationMessage: () => text('Explanation Message', ''),
  validationMessage: () => text('Validation Message', ''),
  noContrast: () => boolean('No contrast', false),
  required: () => boolean('Required', false),
};

storiesOf('Forms|Textarea', module)
  .add('Overview', () => (
    <Textarea
      disabled={params.disabled()}
      name="test"
      label={params.label()}
      explanationMessage={params.explanationMessage()}
      validationMessage={params.validationMessage()}
      required={params.required()}
    />
  ))
  .add('Contrast', () => (
    <Contrast>
      <Textarea
        disabled={params.disabled()}
        name="test"
        label={params.label()}
        explanationMessage={params.explanationMessage()}
        validationMessage={params.validationMessage()}
        required={params.required()}
        noContrast={params.noContrast()}
      />
    </Contrast>
  ));
