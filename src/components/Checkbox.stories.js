import { boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Checkbox from './Checkbox'
import FormControlWrapper from './FormControlWrapper'
import List from './List'
import ListItem from './ListItem'
import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
}

const params = {
  firstCheckbox: {
    label: () => text('(First Checkbox) label', 'Label 1'),
    disabled: () => boolean('(First Checkbox) disabled', false),
    checked: () => boolean('(First Checkbox) checked', false),
  },
  secondCheckbox: {
    label: () => text('(Second Checkbox) label', 'Label 2'),
    disabled: () => boolean('(Second Checkbox) disabled', false),
    checked: () => boolean('(Second Checkbox) checked', false),
  },
  group: {
    inline: () => boolean('(Group) inline', false),
    label: () => text('(Group) label', 'Group'),
    explanationMessage: () =>
      text('(Group) explanationMessage', 'Explanation message'),
    validationMessage: () => text('(Group) validationMessage', ''),
    required: () => boolean('Required', false),
    noContrast: () => boolean('No contrast', false),
  },
}

// @TODO For docs
// Automatically adapts to parent containers containing \`.u-contrast\`.
// If you'd like to override the contrast styles, you can apply the \`noContrast\` prop.

export const Overview = () => (
  <FormControlWrapper
    label={params.group.label()}
    explanationMessage={params.group.explanationMessage()}
    validationMessage={params.group.validationMessage()}
    required={params.group.required()}
  >
    <List space="base">
      <ListItem>
        <Checkbox
          disabled={params.firstCheckbox.disabled()}
          checked={params.firstCheckbox.checked()}
          name="field-name1"
          label={params.firstCheckbox.label()}
          value="field-value1"
          onChange={({ target: { name, value } }) =>
            action('onChange 1')({ name }, { value })
          }
        />
      </ListItem>
      <ListItem>
        <Checkbox
          disabled={params.secondCheckbox.disabled()}
          checked={params.secondCheckbox.checked()}
          name="field-name2"
          label={params.secondCheckbox.label()}
          value="field-value2"
          onChange={({ target: { name, value } }) =>
            action('onChange 2')({ name }, { value })
          }
        />
      </ListItem>
    </List>
  </FormControlWrapper>
)

export const Contrast = () => (
  <ContrastWrapper>
    <FormControlWrapper
      label={params.group.label()}
      explanationMessage={params.group.explanationMessage()}
      validationMessage={params.group.validationMessage()}
      required={params.group.required()}
    >
      <List space="base">
        <ListItem>
          <Checkbox
            disabled={params.firstCheckbox.disabled()}
            checked={params.firstCheckbox.checked()}
            name="field-name1"
            label={params.firstCheckbox.label()}
            value="field-value1"
            onChange={({ target: { name, value } }) =>
              action('onChange 1')({ name }, { value })
            }
            noContrast={params.group.noContrast()}
          />
        </ListItem>
        <ListItem>
          <Checkbox
            disabled={params.secondCheckbox.disabled()}
            checked={params.secondCheckbox.checked()}
            name="field-name2"
            label={params.secondCheckbox.label()}
            value="field-value2"
            onChange={({ target: { name, value } }) =>
              action('onChange 2')({ name }, { value })
            }
            noContrast={params.group.noContrast()}
          />
        </ListItem>
      </List>
    </FormControlWrapper>
  </ContrastWrapper>
)
