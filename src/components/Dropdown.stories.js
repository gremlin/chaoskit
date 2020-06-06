import { boolean, select } from '@storybook/addon-knobs'

import Dropdown, { DropdownMenuItemStyles } from './Dropdown'
import DropdownHeader from './DropdownHeader'
import List from './List'
import ListItem from './ListItem'
import { params as buttonParams } from './Button.stories'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
}

const params = {
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
  showArrow: () => boolean('showArrow', false),
  trigger: {
    ...buttonParams,
  },
}

export const Overview = () => (
  <Dropdown
    showArrow={params.showArrow()}
    placement={params.placement()}
    trigger={{
      label: params.trigger.label(),
      props: {
        disabled: params.trigger.disabled(),
        type: params.trigger.type(),
        size: params.trigger.size(),
      },
    }}
  >
    <p>Hello from the dropdown!</p>
  </Dropdown>
)

export const Menu = () => (
  <Dropdown
    showArrow={params.showArrow()}
    placement={params.placement()}
    trigger={{
      label: params.trigger.label(),
      props: {
        disabled: params.trigger.disabled(),
        type: params.trigger.type(),
        size: params.trigger.size(),
      },
    }}
  >
    <DropdownHeader>Menu Header</DropdownHeader>
    <List space="small">
      <ListItem>
        <a
          href="https://www.gremlin.com"
          css={(theme) => DropdownMenuItemStyles(theme)}
        >
          Menu link
        </a>
      </ListItem>
      <ListItem>
        <a
          href="https://www.gremlin.com"
          css={(theme) => DropdownMenuItemStyles(theme, { active: true })}
        >
          Active Menu link
        </a>
      </ListItem>
    </List>
  </Dropdown>
)
