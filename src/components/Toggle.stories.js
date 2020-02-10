import { boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Toggle from './Toggle'

export default {
  title: 'Forms/Toggle',
  component: Toggle,
}

const params = {
  disabled: () => boolean('Disabled', false),
  checked: () => boolean('Checked', false),
  label: () => text('Label', 'Form label'),
  noContrast: () => boolean('No contrast', false),
}

const ToggleExample = props => {
  return <Toggle name="Toggle" value="field-value1" {...props} />
}

export const Overview = () => (
  <ToggleExample
    disabled={params.disabled()}
    label={params.label()}
    checked={params.checked()}
    noContrast={params.noContrast()}
    onChange={({ target: { name, value } }) =>
      action('onChange')({ name }, { value })
    }
  />
)

// @TODO For docs
// Automatically adapts to parent containers containing \`.u-contrast\`.
// If you'd like to override the contrast styles, you can apply the \`noContrast\` prop.

export const Contrast = () => (
  <ContrastWrapper>
    <ToggleExample
      disabled={params.disabled()}
      label={params.label()}
      checked={params.checked()}
      noContrast={params.noContrast()}
      onChange={({ target: { name, value } }) =>
        action('onChange')({ name }, { value })
      }
    />
  </ContrastWrapper>
)
