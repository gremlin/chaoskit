import { select, text } from '@storybook/addon-knobs'

import Tooltip from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
}

const params = {
  content: () => text('Content', '😜 Hey there!'),
  placement: () =>
    select('Position', ['top', 'bottom', 'left', 'right'], 'bottom'),
  trigger: () => text('Trigger', 'Trigger'),
}

// @TODO For docs
// The Tooltip component can be wrapped around any fellow component or standard HTML; just make sure it&apos;s only one child!
// Tooltip content can contain normal strings or other components. Go crazy!

export const Overview = () => (
  <Tooltip content={params.content()} placement={params.placement()}>
    <div css={{ display: 'inline-block' }}>{params.trigger()}</div>
  </Tooltip>
)
