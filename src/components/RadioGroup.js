import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FormLabel, FormFooter, Inline, List, ListItem, Radio } from '.';
import { config } from '../helpers/config';

class RadioGroup extends React.Component {
  state = {
    selectedValue: '',
  };

  componentWillMount() {
    const { selectedValue } = this.props;

    this.setState({
      selectedValue,
    });
  }

  componentWillReceiveProps(newProps) {
    const { selectedValue } = this.props;

    if (newProps.selectedValue !== selectedValue) {
      this.setState({
        selectedValue: newProps.selectedValue,
      });
    }
  }

  handleChange = (name, value) => {
    this.setState({
      selectedValue: value,
    });
  };

  renderChildren = () => {
    const { children, name, inline, onChange } = this.props;
    const { selectedValue } = this.state;

    let returnChild = null;

    return React.Children.map(children, (child) => {
      if (child.type === Radio) {
        const onChangeFunc = () => {
          if (child.props.value) {
            if (onChange) {
              this.handleChange(name, child.props.value);
              onChange(name, child.props.value);
            } else {
              this.handleChange(name, child.props.value);
            }
          }
        };

        returnChild = React.cloneElement(child, {
          onChange: onChangeFunc,
          selectedValue,
          name,
        });
      } else {
        returnChild = child;
      }

      if (inline) {
        return returnChild;
      }

      return <ListItem>{returnChild}</ListItem>;
    });
  };

  renderItems = () => {
    const { inline } = this.props;

    if (inline) {
      return <Inline>{this.renderChildren()}</Inline>;
    }

    return <List type={['space']}>{this.renderChildren()}</List>;
  };

  render() {
    const {
      className,
      explanationMessage,
      label,
      required,
      validationMessage,
    } = this.props;
    const classes = cx('form-group', className, {
      [config.classes.notValid]: validationMessage,
      [config.classes.required]: required,
    });

    return (
      <div className={classes}>
        <FormLabel required={required} id="">
          {label}
        </FormLabel>
        {this.renderItems()}
        <FormFooter
          explanationMessage={explanationMessage}
          validationMessage={validationMessage}
        />
      </div>
    );
  }
}

RadioGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  validationMessage: PropTypes.string,
  required: PropTypes.bool,
};

export default RadioGroup;
