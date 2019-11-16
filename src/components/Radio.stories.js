import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { List, ListItem, RadioGroup, Radio, RadioWithContext } from '.';
import Contrast from '../../.storybook/components/Contrast';

const params = {
  overview: {
    label: () => text('Label', 'Label 1'),
    disabled: () => boolean('Disabled', false),
    checked: () => boolean('Selected', false),
  },
  firstRadio: {
    label: () => text('(First Radio) Label', 'Label 1'),
    disabled: () => boolean('(First Radio) Disabled', false),
  },
  secondRadio: {
    label: () => text('(Second Radio) Label', 'Label 2'),
    disabled: () => boolean('(Second Radio) Disabled', false),
  },
  group: {
    label: () => text('(Group) label', 'Group'),
    name: () => text('(Group) name', 'name'),
    explanationMessage: () =>
      text('(Group) explanation message', 'Explanation message'),
    validationMessage: () => text('(Group) validation message', ''),
    selectedValue: () =>
      select('Selected value', ['field1', 'field2'], 'field1'),
    required: () => boolean('Required', false),
    noContrast: () => boolean('No contrast', false),
  },
};

storiesOf('Forms|Radio', module)
  .add('Overview', () => (
    <Radio
      name="field1"
      disabled={params.overview.disabled()}
      label={params.overview.label()}
      checked={params.overview.checked()}
    />
  ))
  .add(
    'With context',
    () => (
      <RadioGroup
        label={params.group.label()}
        explanationMessage={params.group.explanationMessage()}
        validationMessage={params.group.validationMessage()}
        name="field-name"
        onChange={({ target: { name, value } }) =>
          action('onChange')({ name }, { value })
        }
        selectedValue={params.group.selectedValue()}
        required={params.group.required()}
      >
        <List space="base">
          <ListItem>
            <RadioWithContext
              disabled={params.firstRadio.disabled()}
              label={params.firstRadio.label()}
              value="field1"
              name={params.group.name()}
            />
          </ListItem>
          <ListItem>
            <RadioWithContext
              disabled={params.secondRadio.disabled()}
              label={params.secondRadio.label()}
              value="field2"
              name={params.group.name()}
            />
          </ListItem>
        </List>
      </RadioGroup>
    ),
    {
      notes: `
        Wrap in \`<RadioGroup />\` and use \`<RadioWithContext />\` to handle \`name\`, \`onChange\`, \`selectedValue\`, and \`noContrast\` from the parent component.
      `,
    }
  )
  .add(
    'Contrast',
    () => (
      <Contrast>
        <Radio
          name="field1"
          disabled={params.overview.disabled()}
          label={params.overview.label()}
          checked={params.overview.checked()}
        />
      </Contrast>
    ),
    {
      notes: `
        Automatically adapts to parent containers
        containing \`.u-contrast\`.

        If you'd like to override the contrast styles,
        you can apply the \`noContrast\` prop.
      `,
    }
  );
