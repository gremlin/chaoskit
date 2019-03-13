import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import {
  Dropdown, DropdownHeader, List, ListItem,
} from '.';

const params = {
  className: () => text('Class', ''),
  content: () => text('Content', 'Hello from the dropdown!'),
  position: () => select(
    'Position',
    ['left', 'center', 'right', 'up-left', 'up-center', 'up-right'],
    'left',
  ),
  showArrow: () => boolean('Show Arrow', false),
  trigger: {
    label: () => text('Trigger label', 'Dropdown'),
    type: () => select(
      'Trigger type',
      [
        'reset',
        'default',
        'primary',
        'secondary',
        'teal',
        'danger',
        'outlinePrimary',
      ],
      'default',
    ),
  },
};

storiesOf('Dropdown', module)
  .addParameters({
    info: {
      text: `
        Common use-cases for the Dropdown component include navigation sub-items
        and quick-actions. On small devices, dropdowns may not be a good option to
        avoid unecessary scrolling where on-page options may serve your users
        better.
      `,
    },
  })
  .add('Variations', () => (
    <Dropdown
      showArrow={params.showArrow()}
      position={params.position()}
      trigger={{
        label: params.trigger.label(),
        props: { type: params.trigger.type() },
      }}
    >
      {params.content()}
    </Dropdown>
  ))
  .add('Menu', () => (
    <Dropdown
      showArrow={params.showArrow()}
      position={params.position()}
      trigger={{
        label: params.trigger.label(),
        props: { type: params.trigger.type() },
      }}
    >
      <DropdownHeader>Menu Header</DropdownHeader>
      <List className="dropdown-menu">
        <ListItem>
          <a href="http://www.gremlin.com">Menu link</a>
        </ListItem>
        <ListItem>
          <a className="is-active" href="http://www.gremlin.com">
            Active Menu link
          </a>
        </ListItem>
      </List>
    </Dropdown>
  ));
