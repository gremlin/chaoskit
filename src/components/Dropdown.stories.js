import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Dropdown, { DropdownMenuItemStyles } from './Dropdown';
import DropdownHeader from './DropdownHeader';
import List from './List';
import ListItem from './ListItem';
import { params as buttonParams } from './Button.stories';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

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

export const Overview = () => (
  <Dropdown
    onStart={action('opening')}
    onComplete={action('opened')}
    onReverseStart={action('closing')}
    onReverseComplete={action('closed')}
    showArrow={params.showArrow()}
    position={params.position()}
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
);

export const Menu = () => (
  <Dropdown
    showArrow={params.showArrow()}
    position={params.position()}
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
);
