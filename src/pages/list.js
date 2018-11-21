import React from 'react';

import FoundationLayout from '../layouts/Foundation';
import Live from '../docs/Live';
import { List, ListItem } from '../components';

const ListExample = `
<Fragment>
  <h4>Default</h4>
  <List>
    <ListItem>Child</ListItem>
    <ListItem>Another!</ListItem>
  </List>
  <h4>Space</h4>
  <List type={['space']}>
    <ListItem>Child</ListItem>
    <ListItem>Another!</ListItem>
  </List>
  <h4>Space + border</h4>
  <List type={['space', 'border']}>
    <ListItem>Child</ListItem>
    <ListItem>Another!</ListItem>
  </List>
  <h4>Space + border + number</h4>
  <List type={['space', 'border', 'number']}>
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
  type: "<code>oneOf(['space', 'border', 'number'])</code>", // eslint-disable-line single-quotes
};

const ListDocs = () => (
  <FoundationLayout pageTitle="List">
    <Live
      code={ListExample}
      scope={ListScope}
      component={List}
      propDescriptions={ListPropDescriptions}
    />
  </FoundationLayout>
);

export default ListDocs;