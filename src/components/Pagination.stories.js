import { action } from '@storybook/addon-actions';

import Pagination from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const Overview = () => (
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
);
