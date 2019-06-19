import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import {
  Dropdown,
  DropdownHeader,
  Inline,
  List,
  ListItem,
} from '../components';
import { DropdownMenuItemStyles } from '../components/Dropdown';
import Docs from '../docs/Docs';
import Live from '../docs/Live';

const DropdownExample = `
<Inline>
  <Dropdown trigger={{ label: 'Left', props: { type: 'primary' }}}>
    <p>👋 from the dropdown!</p>
  </Dropdown>
  <Dropdown position="center" trigger={{ label: 'Center', props: { type: 'primary' }}}>
    <p>👋 from the dropdown!</p>
  </Dropdown>
  <Dropdown position="right" trigger={{ label: 'Right', props: { type: 'primary' }}}>
    <p>👋 from the dropdown!</p>
  </Dropdown>
  <Dropdown position="up-left" trigger={{ label: 'Up Left', props: { type: 'primary' }}}>
    <p>👋 from the dropdown!</p>
  </Dropdown>
  <Dropdown position="up-center" trigger={{ label: 'Up Center', props: { type: 'primary' }}}>
    <p>👋 from the dropdown!</p>
  </Dropdown>
  <Dropdown position="up-right" trigger={{ label: 'Up Right', props: { type: 'primary' }}}>
    <p>👋 from the dropdown!</p>
  </Dropdown>
</Inline>
`.trim();

const DropdownPropDescriptions = {
  position:
    "<code>oneOf(['left', 'center', 'right', 'up-left', 'up-center', 'up-right'])</code>", // eslint-disable-line single-quotes
};

const DropdownScope = {
  Dropdown,
  DropdownHeader,
  Inline,
  List,
  ListItem,
  DropdownMenuItemStyles,
};

const DropdownDocs = () => (
  <BaseLayout pageTitle="Dropdown">
    <div css={{ textAlign: 'center' }}>
      <Dropdown
        showArrow
        position="up-center"
        trigger={{ label: 'Menu', props: { type: 'secondary' } }}
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
    </div>

    <p>
      Common use-cases for the Dropdown component include navigation sub-items
      and quick-actions. On small devices, dropdowns may not be a good option to
      avoid unecessary scrolling where on-page options may serve your users
      better.
    </p>
    <h3>DropdownHeader</h3>
    <Docs component={DropdownHeader} />
    <h3>Dropdown</h3>
    <Live
      code={DropdownExample}
      scope={DropdownScope}
      component={Dropdown}
      propDescriptions={DropdownPropDescriptions}
    />
  </BaseLayout>
);

export default DropdownDocs;
