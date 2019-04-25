import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Live from '../docs/Live';
import {
  Alert,
  List,
  ListItem,
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from '../components';

const TabsExample = `
<Tabs>
  <TabList>
    <Tab>Philip J. Fry</Tab>
    <Tab disabled>Turanga Leela</Tab>
    <Tab>Bender Rodriguez</Tab>
    <Tab>Dr. Zoidberg</Tab>
  </TabList>

  <TabPanel>
    <img src="http://futurama-madhouse.net/bios/bioFry.jpg" alt="Philip J. Fry" />
    <List>
      <ListItem>
        <strong>Species:</strong> Human
      </ListItem>
      <ListItem>
        <strong>Occupation:</strong> Delivery Boy at Planet Express Delivery
        Company.
      </ListItem>
      <ListItem>
        <strong>Dameanor:</strong> Naive; kind; nervous; curious; thoughtful.
      </ListItem>
    </List>
  </TabPanel>
  <TabPanel>
    <img src="http://futurama-madhouse.net/bios/bioLeela.jpg" alt="Turanga Leela" />
    <List>
      <ListItem>
        <strong>Species:</strong> Mutant
      </ListItem>
      <ListItem>
        <strong>Occupation:</strong> Captain of the Planet Express Ship at
        Planet Express Delivery Company.
      </ListItem>
      <ListItem>
        <strong>Dameanor:</strong> Tough; determined; no-nonsense; thoughtful;
        serious.
      </ListItem>
    </List>
  </TabPanel>
  <TabPanel>
    <img src="http://futurama-madhouse.net/bios/bioBender.jpg" alt="Bender Rodriguez" />
    <List>
      <ListItem>
        <strong>Species:</strong> Bending Unit Robot
      </ListItem>
      <ListItem>
        <strong>Occupation:</strong> Cook for Planet Express Delivery Company.
      </ListItem>
      <ListItem>
        <strong>Dameanor:</strong> Loud; obnoxious; dishonest; sleazy; angry;
        sneaky; selfish; suicidal; alcoholic.
      </ListItem>
    </List>
  </TabPanel>
  <TabPanel>
    <img src="http://futurama-madhouse.net/bios/bioZoidberg.jpg" alt="Dr. Zoidberg" />
    <List>
      <ListItem>
        <strong>Species:</strong> Decapodian
      </ListItem>
      <ListItem>
        <strong>Occupation:</strong> Staff Doctor at Planet Express Delivery
        Company; Earth Army Doctor.
      </ListItem>
      <ListItem>
        <strong>Dameanor:</strong> Nervous; hungry; sad; friendly; helpful;
        poor.
      </ListItem>
    </List>
  </TabPanel>
</Tabs>
`.trim();

const TabsPropDescriptions = {};

const TabsScope = {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  List,
  ListItem,
};

const TabsDocs = () => (
  <BaseLayout pageTitle="Tabs">
    <p>
      Uses <a href="https://github.com/reactjs/react-tabs">react-tabs</a> to
      provide accessible tabbed-interfaces.
    </p>
    <Alert type="warning" title="Notes" className="u-mb--regular">
      <p>
        We provide some default props for styling, but all props supplied by the
        package may be interacted with.
      </p>
    </Alert>
    <Live
      code={TabsExample}
      scope={TabsScope}
      component={Tabs}
      propDescriptions={TabsPropDescriptions}
    />
  </BaseLayout>
);

export default TabsDocs;
