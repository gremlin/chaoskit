import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { createContext } from 'react';

import {
  FormLabel, FormFooter, Inline, List, ListItem,
} from '.';

import { config } from '../helpers/config';

export const RadioGroupContext = createContext();
export const RadioGroupProvider = RadioGroupContext.Provider;

const RadioGroup = ({
  children,
  className,
  explanationMessage,
  inline,
  label,
  name,
  onChange,
  selectedValue,
  validationMessage,
  required,
  ...opts
}) => {
  const renderChildren = () => React.Children.map(children, (child) => {
    const onChangeFunc = () => {
      onChange(name, child.props.value);
    };

    return (
      <RadioGroupProvider
        value={{ selectedValue, name, onChange: onChangeFunc }}
      >
        {inline ? child : <ListItem>{child}</ListItem>}
      </RadioGroupProvider>
    );
  });

  const renderItems = () => {
    if (inline) {
      return <Inline className="form-inlineCombo">{renderChildren()}</Inline>;
    }

    return <List type={['space']}>{renderChildren()}</List>;
  };

  const classes = cx('form-group', className, {
    [config.classes.notValid]: validationMessage,
    [config.classes.required]: required,
  });

  return (
    <div className={classes} {...opts}>
      <FormLabel required={required} id="">
        {label}
      </FormLabel>
      {renderItems()}
      <FormFooter
        explanationMessage={explanationMessage}
        validationMessage={validationMessage}
      />
    </div>
  );
};

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
