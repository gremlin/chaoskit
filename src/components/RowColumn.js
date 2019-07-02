import PropTypes from 'prop-types';
import cx from 'classnames';

const columns = 12;

const RowColumn = ({
  className, offset, order, size, ...opts
}) => {
  const percentWidth = (columnSize) => {
    const calc = (100 / columns) * columnSize;

    return `${calc}% !important`;
  };

  return (
    <div
      css={theme => [
        //
        // Size
        //

        size.base && {
          flexBasis: percentWidth(size.base),
          maxWidth: percentWidth(size.base),
        },

        size.small && {
          [theme.mq.small]: {
            flexBasis: percentWidth(size.small),
            maxWidth: percentWidth(size.small),
          },
        },

        size.medium && {
          [theme.mq.medium]: {
            flexBasis: percentWidth(size.medium),
            maxWidth: percentWidth(size.medium),
          },
        },

        size.large && {
          [theme.mq.large]: {
            flexBasis: percentWidth(size.large),
            maxWidth: percentWidth(size.large),
          },
        },

        size.xlarge && {
          [theme.mq.xlarge]: {
            flexBasis: percentWidth(size.xlarge),
            maxWidth: percentWidth(size.xlarge),
          },
        },

        //
        // Offset
        //

        offset.base && {
          marginLeft: percentWidth(offset.base),
        },

        offset.small && {
          [theme.mq.small]: {
            marginLeft: percentWidth(offset.small),
          },
        },

        offset.medium && {
          [theme.mq.medium]: {
            marginLeft: percentWidth(offset.medium),
          },
        },

        offset.large && {
          [theme.mq.large]: {
            marginLeft: percentWidth(offset.large),
          },
        },

        offset.xlarge && {
          [theme.mq.xlarge]: {
            marginLeft: percentWidth(offset.xlarge),
          },
        },

        //
        // Source order
        //

        order.base && {
          order: order.base === 'first' ? -1 : 1,
        },

        order.small && {
          [theme.mq.small]: {
            order: order.small === 'first' ? -1 : 1,
          },
        },

        order.medium && {
          [theme.mq.medium]: {
            order: order.medium === 'first' ? -1 : 1,
          },
        },

        order.large && {
          [theme.mq.large]: {
            order: order.large === 'first' ? -1 : 1,
          },
        },

        order.xlarge && {
          [theme.mq.xlarge]: {
            order: order.xlarge === 'first' ? -1 : 1,
          },
        },
      ]}
      className={cx('CK__RowColumn', className)}
      {...opts}
    />
  );
};

RowColumn.propTypes = {
  className: PropTypes.string,
  size: PropTypes.shape({
    base: PropTypes.number,
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
    xlarge: PropTypes.number,
  }),
  offset: PropTypes.shape({
    base: PropTypes.number,
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
    xlarge: PropTypes.number,
  }),
  order: PropTypes.shape({
    base: PropTypes.oneOf(['first', 'last']),
    small: PropTypes.oneOf(['first', 'last']),
    medium: PropTypes.oneOf(['first', 'last']),
    large: PropTypes.oneOf(['first', 'last']),
    xlarge: PropTypes.oneOf(['first', 'last']),
  }),
};

RowColumn.defaultProps = {
  size: {},
  offset: {},
  order: {},
};

export default RowColumn;
