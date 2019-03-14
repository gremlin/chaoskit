import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Toggle } from '.';

const params = {
  label: () => text('Label', 'Label'),
  disabled: () => boolean('Disabled', false),
};

storiesOf('Forms|Toggle', module).add('Overview', () => (
  <Toggle
    name="field-name"
    label={params.label()}
    disabled={params.disabled()}
    value="field-value"
    onChange={(name, value, checked) => action('onChange')({ name }, { value }, { checked })
    }
  />
));
