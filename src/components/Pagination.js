import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const Pagination = ({
  hasPrevPage,
  hasNextPage,
  prevPageLink,
  nextPageLink,
  ...opts
}) => (hasPrevPage || hasNextPage ? (
  <div className="pagination" {...opts}>
    <Button
      rel={hasPrevPage ? 'prev' : null}
      type="default"
      route={hasPrevPage ? prevPageLink : null}
      disabled={!hasPrevPage}
    >
        Previous
    </Button>
    <Button
      rel={hasNextPage ? 'next' : null}
      type="default"
      route={hasNextPage ? nextPageLink : null}
      disabled={!hasNextPage}
    >
        Next
    </Button>
  </div>
) : null);

Pagination.propTypes = {
  hasPrevPage: PropTypes.bool.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  prevPageLink: PropTypes.string.isRequired,
  nextPageLink: PropTypes.string.isRequired,
};

export default Pagination;
