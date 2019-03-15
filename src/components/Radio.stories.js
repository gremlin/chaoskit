import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { RadioGroup, Radio } from '.';

const params = {
  firstRadio: {
    className: () => text('(First Radio) Classes', ''),
    label: () => text('(First Radio) Label', 'Label 1'),
    disabled: () => boolean('(First Radio) Disabled', false),
  },
  secondRadio: {
    className: () => text('(Second Radio) Classes', ''),
    label: () => text('(Second Radio) Label', 'Label 2'),
    disabled: () => boolean('(Second Radio) Disabled', false),
  },
  group: {
    inline: () => boolean('(Group) Inline', false),
    label: () => text('(Group) label', 'Group'),
    explanationMessage: () => text('(Group) explanation message', 'Explanation message'),
    validationMessage: () => text('(Group) validation message', 'Validation message'),
  },
};

storiesOf('Forms|Radio', module).add('Overview', () => (
  <RadioGroup
    label={params.group.label()}
    explanationMessage={params.group.explanationMessage()}
    validationMessage={params.group.validationMessage()}
    inline={params.group.inline()}
    name="field-name"
    onChange={(name, value) => action('onChange')({ name }, { value })}
  >
    <Radio
      disabled={params.firstRadio.disabled()}
      label={params.firstRadio.label()}
      value="field-value1"
    />
    <Radio
      disabled={params.secondRadio.disabled()}
      label={params.secondRadio.label()}
      value="field-value2"
    />
  </RadioGroup>
));