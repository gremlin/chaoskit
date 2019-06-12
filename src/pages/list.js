import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Live from '../docs/Live';
import Docs from '../docs/Docs';
import { List, ListItem } from '../components';

const ListExample = `
<Fragment>
  <h4>Default</h4>
  <List>
    <ListItem>Child</ListItem>
    <ListItem>Another!</ListItem>
  </List>
  <h4>Space</h4>
  <List space="large">
    <ListItem>Child</ListItem>
    <ListItem>Another!</ListItem>
  </List>
  <h4>Space + border</h4>
  <List space="medium" border>
    <ListItem>Child</ListItem>
    <ListItem>Another!</ListItem>
  </List>
  <h4>Space + border + number</h4>
  <List space="medium" border type="numbers">
    <ListItem>Child</ListItem>
    <ListItem>Another!</ListItem>
  </List>
  <h4>Space + circles + border</h4>
  <List space="large" border type="circles">
    <ListItem>Child</ListItem>
    <ListItem>Another!</ListItem>
  </List>
</Fragment>
`.trim();

const ListScope = {
  List,
  ListItem,
};

const ListPropDescriptions = {
  type: "<code>oneOf(['space', 'border', 'number', 'circles'])</code>", // eslint-disable-line single-quotes
};

const ListDocs = () => (
  <BaseLayout pageTitle="List">
    <h3>ListItem</h3>
    <Docs component={ListItem} />
    <h3>List</h3>
    <Live
      code={ListExample}
      scope={ListScope}
      component={List}
      propDescriptions={ListPropDescriptions}
    />
  </BaseLayout>
);

export default ListDocs;
