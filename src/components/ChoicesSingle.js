import { useMemo, useState } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import matchSorter from 'match-sorter'
import { ellipsis, rgba } from 'polished'
import { useTheme } from 'emotion-theming'

import { form } from '../assets/styles/utility'
import { generateUUID } from '../helpers/utility'

import Button from './Button'
import FormControlWrapper from './FormControlWrapper'
import Icon from './Icon'
import Input from './Input'
import { StylesSelectVariables } from './Select'

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
  ...rest
}) => {
  const theme = useTheme()
  const [value, setValue] = useState('')

  // Only regenerate this if the name prop changes
  const id = useMemo(() => `${name}-${generateUUID()}`, [name])

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
    onChange(name, item)

    // Clear out any typed values
    setValue('')
  }

  const optionsList = value.length
    ? matchSorter(options, value, {
        keys: ['label'],
      })
    : options
  const selectedOption =
    selected !== -1 ? optionsList.find((x) => x.value === selected) : -1

  return (
    <Downshift
      inputValue={value}
      onChange={handleChange}
      selectedItem={selectedOption}
      itemToString={itemToString}
    >
      {(downshift) => {
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
              className={cx('CK__ChoicesSingle', className)}
            >
              <div
                css={[
                  {
                    position: 'relative',

                    '&::after': [
                      StylesSelectVariables(theme).arrow,

                      downshift.isOpen && {
                        transform: 'translateY(-50%) rotate(-180deg)', // Need to add-in default `translateY` prop
                      },
                    ],
                  },
                ]}
                data-type="select-one"
              >
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
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
                  onClick={downshift.openMenu}
                >
                  <div
                    css={[
                      {
                        // lineHeight is based on form height minus border (top + bottom)
                        lineHeight: `${form.variables(theme).height - 2}px`,
                      },
                    ]}
                  >
                    {downshift.selectedItem && downshift.selectedItem !== -1 ? (
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
                        {downshift.selectedItem.label}
                        {removeItem && (
                          <Button
                            title="Remove item"
                            size="xsmall"
                            iconOnly
                            onClick={removeItem}
                            css={{
                              position: 'absolute',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              right: StylesSelectVariables(theme).arrowOffset,
                              zIndex: 1,
                            }}
                          >
                            <Icon icon="close" />
                          </Button>
                        )}
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
                      {...downshift.getInputProps({
                        placeholder: searchPlaceholder,
                        onChange: handleInputChange,
                        onKeyDown: handleKeyDown,
                      })}
                    />
                    <div {...downshift.getMenuProps()}>
                      {optionsList.length > 0 ? (
                        optionsList.map((item, index) => (
                          <div
                            css={[
                              {
                                padding: `${theme.space.xsmall}px ${theme.space.small}px`,
                                cursor: 'default',
                              },
                              (downshift.highlightedIndex === index ||
                                downshift.selectedItem === item) && {
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
}

ChoicesSingle.defaultProps = {
  placeholder: 'Select',
  searchPlaceholder: 'Search',
  selected: -1,
}

export default ChoicesSingle
