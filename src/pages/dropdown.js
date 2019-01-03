import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import { Dropdown, Inline, List, ListItem } from '../components';
import Live from '../docs/Live';

const DropdownExample = `
class Example extends React.Component {
  render() {
    return (
      <Inline>
        <Dropdown trigger={{ label: 'Dropdown Content', props: { type: 'primary' }}}>
          <p>👋 from the dropdown!</p>
        </Dropdown>
        <Dropdown position="up-center" trigger={{ label: 'Dropdown Menu', props: { type: 'secondary' }}}>
          <h5 className="u-mb--small">Menu</h5>
          <List className="dropdown-menu">
            <ListItem><a href="#">Menu link</a></ListItem>
            <ListItem><a href="#">Menu link</a></ListItem>
          </List>
        </Dropdown>
      </Inline>
    )
  }
}
`.trim();

const DropdownPropDescriptions = {
  position: "<code>oneOf(['left', 'center', 'right', 'up-left', 'up-center', 'up-right'])</code>", // eslint-disable-line single-quotes
  size: "<code>oneOf(['default', 'small'])</code>", // eslint-disable-line single-quotes
};

const DropdownScope = {
  Dropdown,
  Inline,
  List,
  ListItem,
};

const DropdownDocs = () => (
  <BaseLayout pageTitle="Dropdown">
    <p>Common use-cases for the Dropdown component include navigation sub-items and quick-actions. On small devices, dropdowns may not be a good option to avoid unecessary scrolling where on-page options may serve your users better.</p>
    <Live
      code={DropdownExample}
      scope={DropdownScope}
      component={Dropdown}
      propDescriptions={DropdownPropDescriptions}
    />
  </BaseLayout>
);

export default DropdownDocs;
