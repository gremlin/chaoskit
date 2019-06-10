import PropTypes from 'prop-types';
import cx from 'classnames';

const Inline = ({
  className, size, wrap, ...opts
}) => (
  <div
    css={theme => [
      {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        listStyle: 'none',
        padding: '0',
        margin: `-${theme.space.base}px 0 0 -${theme.space.base}px`,

        '> *': {
          marginLeft: `${theme.space.base}px !important`,
          marginTop: `${theme.space.base}px !important`,
        },
      },

      size === 'small' && {
        margin: `-${theme.space.small}px 0 0 -${theme.space.small}px`,

        '> *': {
          marginLeft: `${theme.space.small}px !important`,
          marginTop: `${theme.space.small}px !important`,
        },
      },

      size === 'medium' && {
        margin: `-${theme.space.medium}px 0 0 -${theme.space.medium}px`,

        '> *': {
          marginLeft: `${theme.space.medium}px !important`,
          marginTop: `${theme.space.medium}px !important`,
        },
      },

      size === 'large' && {
        margin: `-${theme.space.large}px 0 0 -${theme.space.large}px`,

        '> *': {
          marginLeft: `${theme.space.large}px !important`,
          marginTop: `${theme.space.large}px !important`,
        },
      },

      size === 'xlarge' && {
        margin: `-${theme.space.xlarge}px 0 0 -${theme.space.xlarge}px`,

        '> *': {
          marginLeft: `${theme.space.xlarge}px !important`,
          marginTop: `${theme.space.xlarge}px !important`,
        },
      },

      !wrap && {
        whiteSpace: 'nowrap',
        flexWrap: 'nowrap',
      },
    ]}
    className={cx('CK__Inline', className)}
    {...opts}
  />
);

Inline.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'medium', 'large', 'xlarge']),
  wrap: PropTypes.bool,
};

Inline.defaultProps = {
  wrap: true,
};

export default Inline;
