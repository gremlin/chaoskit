import { boolean, select } from '@storybook/addon-knobs'

import List from './List'
import ListItem from './ListItem'

export default {
  title: 'Components/List',
  component: List,
}

const params = {
  border: () => boolean('Border', false),
  space: () =>
    select(
      'Space',
      [0, 'xsmall', 'small', 'base', 'medium', 'large', 'xlarge'],
      0
    ),
  type: () => select('Type', [null, 'numbers', 'circles'], null),
}

export const Overview = () => (
  <List border={params.border()} space={params.space()} type={params.type()}>
    <ListItem>List item 1</ListItem>
    <ListItem>List item 2</ListItem>
  </List>
)
