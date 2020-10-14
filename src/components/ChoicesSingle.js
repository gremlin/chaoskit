import { Fragment, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { useCombobox } from 'downshift'
import { isEmpty } from 'lodash-es'
import { useTheme } from 'emotion-theming'
import clsx from 'clsx'
import { ellipsis, rgba } from 'polished'
import matchSorter from 'match-sorter'

import { form, misc } from '../assets/styles/utility'
import { generateUUID } from '../helpers/utility'

import Button from './Button'
import FormControlWrapper from './FormControlWrapper'
import Input from './Input'
import { StylesSelectVariables } from './Select'
import Icon from './Icon'

const ChoicesSingle = ({
  className,
  disabled,
  explanationMessage,
  handleSelectedItemChange,
  label,
  name,
  options,
  placeholder = 'Select',
  required,
  selectedItem,
  validationMessage,
  searchPlaceholder = 'Search',
  ...rest
}) => {
  const theme = useTheme()

  const [inputValue, setInputValue] = useState('')
  const [inputItems, setInputItems] = useState(options)

  // Only regenerate this if the name prop changes
  const id = useMemo(() => `${name}-${generateUUID()}`, [name])

  const itemToString = (item) => item?.label ?? ''

  const getItems = (value) =>
    inputValue.length
      ? matchSorter(options, value, {
          keys: ['label'],
        })
      : options

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectItem,
  } = useCombobox({
    items: inputItems,
    inputValue,
    itemToString,
    selectedItem,
    onSelectedItemChange: (opts) => {
      handleSelectedItemChange(opts)

      setInputValue('')
    },
    onInputValueChange: ({ inputValue: newValue }) => {
      setInputValue(newValue)

      setInputItems(getItems(newValue))
    },
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
            ...changes,
            inputValue: '', // Don't add the item string as input value at selection.
          }
        default:
          return changes
      }
    },
  })

  return (
    <FormControlWrapper
      label={label}
      required={required}
      labelProps={{ ...getLabelProps() }}
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
        className={clsx('CK__ChoicesSingle', className)}
        {...getComboboxProps()}
      >
        <div
          css={[
            {
              position: 'relative',

              '&::after': [
                StylesSelectVariables(theme).arrow,

                isOpen && {
                  transform: 'translateY(-50%) rotate(-180deg)', // Need to add-in default `translateY` prop
                },
              ],
            },
          ]}
        >
          {!isEmpty(selectedItem) && (
            <Button
              title="Remove item"
              size="xsmall"
              iconOnly
              onClick={() => {
                selectItem({})
              }}
              css={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: StylesSelectVariables(theme).arrowOffset,
                zIndex: 3,
              }}
            >
              <Icon icon="close" />
            </Button>
          )}
          <div
            css={[
              form.input(theme, { error: !!validationMessage }),
              {
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: form.variables(theme).boxShadow,
                transition: 'none',
              },

              isOpen && {
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
            {...getToggleButtonProps()}
          >
            <div
              css={[
                {
                  // lineHeight is based on form height minus border (top + bottom)
                  lineHeight: `${form.variables(theme).height - 2}px`,
                },
              ]}
            >
              {!isEmpty(selectedItem) ? (
                <div
                  css={{
                    ...ellipsis(),
                    cursor: 'default',
                    // Takes care of select arrow for ellipsis
                    // @NOTE theme.height.small from `xsmall` <Button /> size used for removal
                    paddingRight:
                      StylesSelectVariables(theme).arrowOffset -
                      form.variables(theme).padding +
                      theme.height.small,
                  }}
                >
                  {selectedItem.label}
                </div>
              ) : (
                <div
                  css={{
                    ...ellipsis(),
                    color: theme.fontColor.muted,
                    cursor: 'default',
                    // Takes care of select arrow for ellipsis
                    paddingRight:
                      StylesSelectVariables(theme).arrowOffset -
                      form.variables(theme).padding,
                  }}
                >
                  {placeholder}
                </div>
              )}
            </div>
          </div>
          <div
            css={[
              !isOpen && misc.hide,

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
            {...getMenuProps()}
          >
            {isOpen && (
              <Fragment>
                <Input
                  prefixIcon="search"
                  css={{
                    borderRadius: 0,
                    borderWidth: `0 0 1px 0`,
                    boxShadow: 'none',
                    background: theme.color.panel.base,

                    '&:focus': {
                      boxShadow: 'none',
                      borderColor: theme.color.border.base,
                      background: theme.color.panel.base,
                    },
                  }}
                  name={id}
                  {...getInputProps({
                    placeholder: searchPlaceholder,
                  })}
                />
                {inputItems.length > 0 ? (
                  inputItems.map((item, index) => (
                    <div
                      css={[
                        {
                          padding: `${theme.space.xsmall}px ${theme.space.small}px`,
                          cursor: 'default',
                        },

                        (highlightedIndex === index ||
                          selectedItem === item) && {
                          background: theme.color.primary.base,
                          color: theme.contrast.base,
                        },
                      ]}
                      key={item.value}
                      {...getItemProps({ item, index })}
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
                    No results
                  </div>
                )}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </FormControlWrapper>
  )
}

ChoicesSingle.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  handleSelectedItemChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  selectedItem: PropTypes.object.isRequired,
  validationMessage: PropTypes.string,
  searchPlaceholder: PropTypes.string,
}

export default ChoicesSingle
