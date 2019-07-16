import PropTypes from 'prop-types';
import cx from 'classnames';

const columnOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const RowColumn = ({ className, offset, order, size, ...opts }) => {
  const percentWidth = columnSize => {
    const calc = (100 / columnOptions.length) * columnSize;

    return `${calc}%`;
  };

  return (
    <div
      css={theme => [
        // Default child elements of row to 100% width until size modifiers kick-in
        {
          flex: '0 0 100%',
          maxWidth: '100%',
        },

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
    base: PropTypes.oneOf(columnOptions),
    small: PropTypes.oneOf(columnOptions),
    medium: PropTypes.oneOf(columnOptions),
    large: PropTypes.oneOf(columnOptions),
    xlarge: PropTypes.oneOf(columnOptions),
  }),
  offset: PropTypes.shape({
    base: PropTypes.oneOf(columnOptions),
    small: PropTypes.oneOf(columnOptions),
    medium: PropTypes.oneOf(columnOptions),
    large: PropTypes.oneOf(columnOptions),
    xlarge: PropTypes.oneOf(columnOptions),
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
