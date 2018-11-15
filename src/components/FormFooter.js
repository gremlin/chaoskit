import PropTypes from 'prop-types';
import React from 'react';

const FormFooter = (props) => {
  const { explanationMessage, validationMessage } = props;

  return (
    (explanationMessage || validationMessage) ? (
      <div className="form-footer">
        {explanationMessage &&
          <div className="form-footerExplanation">{explanationMessage}</div>
        }
        {validationMessage &&
          <div className="form-footerError">{validationMessage}</div>
        }
      </div>
    ) : null
  );
};

FormFooter.propTypes = {
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
};

export default FormFooter;
