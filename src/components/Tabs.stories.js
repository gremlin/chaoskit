import List from './List'
import ListItem from './ListItem'
import { Tabs, TabPanel, TabList, Tab, TabPanels } from './Tabs'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  subComponents: { TabList, Tab, TabPanel },
}

const Story = (args) => (
  <Tabs {...args}>
    <TabList>
      <Tab>Philip J. Fry</Tab>
      <Tab disabled>Turanga Leela</Tab>
      <Tab>Bender Rodriguez</Tab>
      <Tab>Dr. Zoidberg</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/2/28/Philip_Fry.png"
          alt="Philip J. Fry"
        />
        <List>
          <ListItem>
            <strong>Species:</strong> Human
          </ListItem>
          <ListItem>
            <strong>Occupation:</strong> Delivery Boy at Planet Express Delivery
            Company.
          </ListItem>
          <ListItem>
            <strong>Dameanor:</strong> Naive; kind; nervous; curious;
            thoughtful.
          </ListItem>
        </List>
      </TabPanel>
      <TabPanel>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/d/d4/Turanga_Leela.png"
          alt="Turanga Leela"
        />
        <List>
          <ListItem>
            <strong>Species:</strong> Mutant
          </ListItem>
          <ListItem>
            <strong>Occupation:</strong> Captain of the Planet Express Ship at
            Planet Express Delivery Company.
          </ListItem>
          <ListItem>
            <strong>Dameanor:</strong> Tough; determined; no-nonsense;
            thoughtful; serious.
          </ListItem>
        </List>
      </TabPanel>
      <TabPanel>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png"
          alt="Bender Rodriguez"
        />
        <List>
          <ListItem>
            <strong>Species:</strong> Bending Unit Robot
          </ListItem>
          <ListItem>
            <strong>Occupation:</strong> Cook for Planet Express Delivery
            Company.
          </ListItem>
          <ListItem>
            <strong>Dameanor:</strong> Loud; obnoxious; dishonest; sleazy;
            angry; sneaky; selfish; suicidal; alcoholic.
          </ListItem>
        </List>
      </TabPanel>
      <TabPanel>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/4a/Dr_John_Zoidberg.png"
          alt="Dr. Zoidberg"
        />
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
    </TabPanels>
  </Tabs>
)

export const Overview = Story.bind({})
