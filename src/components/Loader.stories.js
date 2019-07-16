import { storiesOf } from '@storybook/react';

import { Loader } from '.';

storiesOf('Components|Loader', module).add('Overview', () => <Loader />, {
  notes:
    '> Loaders are just as maluable as any piece of text; with both their size and color inheritting from its own, or parent selectors.',
});
