import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { CheckboxGroup, Checkbox } from '.';

const params = {
  firstCheckbox: {
    label: () => text('(First Checkbox) label', 'Label 1'),
    disabled: () => boolean('(First Checkbox) disabled', false),
    isChecked: () => boolean('(First Checkbox) checked', false),
  },
  secondCheckbox: {
    label: () => text('(Second Checkbox) label', 'Label 2'),
    disabled: () => boolean('(Second Checkbox) disabled', false),
    isChecked: () => boolean('(Second Checkbox) checked', false),
  },
  group: {
    inline: () => boolean('(Group) inline', false),
    label: () => text('(Group) label', 'Group'),
    explanationMessage: () =>
      text('(Group) explanationMessage', 'Explanation message'),
    validationMessage: () => text('(Group) validationMessage', ''),
  },
};

storiesOf('Forms|Checkbox', module)
  .addParameters({
    info: {
      text:
        'Always surround the Checkbox component with CheckboxGroup; as it provides not only event handlers, but additional display options.',
    },
  })
  .add('Overview', () => (
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
