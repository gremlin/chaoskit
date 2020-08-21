import { useTheme } from 'emotion-theming'

import Dropdown, { DropdownMenuItemStyles } from './Dropdown'
import DropdownHeader from './DropdownHeader'
import List from './List'
import ListItem from './ListItem'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    trigger: {
      label: 'Dropdown',
      props: {
        type: 'primary',
      },
    },
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
}

const Story = (args) => <Dropdown {...args} />

export const Overview = Story.bind({})

Overview.args = {
  children: <p>Hello from the dropdown!</p>,
}

const DropdownMenuItem = (props) => {
  const theme = useTheme()

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a css={[DropdownMenuItemStyles(theme)]} {...props} />
}

export const Menu = Story.bind({})

Menu.args = {
  children: (
    <>
      <DropdownHeader>Menu Header</DropdownHeader>
      <List space="small">
        <ListItem>
          <DropdownMenuItem href="https://www.gremlin.com">
            Menu link
          </DropdownMenuItem>
        </ListItem>
        <ListItem>
          <DropdownMenuItem
            href="https://www.gremlin.com"
            className="is-active"
          >
            Active menu link
          </DropdownMenuItem>
        </ListItem>
      </List>
    </>
  ),
}
