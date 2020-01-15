import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Toggle from './Toggle';
import ContrastWrapper from '../../.storybook/components/Contrast';

export default {
  title: 'Forms/Toggle',
  component: Toggle,
};

const params = {
  disabled: () => boolean('Disabled', false),
  label: () => text('Label', 'Form label'),
  noContrast: () => boolean('No contrast', false),
};

const ToggleExample = () => {
  return (
    <Toggle
      disabled={params.disabled()}
      onChange={({ target: { name, value } }) =>
        action('onChange')({ name }, { value })
      }
      name="Toggle"
      label={params.label()}
      noContrast={params.noContrast()}
    />
  );
};

export const Overview = () => <ToggleExample />;

// @TODO For docs
// Automatically adapts to parent containers containing \`.u-contrast\`.
// If you'd like to override the contrast styles, you can apply the \`noContrast\` prop.

export const Contrast = () => (
  <ContrastWrapper>
    <ToggleExample />
  </ContrastWrapper>
);
