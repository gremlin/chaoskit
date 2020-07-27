import { boolean, select } from '@storybook/addon-knobs'

import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

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
      [null, 'xsmall', 'small', 'base', 'medium', 'large', 'xlarge'],
      null
    ),
  type: () => select('Type', [null, 'numbers', 'circles'], null),
}

export const Overview = () => (
  <List border={params.border()} space={params.space()} type={params.type()}>
    <ListItem>List item 1</ListItem>
    <ListItem>List item 2</ListItem>
  </List>
)

export const Contrast = () => (
  <ContrastWrapper>
    <List border={params.border()} space={params.space()} type={params.type()}>
      <ListItem>List item 1</ListItem>
      <ListItem>List item 2</ListItem>
    </List>
  </ContrastWrapper>
)
