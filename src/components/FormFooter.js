import PropTypes from 'prop-types';
import React from 'react';

const FormFooter = ({ explanationMessage, validationMessage, ...opts }) =>
  explanationMessage || validationMessage ? (
    <div className="form-footer" {...opts}>
      {explanationMessage && (
        <div className="form-footerExplanation">{explanationMessage}</div>
      )}
      {validationMessage && (
        <div className="form-footerError">{validationMessage}</div>
      )}
    </div>
  ) : null;

FormFooter.propTypes = {
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
};

export default FormFooter;
