import { useTheme } from '@emotion/react'

import Inline from './Inline'
import ListItem from './ListItem'
import Subnav, { SubnavMenuItemStyles } from './Subnav'

export default {
  title: 'Components/Subnav',
  component: Subnav,
  subcomponents: { Inline, ListItem },
}

const Link = (props) => {
  const theme = useTheme()

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a css={[SubnavMenuItemStyles(theme)]} {...props} />
}

const Story = (args) => (
  <Subnav {...args}>
    <Inline size="large" wrap={false}>
      <ListItem>
        <Link href="https://www.gremlin.com">Test</Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.gremlin.com">Test</Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.gremlin.com" disabled>
          Test
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.gremlin.com">Test</Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.gremlin.com">Test</Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.gremlin.com" className="is-active">
          Test
        </Link>
      </ListItem>
    </Inline>
  </Subnav>
)

export const Overview = Story.bind({})
