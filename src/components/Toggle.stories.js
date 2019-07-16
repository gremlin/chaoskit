import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Toggle } from '.';
import Contrast from '../../.storybook/components/Contrast';

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
  .add(
    'Contrast',
    () => (
      <Contrast>
        <ToggleExample />
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
