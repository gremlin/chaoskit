import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';

import { FormFooter, FormLabel } from '.';
import { config } from '../helpers/config';

class ChoicesMulti extends React.Component {
  state = {
    input: '',
  };

  handleKeyDown = (e) => {
    const { selected, onChange } = this.props;
    const { input } = this.state;

    if (selected.length && !input.length && e.keyCode === 8) {
      onChange(selected.slice(0, selected.length - 1));
    }
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleChange = (item) => {
    const { name, onChange, selected } = this.props;

    onChange(name, [...selected, item]);
    this.setState({ input: '' });
  }

  itemToString = item => (item ? item.label : '');

  // Prevents the menu from being closed when the user selects an item with a keyboard or mouse
  stateReducer = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          isOpen: state.isOpen,
          highlightedIndex: state.highlightedIndex,
        };
      default:
        return changes;
    }
  }

  render() {
    const { className, explanationMessage, label, options, placeholder, selected, removeItem, required, validationMessage } = this.props;
    const { input } = this.state;

    const optionsList = input.length
      ? matchSorter(options, input, {
        keys: ['label'],
      })
      : options;
    const formGroupClasses = cx('form-group', className, {
      [config.classes.notValid]: validationMessage,
      [config.classes.required]: required,
    });
    const selectedOptions = [];
    // Based on current selection to remove from dropdown
    const filteredOptions = optionsList.filter(item => selected.indexOf(item) === -1);

    selected.forEach((item) => {
      if (typeof item !== 'object') {
        const selectedOption = optionsList.find(x => x.value === item);
        selectedOptions.push(selectedOption);
      } else {
        selectedOptions.push(item);
      }
    });

    return (
      <Downshift
        inputValue={input}
        onChange={this.handleChange}
        selectedItem={selectedOptions}
        itemToString={this.itemToString}
        stateReducer={this.stateReducer}
      >
        {(downshift) => {
          const choicesClasses = cx('choices', {
            'is-focused is-open': downshift.isOpen,
          });
          // Only re-open menu if we didn't click on `x` within a multi-select item
          const handleContainerClick = (e) => {
            if (!e.target.classList.contains('choices__button')) {
              downshift.openMenu();
            }
          };

          return (
            <div className={formGroupClasses}>
              <FormLabel {...downshift.getLabelProps()}>{label}</FormLabel>
              <div className="form-choicesSelect">
                <div className={choicesClasses} data-type="select-multiple">
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
                  <div className="choices__inner" onClick={handleContainerClick}>
                    {downshift.selectedItem.length > 0 && (
                    <div className="choices__list choices__list--multiple">
                      {downshift.selectedItem.map((value, i) => (
                        <div
                          className="choices__item choices__item--selectable"
                            // eslint-disable-next-line
                            key={i}
                        >
                          {value.label}
                          {removeItem && <button type="button" className="choices__button" onClick={() => removeItem(value)}>Remove item</button>}
                        </div>
                      ))}
                    </div>
                    )}
                    <input
                      className="choices__input"
                      type="text"
                      {...downshift.getInputProps({
                        placeholder,
                        onChange: this.handleInputChange,
                        onKeyDown: this.handleKeyDown,
                      })}
                    />
                  </div>
                  {downshift.isOpen && (
                    <div className="choices__list choices__list--dropdown is-active">
                      <div className="choices__list" {...downshift.getMenuProps()}>
                        {filteredOptions.length > 0 ?
                          filteredOptions.map((item, index) => {
                            // eslint-disable-next-line
                            const itemClasses = cx('choices__item choices__item--choice', {
                              'is-highlighted': downshift.highlightedIndex === index,
                            });

                            return (
                              <div className={itemClasses} {...downshift.getItemProps({ item })} key={item.value}>
                                {item.label}
                              </div>
                            );
                          }) : (
                            <div className="choices__item choices__item--choice has-no-choices">
                            No choices to choose from
                            </div>
                          )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <FormFooter explanationMessage={explanationMessage} validationMessage={validationMessage} />
            </div>
          );
        }}
      </Downshift>
    );
  }
}

ChoicesMulti.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  removeItem: PropTypes.func,
  validationMessage: PropTypes.string,
  selected: PropTypes.array,
};

ChoicesMulti.defaultProps = {
  placeholder: 'Select',
  selected: [],
};

export default ChoicesMulti;
