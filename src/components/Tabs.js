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

const Tabs = ({ className, ...rest }) => (
  <ReactTabs className={cx('CK__Tabs', className)} {...rest} />
);

Tabs.propTypes = {
  className: PropTypes.string,
};

const TabList = ({ className, reset, ...rest }) => {
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
      ]}
      className={cx('CK__TabList', className)}
      {...rest}
    />
  );
};

TabList.propTypes = {
  className: PropTypes.string,
  reset: PropTypes.bool,
};

TabList.tabsRole = 'TabList';

const Tab = ({ className, disabled, selected, reset, ...rest }) => {
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
      ]}
      className={cx(
        'CK__Tab',
        { [theme.settings.classes.active]: selected },
        className
      )}
      disabled={disabled}
      selected={selected}
      {...rest}
    />
  );
};

Tab.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  reset: PropTypes.bool,
};

Tab.tabsRole = 'Tab';

const TabPanel = ({ className, selected, ...rest }) => {
  const theme = useTheme();

  return (
    <ReactTabPanel
      selected={selected}
      css={() => [misc.trimChildren]}
      className={cx(
        'CK__TabsPanel',
        { [theme.settings.classes.active]: selected },
        className
      )}
      {...rest}
    />
  );
};

TabPanel.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool,
};

TabPanel.tabsRole = 'TabPanel';

export { Tabs, TabList, Tab, TabPanel };
