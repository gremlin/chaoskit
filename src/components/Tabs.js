import React from 'react';
import PropTypes from 'prop-types';
import {
  Tabs as ReactTabs,
  TabList as ReactTabList,
  Tab,
  TabPanel as ReactTabPanel,
} from 'react-tabs';

import { config } from '../helpers/config';

const Tabs = ({ ...rest }) => (
  <ReactTabs
    className="tabs"
    disabledTabClassName={config.classes.disabled}
    selectedTabClassName={config.classes.active}
    selectedTabPanelClassName={config.classes.active}
    {...rest}
  />
);

const TabList = ({ ...rest }) => (
  <ReactTabList className="tabs-list" {...rest} />
);

TabList.tabsRole = 'TabList';

const TabPanel = ({ selected, ...rest }) => (
  <ReactTabPanel selected={selected} className="tabs-panel" {...rest} />
);

TabPanel.propTypes = {
  selected: PropTypes.bool,
};

TabPanel.tabsRole = 'TabPanel';

export { Tabs, TabList, Tab, TabPanel };
