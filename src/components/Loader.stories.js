import { storiesOf } from '@storybook/react';

import { Loader } from '.';

storiesOf('Components|Loader', module)
  .addParameters({
    info: {
      text:
        'While no one likes to wait; great things come to those that do. For those times, a loader is available to notify users some magic is happening behind the scenes.',
    },
  })
  .add('Overview', () => <Loader />);
