import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Select from './Select';
import ContrastWrapper from '../../.storybook/components/Contrast';

export default {
  title: 'Forms/Select',
  component: Select,
};

const params = {
  disabled: () => boolean('Disabled', false),
  label: () => text('Label', 'Form label'),
  explanationMessage: () => text('Explanation Message', 'Explanation message'),
  validationMessage: () => text('Validation Message', 'Validation message'),
  noContrast: () => boolean('No contrast', false),
  required: () => boolean('Required', false),
};

const SelectExample = ({ ...props }) => {
  const selectOpts = [
    { value: 1, label: 'Option One' },
    { value: 'test-string', label: 'Option Two' },
    { value: 3, label: 'Option Three' },
    { value: 4, label: 'Option Four' },
  ];

  return (
    <Select
      onChange={({ target: { name, value } }) =>
        action('onChange')({ name }, { value })
      }
      defaultValue="3"
      options={selectOpts}
      name="select"
      {...props}
    />
  );
};

export const Overview = () => (
  <SelectExample
    disabled={params.disabled()}
    label={params.label()}
    explanationMessage={params.explanationMessage()}
    validationMessage={params.validationMessage()}
    required={params.required()}
    noContrast={params.noContrast()}
  />
);

export const Contrast = () => (
  <ContrastWrapper>
    <SelectExample
      disabled={params.disabled()}
      label={params.label()}
      explanationMessage={params.explanationMessage()}
      validationMessage={params.validationMessage()}
      required={params.required()}
      noContrast={params.noContrast()}
    />
  </ContrastWrapper>
);
