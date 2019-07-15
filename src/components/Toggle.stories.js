import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Toggle } from '.';
import Contrast from '../docs/Contrast';

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

storiesOf('Forms|Toggle', module)
  .add('Overview', () => <ToggleExample />)
  .add('Contrast', () => (
    <Contrast>
      <ToggleExample />
    </Contrast>
  ));
