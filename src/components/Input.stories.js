import { boolean, select, text } from '@storybook/addon-knobs'

import ContrastWrapper from '../../.storybook/components/ContrastWrapper'
import icons from '../assets/icons/icons.json'

import Input from './Input'

export default {
  title: 'Forms/Input',
  component: Input,
}

const params = {
  disabled: () => boolean('Disabled', false),
  label: () => text('Label', 'Form label'),
  explanationMessage: () => text('Explanation Message', 'Explanation message'),
  validationMessage: () => text('Validation Message', 'Validation message'),
  noContrast: () => boolean('No contrast', false),
  prefixIcon: () => select('Icon', Object.keys(icons), 'user'),
  required: () => boolean('Required', false),
}

export const Overview = () => (
  <Input
    disabled={params.disabled()}
    name="test"
    label={params.label()}
    explanationMessage={params.explanationMessage()}
    validationMessage={params.validationMessage()}
    required={params.required()}
  />
)

export const PrefixIcon = () => (
  <Input
    disabled={params.disabled()}
    name="test"
    label={params.label()}
    explanationMessage={params.explanationMessage()}
    validationMessage={params.validationMessage()}
    prefixIcon={params.prefixIcon()}
    required={params.required()}
  />
)

export const Contrast = () => (
  <ContrastWrapper>
    <Input
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
