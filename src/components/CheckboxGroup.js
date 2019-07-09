import { Children } from 'react';
import PropTypes from 'prop-types';

import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormFooter from './FormFooter';
import Inline from './Inline';
import List from './List';
import ListItem from './ListItem';

const CheckboxGroup = ({
  children,
  className,
  explanationMessage,
  inline,
  label,
  required,
  validationMessage,
  ...opts
}) => {
  const renderChildren = () =>
    Children.map(children, child => {
      if (inline) {
        return child;
      }

      return <ListItem>{child}</ListItem>;
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
            marginTop: theme.space.xsmall,
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
  required: PropTypes.bool,
  validationMessage: PropTypes.string,
};

export default CheckboxGroup;
