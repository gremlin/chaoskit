import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useState, Fragment } from 'react'
import Downshift from 'downshift'
import matchSorter from 'match-sorter'
import { rgba } from 'polished'
import { useTheme } from 'emotion-theming'

import { form } from '../assets/styles/utility'
import { generateUUID } from '../helpers/utility'

import Badge from './Badge'
import FormControlWrapper from './FormControlWrapper'
import Icon from './Icon'
import Input from './Input'
import Inline from './Inline'
import ListItem from './ListItem'

const ChoicesMulti = ({
  className,
  disabled,
  explanationMessage,
  label,
  options,
  name,
  onChange,
  required,
  removeItem,
  validationMessage,
  selected,
  searchPlaceholder,
  ...rest
}) => {
  const theme = useTheme()
  const [value, setValue] = useState('')

  const id = `${name}-${generateUUID()}`

  const itemToString = (item) => (item ? item.label : '')

  const handleKeyDown = (e) => {
    if (selected.length && !value.length && e.keyCode === 8) {
      onChange(selected.slice(0, selected.length - 1))
    }
  }

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleChange = (item) => {
    onChange(name, [...selected, item])

    // Clear out any typed values
    setValue('')
  }

  // Prevents the menu from being closed when the user selects an item with a keyboard or mouse
  const stateReducer = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          isOpen: state.isOpen,
          highlightedIndex: state.highlightedIndex,
        }
      default:
        return changes
    }
  }

  const optionsList = value.length
    ? matchSorter(options, value, {
        keys: ['label'],
      })
    : options
  const selectedOptions = []
  // Based on current selection to remove from dropdown
  const filteredOptions = optionsList.filter(
    (item) => JSON.stringify(selected).indexOf(JSON.stringify(item)) === -1
  )

  selected.forEach((item) => {
    if (typeof item !== 'object') {
      const selectedOption = optionsList.find((x) => x.value === item)
      selectedOptions.push(selectedOption)
    } else {
      selectedOptions.push(item)
    }
  })

  return (
    <Downshift
      inputValue={value}
      onChange={handleChange}
      selectedItem={selectedOptions}
      itemToString={itemToString}
      stateReducer={stateReducer}
    >
      {(downshift) => {
        // Only re-open menu if we didn't click on `x` within a multi-select item
        const handleContainerClick = (e) => {
          if (!e.target.classList.contains('choices__button')) {
            downshift.openMenu()
          }
        }

        return (
          <FormControlWrapper
            {...downshift.getRootProps()}
            required={required}
            label={label}
            labelProps={{ ...downshift.getLabelProps() }}
            explanationMessage={explanationMessage}
            validationMessage={validationMessage}
            {...rest}
          >
            <div
              css={[
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
              className={clsx('CK__ChoicesMulti', className)}
            >
              <div
                css={{
                  position: 'relative',
                }}
                data-type="select-multiple"
              >
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
                <div
                  css={[
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
                  onClick={handleContainerClick}
                >
                  {downshift.selectedItem.length > 0 && (
                    <Inline
                      size="small"
                      css={{
                        order: 1,
                        paddingBottom: form.variables(theme).padding,
                      }}
                    >
                      {downshift.selectedItem.map((item) => {
                        return (
                          <ListItem key={item.label}>
                            <Badge
                              title="Remove item"
                              type="primary"
                              onClick={() => removeItem(item)}
                              rounded
                              css={{
                                cursor: 'pointer',
                                height: theme.height.xxxsmall,
                                fontSize: theme.fontSize.xxsmall,
                              }}
                              label={
                                <Fragment>
                                  {item.label}
                                  <Icon
                                    icon="close"
                                    size="small"
                                    css={{
                                      top: 0,
                                      marginLeft: theme.space.xsmall,
                                    }}
                                  />
                                </Fragment>
                              }
                            />
                          </ListItem>
                        )
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
                    name={id}
                    {...downshift.getInputProps({
                      placeholder: searchPlaceholder,
                      onChange: handleInputChange,
                      onKeyDown: handleKeyDown,
                    })}
                  />
                </div>
                {downshift.isOpen && (
                  <div
                    css={[
                      {
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        zIndex: '10',
                        background: form.variables(theme).background,
                        border: '1px solid',
                        borderColor: theme.color.primary.base,
                        borderTop: 0,
                      },

                      theme.settings.ui.radius && {
                        borderBottomRightRadius: theme.borderRadius.base,
                        borderBottomLeftRadius: theme.borderRadius.base,
                      },
                    ]}
                  >
                    <div {...downshift.getMenuProps()}>
                      {filteredOptions.length > 0 ? (
                        filteredOptions.map((item, index) => (
                          <div
                            css={[
                              {
                                padding: `${theme.space.xsmall}px ${theme.space.small}px`,
                                cursor: 'default',
                              },
                              downshift.highlightedIndex === index && {
                                background: theme.color.primary.base,
                                color: theme.contrast.base,
                              },
                            ]}
                            {...downshift.getItemProps({ item })}
                            key={item.value}
                          >
                            {item.label}
                          </div>
                        ))
                      ) : (
                        <div
                          css={{
                            padding: `${theme.space.xsmall}px ${theme.space.small}px`,
                            color: theme.fontColor.muted,
                          }}
                        >
                          No results found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FormControlWrapper>
        )
      }}
    </Downshift>
  )
}

ChoicesMulti.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  removeItem: PropTypes.func.isRequired,
  validationMessage: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  selected: PropTypes.array,
}

ChoicesMulti.defaultProps = {
  searchPlaceholder: 'Search',
  selected: [],
}

export default ChoicesMulti
