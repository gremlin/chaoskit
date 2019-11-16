import PropTypes from 'prop-types';
import cx from 'classnames';
import TextareaAutoSize from 'react-textarea-autosize';

import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormFooter from './FormFooter';
import { form } from '../assets/styles/utility';
import { generateUUID } from '../helpers/utility';

const Textarea = ({
  className,
  label,
  name,
  noContrast,
  validationMessage,
  explanationMessage,
  required,
  wrapperProps,
  ...opts
}) => {
  const id = `${name}-${generateUUID()}`;

  return (
    <FormGroup {...wrapperProps}>
      <FormLabel required={required} error={!!validationMessage} htmlFor={id}>
        {label}
      </FormLabel>
      <TextareaAutoSize
        css={theme => [
          form.base(theme),
          form.input(theme, { error: validationMessage, noContrast }),
          {
            // Remove default style in browsers that support `appearance`
            appearance: 'none',

            // Remove default vertical scrollbar in IE 8/9/10/11.
            overflow: 'auto',
            // Improve readability and alignment in all browsers.
            verticalAlign: 'top',
            // Only allow vertical resizing
            resize: 'vertical',
            // Force minimum height
            minHeight: theme.height.base * 2,
            // Allow `textarea` to be controlled via [row] more explicitly
            height: 'auto',
            // Style
            padding: `${theme.space.small + theme.space.xsmall}px ${
              theme.space.base
            }px`,
            maxHeight: 300,
          },
        ]}
        className={cx('CK__Textarea', className)}
        id={id}
        name={name}
        {...opts}
      />
      <FormFooter
        explanationMessage={explanationMessage}
        validationMessage={validationMessage}
      />
    </FormGroup>
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  noContrast: PropTypes.bool,
  wrapperProps: PropTypes.object,
};

export default Textarea;
