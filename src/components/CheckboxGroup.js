import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FormLabel, FormFooter, Inline, List, ListItem } from '.';
import { config } from '../helpers/config';

class CheckboxGroup extends React.Component {
  renderChildren = () => {
    const { children, inline } = this.props;

    return React.Children.map(children, (child) => {
      if (inline) {
        return child;
      }

      return <ListItem>{child}</ListItem>;
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
        <FormLabel id="">{label}</FormLabel>
        {this.renderItems()}
        <FormFooter
          explanationMessage={explanationMessage}
          validationMessage={validationMessage}
        />
      </div>
    );
  }
}

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
