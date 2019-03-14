import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { CheckboxGroup, Checkbox } from '.';

const params = {
  firstCheckbox: {
    className: () => text('(First Checkbox) Classes', ''),
    label: () => text('(First Checkbox) Label', 'Label 1'),
    disabled: () => boolean('(First Checkbox) Disabled', false),
    isChecked: () => boolean('(First Checkbox) Checked', false),
  },
  secondCheckbox: {
    className: () => text('(Second Checkbox) Classes', ''),
    label: () => text('(Second Checkbox) Label', 'Label 2'),
    disabled: () => boolean('(Second Checkbox) Disabled', false),
    isChecked: () => boolean('(Second Checkbox) Checked', false),
  },
  group: {
    inline: () => boolean('(Group) Inline', false),
    label: () => text('(Group) label', 'Group'),
    explanationMessage: () => text('(Group) explanation message', 'Explanation message'),
    validationMessage: () => text('(Group) validation message', 'Validation message'),
  },
};

storiesOf('Forms|Checkbox', module).add('Overview', () => (
  <CheckboxGroup
    label={params.group.label()}
    explanationMessage={params.group.explanationMessage()}
    validationMessage={params.group.validationMessage()}
    inline={params.group.inline()}
  >
    <Checkbox
      disabled={params.firstCheckbox.disabled()}
      isChecked={params.firstCheckbox.isChecked()}
      name="field-name1"
      label={params.firstCheckbox.label()}
      value="field-value1"
      onChange={(name, value) => action('onChange 1')({ name }, { value })}
    />
    <Checkbox
      disabled={params.secondCheckbox.disabled()}
      isChecked={params.secondCheckbox.isChecked()}
      name="field-name2"
      label={params.secondCheckbox.label()}
      value="field-value2"
      onChange={(name, value) => action('onChange 2')({ name }, { value })}
    />
  </CheckboxGroup>
));
