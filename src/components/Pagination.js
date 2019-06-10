import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from './Button';

const Pagination = ({
  className,
  hasPrevPage,
  hasNextPage,
  prevPageLink,
  nextPageLink,
  ...opts
}) => (hasPrevPage || hasNextPage ? (
  <div
    css={theme => ({
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: theme.space.xlarge,
    })}
    className={cx('CK__Pagination', className)}
    {...opts}
  >
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
  className: PropTypes.string,
  hasPrevPage: PropTypes.bool.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  prevPageLink: PropTypes.string.isRequired,
  nextPageLink: PropTypes.string.isRequired,
};

export default Pagination;
