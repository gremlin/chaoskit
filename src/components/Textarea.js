import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import TextareaAutoSize from 'react-textarea-autosize';

import { FormFooter, FormLabel } from '.';
import { generateUUID } from '../helpers/utility';
import { config } from '../helpers/config';

class Textarea extends React.Component {
  textareaRef = React.createRef();

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
    const $textarea = this.textareaRef.current;

    if (focus) {
      $textarea.focus();
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
    const $textarea = this.textareaRef.current;

    if (prevProps.focus !== focus && focus) {
      $textarea.focus();
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
      className,
      disabled,
      focus,
      label,
      name,
      placeholder,
      validationMessage,
      explanationMessage,
      required,
    } = this.props;
    const { value } = this.state;

    const classes = cx('form-group', className, {
      [config.classes.notValid]: validationMessage,
      [config.classes.required]: required,
    });

    return (
      <div className={classes}>
        <FormLabel id={this.id}>{label}</FormLabel>
        <TextareaAutoSize
          id={this.id}
          disabled={disabled}
          focus={focus ? 'true' : null}
          name={name}
          value={value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          placeholder={placeholder}
          inputRef={this.textareaRef}
        />
        <FormFooter
          explanationMessage={explanationMessage}
          validationMessage={validationMessage}
        />
      </div>
    );
  }
}

Textarea.propTypes = {
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Textarea;
