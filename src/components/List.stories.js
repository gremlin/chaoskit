import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import { List, ListItem } from '.';

const params = {
  border: () => boolean('Border', false),
  space: () =>
    select('Space', [null, 'small', 'base', 'medium', 'large', 'xlarge'], null),
  type: () => select('Type', [null, 'numbers', 'circles'], null),
};

storiesOf('Components|List', module).add('Overview', () => (
  <List border={params.border()} space={params.space()} type={params.type()}>
    <ListItem>List item 1</ListItem>
    <ListItem>List item 2</ListItem>
  </List>
));
