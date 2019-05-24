import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';

import FormFooter from './FormFooter';
import FormLabel from './FormLabel';
import { config } from '../helpers/config';

const ChoicesSingle = ({
  className,
  disabled,
  explanationMessage,
  label,
  options,
  placeholder,
  onChange,
  name,
  required,
  removeItem,
  validationMessage,
  searchPlaceholder,
  selected,
}) => {
  const [value, setValue] = useState('');

  const itemToString = item => (item ? item.label : '');

  const handleKeyDown = (e) => {
    if (selected.length && !value.length && e.keyCode === 8) {
      onChange(selected.slice(0, selected.length - 1));
    }
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleChange = (item) => {
    onChange(name, item);

    // Clear out any typed values
    setValue('');
  };

  const optionsList = value.length
    ? matchSorter(options, value, {
      keys: ['label'],
    })
    : options;
  const formGroupClasses = cx('form-group', className, {
    [config.classes.notValid]: validationMessage,
    [config.classes.required]: required,
  });
  const selectedOption = selected !== -1 ? optionsList.find(x => x.value === selected) : -1;

  return (
    <Downshift
      inputValue={value}
      onChange={handleChange}
      selectedItem={selectedOption}
      itemToString={itemToString}
    >
      {(downshift) => {
        const choicesClasses = cx('choices', {
          'is-focused is-open': downshift.isOpen,
        });

        return (
          <div className={formGroupClasses}>
            <FormLabel {...downshift.getLabelProps()}>{label}</FormLabel>
            <div className="form-choicesSelect" disabled={disabled}>
              <div className={choicesClasses} data-type="select-one">
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
                <div className="choices__inner" onClick={downshift.openMenu}>
                  <div className="choices__list choices__list--single">
                    {downshift.selectedItem && downshift.selectedItem !== -1 ? (
                      <div className="choices__item choices__item--selectable">
                        {downshift.selectedItem.label}
                        {removeItem && (
                          <button
                            type="button"
                            className="choices__button"
                            onClick={removeItem}
                          >
                            Remove item
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="choices__item choices__item--selectable choices__placeholder">
                        {placeholder}
                      </div>
                    )}
                  </div>
                </div>
                {downshift.isOpen && (
                  <div className="choices__list choices__list--dropdown is-active">
                    <input
                      className="choices__input"
                      type="text"
                      {...downshift.getInputProps({
                        placeholder: searchPlaceholder,
                        onChange: handleInputChange,
                        onKeyDown: handleKeyDown,
                      })}
                    />
                    <div
                      className="choices__list"
                      {...downshift.getMenuProps()}
                    >
                      {optionsList.length > 0 ? (
                        optionsList.map((item, index) => {
                          // eslint-disable-next-line
                          const itemClasses = cx(
                            'choices__item choices__item--choice',
                            {
                              'is-highlighted':
                                downshift.highlightedIndex === index
                                || downshift.selectedItem === item,
                            },
                          );

                          return (
                            <div
                              className={itemClasses}
                              {...downshift.getItemProps({ item })}
                              key={item.value}
                            >
                              {item.label}
                            </div>
                          );
                        })
                      ) : (
                        <div className="choices__item choices__item--choice has-no-results">
                          No results found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <FormFooter
              explanationMessage={explanationMessage}
              validationMessage={validationMessage}
            />
          </div>
        );
      }}
    </Downshift>
  );
};

ChoicesSingle.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  removeItem: PropTypes.func,
  validationMessage: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChoicesSingle.defaultProps = {
  placeholder: 'Select',
  searchPlaceholder: 'Search',
  selected: -1,
};

export default ChoicesSingle;
