import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from 'emotion-theming'
import {
  Tabs as ReactTabs,
  TabList as ReactTabList,
  Tab as ReactTab,
  TabPanel as ReactTabPanel,
} from 'react-tabs'

import { misc, text } from '../assets/styles/utility'

const Tabs = ({ className, customCss = {}, ...rest }) => (
  <ReactTabs
    css={customCss}
    className={clsx('CK__Tabs', className)}
    {...rest}
  />
)

Tabs.propTypes = {
  className: PropTypes.string,
  customCss: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

const TabList = ({ className, reset, customCss = {}, ...rest }) => {
  const theme = useTheme()

  return (
    <ReactTabList
      css={[
        !reset && [
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
        ],
        customCss,
      ]}
      className={clsx('CK__TabList', className)}
      {...rest}
    />
  )
}

TabList.propTypes = {
  className: PropTypes.string,
  reset: PropTypes.bool,
  customCss: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

TabList.tabsRole = 'TabList'

const Tab = ({
  className,
  disabled,
  selected,
  reset,
  customCss = {},
  ...rest
}) => {
  const theme = useTheme()

  return (
    <ReactTab
      css={[
        !reset && [
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

          selected && {
            cursor: 'default',
            color: theme.color.primary.base,

            '&::before': {
              opacity: 1,
            },
          },
        ],
        customCss,
      ]}
      selectedClassName={theme.settings.classes.active}
      className={clsx('CK__Tab', className)}
      disabled={disabled}
      selected={selected}
      {...rest}
    />
  )
}

Tab.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  reset: PropTypes.bool,
  customCss: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

Tab.tabsRole = 'Tab'

const TabPanel = ({ className, selected, customCss = {}, ...rest }) => {
  const theme = useTheme()

  return (
    <ReactTabPanel
      selected={selected}
      css={() => [customCss]}
      selectedClassName={theme.settings.classes.active}
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
  selected: PropTypes.bool,
  customCss: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

TabPanel.tabsRole = 'TabPanel'

export { Tabs, TabList, Tab, TabPanel }
