import { action } from '@storybook/addon-actions'

import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Close from './Close'

export default {
  title: 'Components/Close',
  component: Close,
}

export const Overview = () => <Close onClick={action('Clicked')} />

export const Contrast = () => (
  <ContrastWrapper>
    <Close onClick={action('Clicked')} />
  </ContrastWrapper>
)
