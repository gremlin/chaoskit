import cx from 'classnames';
import PropTypes from 'prop-types';
import { useState, Fragment } from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import { rgba } from 'polished';

import Badge from './Badge';
import FormFooter from './FormFooter';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import Icon from './Icon';
import Input from './Input';
import Inline from './Inline';
import { form } from '../assets/styles/utility';
import { generateUUID } from '../helpers/utility';

const ChoicesMulti = ({
  className,
  disabled,
  explanationMessage,
  label,
  options,
  placeholder,
  name,
  onChange,
  required,
  removeItem,
  validationMessage,
  selected,
}) => {
  const [value, setValue] = useState('');

  const id = `${name}-${generateUUID()}`;

  const itemToString = item => (item ? item.label : '');

  const handleKeyDown = e => {
    if (selected.length && !value.length && e.keyCode === 8) {
      onChange(selected.slice(0, selected.length - 1));
    }
  };

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const handleChange = item => {
    onChange(name, [...selected, item]);

    // Clear out any typed values
    setValue('');
  };

  // Prevents the menu from being closed when the user selects an item with a keyboard or mouse
  const stateReducer = (state, changes) => {
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
  };

  const optionsList = value.length
    ? matchSorter(options, value, {
        keys: ['label'],
      })
    : options;
  const selectedOptions = [];
  // Based on current selection to remove from dropdown
  const filteredOptions = optionsList.filter(
    item => JSON.stringify(selected).indexOf(JSON.stringify(item)) === -1
  );

  selected.forEach(item => {
    if (typeof item !== 'object') {
      const selectedOption = optionsList.find(x => x.value === item);
      selectedOptions.push(selectedOption);
    } else {
      selectedOptions.push(item);
    }
  });

  return (
    <Downshift
      inputValue={value}
      onChange={handleChange}
      selectedItem={selectedOptions}
      itemToString={itemToString}
      stateReducer={stateReducer}
    >
      {downshift => {
        // Only re-open menu if we didn't click on `x` within a multi-select item
        const handleContainerClick = e => {
          if (!e.target.classList.contains('choices__button')) {
            downshift.openMenu();
          }
        };

        return (
          <FormGroup {...downshift.getRootProps()}>
            <FormLabel
              required={required}
              error={!!validationMessage}
              {...downshift.getLabelProps()}
            >
              {label}
            </FormLabel>
            <div
              css={theme => [
                {
                  // 1. Reset default text direction if inside of centered container
                  color: theme.fontColor.base,
                  fontSize: theme.fontSize.base,
                  textAlign: 'left', // 1
                },

                disabled && {
                  opacity: theme.opacity.base,
                  cursor: 'not-allowed',
                  pointerEvents: 'none',
                },
              ]}
              className={cx('CK__ChoicesMulti', className)}
            >
              <div
                css={{
                  position: 'relative',
                }}
                data-type="select-multiple"
              >
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
                <div
                  css={theme => [
                    form.input(theme, { error: !!validationMessage }),
                    // 1. Override height properties from normal input since this list will grow
                    {
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      boxShadow: form.variables(theme).boxShadow,
                      transition: 'none',
                      minHeight: form.variables(theme).height,
                      height: 'auto',
                    },

                    downshift.isOpen && {
                      borderColor: theme.color.primary.base,
                      boxShadow: `${theme.boxShadowOffset.base} ${rgba(
                        theme.color.primary.base,
                        0.75
                      )}`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderBottomColor: theme.color.border.base,
                    },
                  ]}
                  className="choices__inner"
                  onClick={handleContainerClick}
                >
                  {downshift.selectedItem.length > 0 && (
                    <Inline
                      size="small"
                      css={theme => ({
                        order: 1,
                        paddingBottom: form.variables(theme).padding,
                      })}
                    >
                      {downshift.selectedItem.map((item, i) => {
                        const key = `${item.label}-${i}`;

                        return (
                          <Badge
                            key={key}
                            title="Remove item"
                            type="primary"
                            onClick={() => removeItem(item)}
                            rounded
                            css={theme => ({
                              cursor: 'pointer',
                              height: theme.height.xxxsmall,
                              fontSize: theme.fontSize.xxsmall,
                            })}
                            label={
                              <Fragment>
                                {item.label}
                                <Icon
                                  icon="close"
                                  size="small"
                                  css={theme => ({
                                    top: 0,
                                    marginLeft: theme.space.xsmall,
                                  })}
                                />
                              </Fragment>
                            }
                          />
                        );
                      })}
                    </Inline>
                  )}
                  <Input
                    css={{
                      border: 0,
                      borderRadius: 0,
                      width: '100% !important',
                      boxShadow: 'none',
                      padding: 0,

                      '&:focus': {
                        boxShadow: 'none',
                      },
                    }}
                    className="choices__input"
                    name={id}
                    {...downshift.getInputProps({
                      placeholder,
                      onChange: handleInputChange,
                      onKeyDown: handleKeyDown,
                    })}
                  />
                </div>
                {downshift.isOpen && (
                  <div
                    css={theme => [
                      {
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        zIndex: '10',
                        background: form.variables(theme).background,
                        borderBottomRightRadius: theme.borderRadius.base,
                        borderBottomLeftRadius: theme.borderRadius.base,
                        border: `1px solid ${theme.color.primary.base}`,
                        borderTop: 0,
                      },
                    ]}
                    className="choices__list choices__list--dropdown is-active"
                  >
                    <div
                      className="choices__list"
                      {...downshift.getMenuProps()}
                    >
                      {filteredOptions.length > 0 ? (
                        filteredOptions.map((item, index) => {
                          // eslint-disable-next-line
                          const itemClasses = cx(
                            'choices__item choices__item--choice',
                            {
                              'is-highlighted':
                                downshift.highlightedIndex === index,
                            }
                          );

                          return (
                            <div
                              css={theme => [
                                {
                                  padding: `${theme.space.xsmall}px ${theme.space.small}px`,
                                  cursor: 'default',
                                },
                                downshift.highlightedIndex === index && {
                                  background: theme.color.primary.base,
                                  color: theme.contrast.base,
                                },
                              ]}
                              className={itemClasses}
                              {...downshift.getItemProps({ item })}
                              key={item.value}
                            >
                              {item.label}
                            </div>
                          );
                        })
                      ) : (
                        <div
                          css={theme => ({
                            padding: `${theme.space.xsmall}px ${theme.space.small}px`,
                            color: theme.fontColor.muted,
                          })}
                          className="choices__item choices__item--choice has-no-results"
                        >
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
          </FormGroup>
        );
      }}
    </Downshift>
  );
};

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
  removeItem: PropTypes.func.isRequired,
  validationMessage: PropTypes.string,
  selected: PropTypes.array,
};

ChoicesMulti.defaultProps = {
  placeholder: 'Select',
  selected: [],
};

export default ChoicesMulti;
