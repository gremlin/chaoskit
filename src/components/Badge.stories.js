import { boolean, select, text } from '@storybook/addon-knobs'

import Badge from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
}

const params = {
  rounded: () => boolean('Rounded', false),
  label: () => text('Label', 'Badge'),
  type: () =>
    select('Type', ['default', 'secondary', 'primary', 'danger'], 'default'),
}

export const Overview = () => (
  <Badge
    rounded={params.rounded()}
    label={params.label()}
    type={params.type()}
  />
)
