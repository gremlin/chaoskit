import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import {
  Dropdown, DropdownHeader, List, ListItem,
} from '.';
import { params as buttonParams } from './Button.stories';

const params = {
  className: () => text('class', ''),
  children: () => text('children', 'Hello from the dropdown!'),
  position: () => select(
    'Position',
    ['left', 'center', 'right', 'up-left', 'up-center', 'up-right'],
    'left',
  ),
  showArrow: () => boolean('showArrow', false),
  trigger: {
    ...buttonParams,
  },
};

storiesOf('Components|Dropdown', module)
  .addParameters({
    info: {
      text:
        'Common use-cases for the Dropdown component include navigation sub-items and quick-actions. On small devices, dropdowns may not be a good option to avoid unecessary scrolling where on-page options may serve your users better.',
    },
  })
  .add('Overview', () => (
    <Dropdown
      showArrow={params.showArrow()}
      position={params.position()}
      trigger={{
        label: params.trigger.label(),
        props: {
          className: params.trigger.className(),
          disabled: params.trigger.disabled(),
          type: params.trigger.type(),
          size: params.trigger.size(),
          noRadius: params.trigger.noRadius(),
        },
      }}
    >
      {params.children()}
    </Dropdown>
  ))
  .add('Menu', () => (
    <Dropdown
      showArrow={params.showArrow()}
      position={params.position()}
      trigger={{
        label: params.trigger.label(),
        props: {
          className: params.trigger.className(),
          disabled: params.trigger.disabled(),
          type: params.trigger.type(),
          size: params.trigger.size(),
          noRadius: params.trigger.noRadius(),
        },
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
