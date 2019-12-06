import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from 'emotion-theming';

import Button from './Button';

const Pagination = ({
  className,
  hasPrevPage,
  hasNextPage,
  prevPageProps,
  nextPageProps,
  ...opts
}) => {
  const theme = useTheme();

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: theme.space.xlarge,
      }}
      className={cx('CK__Pagination', className)}
      {...opts}
    >
      <Button
        rel={hasPrevPage ? 'prev' : null}
        type="default"
        size="small"
        disabled={!hasPrevPage}
        {...prevPageProps}
      >
        Previous
      </Button>
      <Button
        rel={hasNextPage ? 'next' : null}
        type="default"
        size="small"
        disabled={!hasNextPage}
        {...nextPageProps}
      >
        Next
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  hasPrevPage: PropTypes.bool.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  prevPageProps: PropTypes.object.isRequired,
  nextPageProps: PropTypes.object.isRequired,
};

export default Pagination;
