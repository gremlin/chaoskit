import { Children, createContext } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormFooter from './FormFooter';
import Inline from './Inline';
import List from './List';
import ListItem from './ListItem';

export const CheckboxGroupContext = createContext();
export const CheckboxGroupProvider = CheckboxGroupContext.Provider;

const CheckboxGroup = ({
  children,
  className,
  explanationMessage,
  inline,
  label,
  noContrast,
  required,
  validationMessage,
  ...opts
}) => {
  const theme = useTheme();

  const renderChildren = () =>
    Children.map(children, child => {
      return (
        <CheckboxGroupProvider value={{ noContrast }}>
          {inline ? child : <ListItem>{child}</ListItem>}
        </CheckboxGroupProvider>
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
        css={[
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

CheckboxGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string,
  noContrast: PropTypes.bool,
  required: PropTypes.bool,
  validationMessage: PropTypes.string,
};

export default CheckboxGroup;
