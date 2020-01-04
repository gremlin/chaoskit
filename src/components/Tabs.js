import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from 'emotion-theming';
import {
  Tabs as ReactTabs,
  TabList as ReactTabList,
  Tab as ReactTab,
  TabPanel as ReactTabPanel,
} from 'react-tabs';

import { flex, misc, text } from '../assets/styles/utility';

const Tabs = ({ className, customCss, ...rest }) => (
  <ReactTabs css={customCss} className={cx('CK__Tabs', className)} {...rest} />
);

Tabs.propTypes = {
  className: PropTypes.string,
  customCss: PropTypes.oneOfType(PropTypes.array, PropTypes.object),
};

Tabs.defaultProps = {
  customCss: {},
};

const TabList = ({ className, reset, customCss, ...rest }) => {
  const theme = useTheme();

  return (
    <ReactTabList
      css={[
        !reset && [
          flex.base,
          misc.overflow,
          misc.spaceChildren({ theme, size: theme.space.medium }),
          {
            marginBottom: theme.space.base,
            borderBottom: theme.border.large,
            position: 'relative',
            zIndex: 2,
          },
        ],
        customCss,
      ]}
      className={cx('CK__TabList', className)}
      {...rest}
    />
  );
};

TabList.propTypes = {
  className: PropTypes.string,
  reset: PropTypes.bool,
  customCss: PropTypes.oneOfType(PropTypes.array, PropTypes.object),
};

TabList.defaultProps = {
  customCss: {},
};

TabList.tabsRole = 'TabList';

const Tab = ({ className, disabled, selected, reset, customCss, ...rest }) => {
  const theme = useTheme();

  return (
    <ReactTab
      css={[
        !reset && [
          text.heading(theme),
          {
            display: 'inline-flex',
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
      className={cx('CK__Tab', className)}
      disabled={disabled}
      selected={selected}
      {...rest}
    />
  );
};

Tab.defaultProps = {
  customCss: {},
};

Tab.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  reset: PropTypes.bool,
  customCss: PropTypes.oneOfType(PropTypes.array, PropTypes.object),
};

Tab.tabsRole = 'Tab';

const TabPanel = ({ className, selected, customCss, ...rest }) => {
  const theme = useTheme();

  return (
    <ReactTabPanel
      selected={selected}
      css={() => [misc.trimChildren, customCss]}
      selectedClassName={theme.settings.classes.active}
      className={cx('CK__TabsPanel', className)}
      {...rest}
    />
  );
};

TabPanel.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool,
  customCss: PropTypes.oneOfType(PropTypes.array, PropTypes.object),
};

TabPanel.defaultProps = {
  customCss: {},
};

TabPanel.tabsRole = 'TabPanel';

export { Tabs, TabList, Tab, TabPanel };
