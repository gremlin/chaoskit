import { boolean, select, text } from '@storybook/addon-knobs'

import { Button, Icon } from '.'

import ContrastWrapper from '../../.storybook/components/ContrastWrapper'
import icons from '../assets/icons/icons.json'

export default {
  title: 'Components/Button',
  component: Button,
  includeStories: ['Overview', 'IconOnly', 'Contrast'],
}

export const params = {
  disabled: () => boolean('Disabled', false),
  noContrast: () => boolean('No Contrast', false),
  icon: () => select('Icon', Object.keys(icons), 'check'),
  label: () => text('Label', 'Button'),
  loading: () => boolean('Loading', false),
  type: () =>
    select(
      'Type',
      ['reset', 'default', 'primary', 'secondary', 'danger', 'outlinePrimary'],
      'default'
    ),
  url: () => text('URL', ''),
  size: () => select('Size', ['base', 'xsmall', 'small'], 'base'),
}

// @TODO For docs
// When aligning buttons next to each other, consider using the Inline component for proper horizontal and vertical spacing

export const Overview = () => (
  <Button
    disabled={params.disabled()}
    loading={params.loading()}
    type={params.type()}
    size={params.size()}
    url={params.url()}
  >
    {params.label()}
  </Button>
)

// @TODO For docs
// Icon buttons only contain a single icon and can be used to indicate shortcuts.
// Icons are automatically sized based on the button size modifier provided

export const IconOnly = () => (
  <Button
    iconOnly
    disabled={params.disabled()}
    loading={params.loading()}
    type={params.type()}
    size={params.size()}
    url={params.url()}
  >
    <Icon icon={params.icon()} />
  </Button>
)

// @TODO For docs
// Automatically adapts to parent containers containing \`.u-contrast\`.
// If you'd like to override the contrast styles, you can apply the \`noContrast\` prop.

export const Contrast = () => (
  <ContrastWrapper>
    <Button
      disabled={params.disabled()}
      loading={params.loading()}
      type={params.type()}
      size={params.size()}
      noContrast={params.noContrast()}
      url={params.url()}
    >
      {params.label()}
    </Button>
  </ContrastWrapper>
)
