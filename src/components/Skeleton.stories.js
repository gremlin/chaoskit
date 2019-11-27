import { storiesOf } from '@storybook/react';

import { Inline, Skeleton } from '.';

storiesOf('Components|Skeleton', module).add('Overview', () => (
  <Inline>
    <Skeleton css={{ width: 200, height: 50 }} />
    <Skeleton css={{ width: 50, height: 50, borderRadius: '50%' }} />
  </Inline>
));
