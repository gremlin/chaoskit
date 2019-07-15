import { Children, createContext } from 'react';
import PropTypes from 'prop-types';

import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormFooter from './FormFooter';
import Inline from './Inline';
import List from './List';
import ListItem from './ListItem';

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
  const renderChildren = () =>
    Children.map(children, child => {
      const onChangeFunc = e => {
        onChange(e);
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
      return <Inline>{renderChildren()}</Inline>;
    }

    return <List space="base">{renderChildren()}</List>;
  };

  return (
    <FormGroup {...opts}>
      <FormLabel required={required} error={!!validationMessage} id="">
        {label}
      </FormLabel>
      {renderItems()}
      <FormFooter
        css={theme => [
          inline && {
            marginTop: theme.space.small,
          },
        ]}
        explanationMessage={explanationMessage}
        validationMessage={validationMessage}
      />
    </FormGroup>
  );
};

RadioGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  validationMessage: PropTypes.string,
  required: PropTypes.bool,
};

export default RadioGroup;
