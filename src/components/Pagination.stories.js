import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Pagination from './Pagination';

storiesOf('Components|Pagination', module).add('Overview', () => (
  <Pagination
    hasPrevPage
    prevPageProps={{
      onClick: action('Prev page click'),
    }}
    hasNextPage
    nextPageProps={{
      onClick: action('Next page click'),
    }}
  />
));
