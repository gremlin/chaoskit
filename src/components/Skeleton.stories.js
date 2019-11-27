import { storiesOf } from '@storybook/react';

import { Inline, Skeleton } from '.';
import Contrast from '../../.storybook/components/Contrast';

const SkeletonExample = () => (
  <Inline>
    <Skeleton css={{ width: 200, height: 50 }} />
    <Skeleton css={{ width: 50, height: 50, borderRadius: '50%' }} />
  </Inline>
);

storiesOf('Components|Skeleton', module)
  .add('Overview', () => <SkeletonExample />)
  .add('Contrast', () => (
    <Contrast>
      <SkeletonExample />
    </Contrast>
  ));
