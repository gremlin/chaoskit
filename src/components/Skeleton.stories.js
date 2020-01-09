import { storiesOf } from '@storybook/react';

import { Inline, Skeleton } from '.';
import Contrast from '../../.storybook/components/Contrast';
import ListItem from './ListItem';

const SkeletonExample = () => (
  <Inline>
    <ListItem>
      <Skeleton css={{ width: 200, height: 50 }} />
    </ListItem>
    <ListItem>
      <Skeleton css={{ width: 50, height: 50, borderRadius: '50%' }} />
    </ListItem>
  </Inline>
);

storiesOf('Components|Skeleton', module)
  .add('Overview', () => <SkeletonExample />)
  .add('Contrast', () => (
    <Contrast>
      <SkeletonExample />
    </Contrast>
  ));
