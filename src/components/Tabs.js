import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'
import {
  Tabs as ReactTabs,
  TabList as ReactTabList,
  Tab as ReactTab,
  TabPanels,
  TabPanel as ReactTabPanel,
} from '@reach/tabs'

import { misc, text } from '../assets/styles/utility'

import Button from './Button'

const ButtonReset = React.forwardRef((props, ref) => (
  <Button {...props} ref={ref} type="reset" />
))

const Tabs = ({ className, ...rest }) => (
  <ReactTabs className={clsx('CK__Tabs', className)} {...rest} />
)

Tabs.propTypes = {
  className: PropTypes.string,
}

const TabList = ({ className, ...rest }) => {
  const theme = useTheme()

  return (
    <ReactTabList
      css={[
        misc.overflow,
        {
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'grid',
          gridAutoColumns: 'max-content',
          gridAutoFlow: 'column',
          gap: theme.space.base,
          marginBottom: theme.space.base,
          borderBottom: theme.border.large,
          position: 'relative',
          zIndex: 2,
        },
      ]}
      className={clsx('CK__TabList', className)}
      {...rest}
    />
  )
}

TabList.propTypes = {
  className: PropTypes.string,
}

const Tab = ({ className, disabled, isSelected, type, ...rest }) => {
  const theme = useTheme()

  return (
    <ReactTab
      as={ButtonReset}
      actionType={type}
      css={[
        text.heading(theme),
        {
          position: 'relative',
          fontSize: theme.fontSize.base,
          lineHeight: `${theme.height.base}px`,
          height: theme.height.base,
          color: theme.fontColor.base,
          cursor: 'pointer',
          transition: `color ${theme.timing.base} ${theme.transition.base}`,
          whiteSpace: 'nowrap',

          '&::before': {
            content: "''",
            height: 3,
            position: 'absolute',
            bottom: 0,
            left: 0,
            background: theme.color.primary.base,
            width: '100%',
            opacity: 0,
            transition: `opacity ${theme.timing.base} ${theme.transition.base}`,
          },
        },

        !disabled && {
          '&:hover, &:focus': {
            color: theme.color.primary.base,
          },
        },

        disabled && {
          cursor: 'not-allowed',
          opacity: theme.opacity.base,
        },

        isSelected && {
          cursor: 'default',
          color: theme.color.primary.base,

          '&::before': {
            opacity: 1,
          },
        },
      ]}
      className={clsx('CK__Tab', className)}
      disabled={disabled}
      selected={isSelected}
      {...rest}
    />
  )
}

Tab.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  type: PropTypes.string,
}

const TabPanel = ({ className, ...rest }) => {
  const theme = useTheme()

  return (
    <ReactTabPanel
      className={clsx(
        `CK__TabsPanel ${theme.settings.classes.trim}`,
        className
      )}
      {...rest}
    />
  )
}

TabPanel.propTypes = {
  className: PropTypes.string,
}

export { Tabs, TabList, Tab, TabPanels, TabPanel }
