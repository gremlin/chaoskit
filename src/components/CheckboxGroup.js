import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import FormLabel from './FormLabel';
import FormFooter from './FormFooter';
import Inline from './Inline';
import List from './List';
import ListItem from './ListItem';
import { config } from '../helpers/config';

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
  const renderChildren = () => React.Children.map(children, (child) => {
    if (inline) {
      return child;
    }

    return <ListItem>{child}</ListItem>;
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
      <FormLabel id="">{label}</FormLabel>
      {renderItems()}
      <FormFooter
        explanationMessage={explanationMessage}
        validationMessage={validationMessage}
      />
    </div>
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
