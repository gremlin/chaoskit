import { select, text } from '@storybook/addon-knobs'

import Tooltip from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
}

const params = {
  content: () => text('Content', '😜 Hey there!'),
  placement: () =>
    select(
      'Placement',
      [
        'top',
        'top-start',
        'top-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'auto',
        'auto-start',
        'auto-end',
      ],
      'bottom'
    ),
}

// @TODO For docs
// The Tooltip component can be wrapped around any fellow component or standard HTML; just make sure it&apos;s only one child!
// Tooltip content can contain normal strings or other components. Go crazy!

export const Overview = () => (
  <Tooltip content={params.content()} placement={params.placement()}>
    <div css={{ display: 'inline-block' }}>Hover</div>
  </Tooltip>
)

export const DarkTheme = () => (
  <Tooltip
    variation="dark"
    content={params.content()}
    placement={params.placement()}
  >
    <div css={{ display: 'inline-block' }}>Hover</div>
  </Tooltip>
)

export const Interactive = () => (
  <Tooltip
    content={params.content()}
    placement={params.placement()}
    interactive
  >
    <div css={{ display: 'inline-block' }}>Interact with tooltip content!</div>
  </Tooltip>
)
