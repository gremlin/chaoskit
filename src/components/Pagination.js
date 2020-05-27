import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from 'emotion-theming'

import Button from './Button'

const Pagination = ({
  className,
  hasPrevPage,
  hasNextPage,
  prevPageProps,
  nextPageProps,
  ...rest
}) => {
  const theme = useTheme()

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: theme.space.xlarge,
      }}
      className={clsx('CK__Pagination', className)}
      {...rest}
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
  )
}

Pagination.propTypes = {
  className: PropTypes.string,
  hasPrevPage: PropTypes.bool.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  prevPageProps: PropTypes.object.isRequired,
  nextPageProps: PropTypes.object.isRequired,
}

export default Pagination
