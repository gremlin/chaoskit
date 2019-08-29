import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import { Dropdown, DropdownHeader, List, ListItem } from '.';
import { DropdownMenuItemStyles } from './Dropdown';
import { params as buttonParams } from './Button.stories';

const params = {
  position: () =>
    select(
      'Position',
      ['left', 'center', 'right', 'up-left', 'up-center', 'up-right'],
      'left'
    ),
  showArrow: () => boolean('showArrow', false),
  trigger: {
    ...buttonParams,
  },
};

storiesOf('Components|Dropdown', module)
  .add(
    'Overview',
    () => (
      <Dropdown
        showArrow={params.showArrow()}
        position={params.position()}
        trigger={{
          label: params.trigger.label(),
          props: {
            disabled: params.trigger.disabled(),
            type: params.trigger.type(),
            size: params.trigger.size(),
            noRadius: params.trigger.noRadius(),
          },
        }}
      >
        <p>Hello from the dropdown!</p>
      </Dropdown>
    ),
    {
      notes: `Common use-cases for the Dropdown component include navigation sub-items and quick-actions.

        > On small devices, dropdowns may not be a good option to avoid unecessary scrolling where on-page options may serve your users better.`,
    }
  )
  .add('Menu', () => (
    <Dropdown
      showArrow={params.showArrow()}
      position={params.position()}
      trigger={{
        label: params.trigger.label(),
        props: {
          disabled: params.trigger.disabled(),
          type: params.trigger.type(),
          size: params.trigger.size(),
          noRadius: params.trigger.noRadius(),
        },
      }}
    >
      <DropdownHeader>Menu Header</DropdownHeader>
      <List space="small">
        <ListItem>
          <a
            href="https://www.gremlin.com"
            css={theme => DropdownMenuItemStyles(theme)}
          >
            Menu link
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://www.gremlin.com"
            css={theme => DropdownMenuItemStyles(theme, { active: true })}
          >
            Active Menu link
          </a>
        </ListItem>
      </List>
    </Dropdown>
  ));
