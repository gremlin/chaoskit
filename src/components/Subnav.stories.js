import Inline from './Inline'
import ListItem from './ListItem'
import Subnav, { SubnavMenuItemStyles } from './Subnav'

export default {
  title: 'Components/Subnav',
  component: Subnav,
}

export const Overview = () => (
  <Subnav>
    <Inline size="large" wrap={false}>
      <ListItem>
        <a
          href="https://www.google.com"
          css={(theme) => SubnavMenuItemStyles(theme)}
        >
          Test
        </a>
      </ListItem>
      <ListItem>
        <a
          href="https://www.google.com"
          css={(theme) => SubnavMenuItemStyles(theme)}
        >
          Test
        </a>
      </ListItem>
      <ListItem>
        <a
          href="https://www.google.com"
          disabled
          css={(theme) => SubnavMenuItemStyles(theme)}
        >
          Disabled
        </a>
      </ListItem>
      <ListItem>
        <a
          href="https://www.google.com"
          css={(theme) => SubnavMenuItemStyles(theme)}
        >
          Test
        </a>
      </ListItem>
      <ListItem>
        <a
          href="https://www.google.com"
          css={(theme) => SubnavMenuItemStyles(theme)}
        >
          Test
        </a>
      </ListItem>
      <ListItem>
        <a
          href="https://www.google.com"
          css={(theme) => SubnavMenuItemStyles(theme, { active: true })}
        >
          Active
        </a>
      </ListItem>
    </Inline>
  </Subnav>
)
