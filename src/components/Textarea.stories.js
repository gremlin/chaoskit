import { boolean, text } from '@storybook/addon-knobs'

import Textarea from './Textarea'
import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

export default {
  title: 'Forms/Textarea',
  component: Textarea,
}

const params = {
  disabled: () => boolean('Disabled', false),
  label: () => text('Label', 'Form label'),
  explanationMessage: () => text('Explanation Message', ''),
  validationMessage: () => text('Validation Message', ''),
  noContrast: () => boolean('No contrast', false),
  required: () => boolean('Required', false),
}

export const Overview = () => (
  <Textarea
    disabled={params.disabled()}
    name="test"
    label={params.label()}
    explanationMessage={params.explanationMessage()}
    validationMessage={params.validationMessage()}
    required={params.required()}
  />
)

// @TODO For docs
// Automatically adapts to parent containers containing \`.u-contrast\`.
// If you'd like to override the contrast styles, you can apply the \`noContrast\` prop.

export const Contrast = () => (
  <ContrastWrapper>
    <Textarea
      disabled={params.disabled()}
      name="test"
      label={params.label()}
      explanationMessage={params.explanationMessage()}
      validationMessage={params.validationMessage()}
      required={params.required()}
      noContrast={params.noContrast()}
    />
  </ContrastWrapper>
)
