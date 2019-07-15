import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Input } from '.';
import Contrast from '../../.storybook/components/Contrast';
import icons from '../assets/icons/icons.json';

const params = {
  disabled: () => boolean('Disabled', false),
  label: () => text('Label', 'Form label'),
  explanationMessage: () => text('Explanation Message', 'Explanation message'),
  validationMessage: () => text('Validation Message', 'Validation message'),
  noContrast: () => boolean('No contrast', false),
  prefixIcon: () => select('Icon', Object.keys(icons), 'user'),
  required: () => boolean('Required', false),
};

storiesOf('Forms|Input', module)
  .add('Overview', () => (
    <Input
      disabled={params.disabled()}
      name="test"
      label={params.label()}
      explanationMessage={params.explanationMessage()}
      validationMessage={params.validationMessage()}
      required={params.required()}
    />
  ))
  .add('Prefix Icon', () => (
    <Input
      disabled={params.disabled()}
      name="test"
      label={params.label()}
      explanationMessage={params.explanationMessage()}
      validationMessage={params.validationMessage()}
      prefixIcon={params.prefixIcon()}
      required={params.required()}
    />
  ))
  .add('Contrast', () => (
    <Contrast>
      <Input
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
