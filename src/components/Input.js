import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import MaskedInput from 'react-text-mask';

import FormFooter from './FormFooter';
import FormLabel from './FormLabel';
import Icon from './Icon';
import { generateUUID } from '../helpers/utility';
import { config } from '../helpers/config';

class Input extends React.Component {
  id = `${this.props.name}-${generateUUID()}`; // eslint-disable-line react/destructuring-assignment

  state = {
    value: '',
  };

  componentWillMount() {
    const { initialValue } = this.props;

    if (initialValue) {
      this.setState({ value: initialValue });
    }
  }

  componentDidMount() {
    const { focus } = this.props;

    if (focus && this.input) {
      this.input.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { initialValue } = this.props;

    if (nextProps.initialValue !== initialValue) {
      this.setState({
        value: nextProps.initialValue,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { focus } = this.props;

    if (prevProps.focus !== focus && focus) {
      this.input.focus();
    }
  }

  handleChange = (e) => {
    const { onChange } = this.props;
    this.setState({ value: e.target.value });

    if (onChange) {
      onChange(e.target.name, e.target.value);
    }
  };

  handleKeyPress = (e) => {
    const { onKeyPress } = this.props;

    if (onKeyPress) {
      onKeyPress(e);
    }
  };

  render() {
    const {
      autoComplete,
      className,
      disabled,
      focus,
      label,
      guide,
      mask,
      name,
      type,
      placeholder,
      validationMessage,
      explanationMessage,
      prefixIcon,
      required,
    } = this.props;
    const { value } = this.state;

    const classes = cx('form-group', className, {
      [config.classes.notValid]: validationMessage,
      [config.classes.required]: required,
    });

    const inputRender = () => {
      const defaultProps = {
        autoComplete,
        id: this.id,
        className: 'form-input',
        disabled,
        focus,
        name,
        type,
        value,
        onChange: this.handleChange,
        onKeyPress: this.handleKeyPress,
        placeholder,
        ref: (ref) => {
          this.input = ref;
        },
      };

      // `react-text-mask` does not support 'email' or 'number' input types
      if (mask && !['email', 'number'].includes(type)) {
        return <MaskedInput {...defaultProps} mask={mask} guide={guide} />;
      }

      return <input {...defaultProps} />;
    };

    return (
      <div className={classes}>
        <FormLabel id={this.id}>{label}</FormLabel>
        {prefixIcon ? (
          <div className="form-prefix-wrapper">
            <div className="form-prefix-content">
              <Icon icon={prefixIcon} />
            </div>
            {inputRender()}
          </div>
        ) : (
          inputRender()
        )}
        <FormFooter
          explanationMessage={explanationMessage}
          validationMessage={validationMessage}
        />
      </div>
    );
  }
}

Input.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,
  guide: PropTypes.bool,
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  prefixIcon: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  guide: false,
};

export default Input;
