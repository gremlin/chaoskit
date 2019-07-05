import PropTypes from 'prop-types';
import cx from 'classnames';

const FormFooter = ({
  className,
  explanationMessage,
  validationMessage,
  ...opts
}) =>
  explanationMessage || validationMessage ? (
    <div
      css={theme => [
        {
          fontSize: theme.fontSize.small,
          lineHeight: theme.lineHeight.small,

          [theme.mq.medium]: {
            display: 'flex',
            width: '100%',
          },
        },
      ]}
      className={cx('CK__FormFooter', className)}
      {...opts}
    >
      {explanationMessage && (
        <div
          css={theme => [
            {
              color: theme.fontColor.muted,
              marginTop: theme.space.xsmall,

              [theme.mq.medium]: {
                '&:not(:only-child)': {
                  marginRight: theme.space.small,
                },
              },
            },

            theme.settings.contrast &&
              theme.settings.formContrast && {
                '.u-contrast &': {
                  color: theme.contrast.base,
                },
              },
          ]}
        >
          {explanationMessage}
        </div>
      )}
      {validationMessage && (
        <div
          css={theme => [
            {
              color: theme.color.danger.base,
              marginTop: theme.space.xsmall,

              [theme.mq.medium]: {
                marginLeft: 'auto',
              },
            },

            theme.settings.contrast &&
              theme.settings.formContrast && {
                '.u-contrast &': {
                  color: theme.contrast.base,
                },
              },
          ]}
        >
          {validationMessage}
        </div>
      )}
    </div>
  ) : null;

FormFooter.propTypes = {
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
};

export default FormFooter;
