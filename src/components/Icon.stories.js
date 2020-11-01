import { useTheme } from 'emotion-theming'

import icons from '../assets/icons/icons.json'

import BlockGrid from './BlockGrid'
import Icon from './Icon'
import ListItem from './ListItem'

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: `All UI-orientated icons follow the same \`viewBox\`, \`width/height\`, and \`stroke\` attributes for ease and re-usability. Icons are located within the \`src/assets/icons/\` directory and are optimized, mangled, and sent along via a JSON file that allows us to import and validate references more easily and only bundle what we actually use in our applications.

Icons are just as maluable as any piece of text; with both their size and color inheritting from its own, or parent selectors.`,
      },
    },
  },
}

export const Overview = (args) => <Icon {...args} />

Overview.args = {
  icon: 'check',
}

Overview.argTypes = {
  icon: {
    control: {
      type: 'select',
      options: Object.keys(icons),
    },
  },
}

export const All = (args) => {
  const theme = useTheme()

  return (
    <BlockGrid size={{ small: 2, medium: 4 }}>
      {Object.entries(icons).map((icon) => (
        <ListItem key={icon[0]}>
          <div
            css={{
              border: theme.border.base,
              borderRadius: theme.borderRadius.base,
              boxShadow: theme.BETA__boxShadow.base,
              padding: theme.space.base,
              textAlign: 'center',
            }}
          >
            <Icon
              css={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: theme.space.small,
              }}
              icon={icon[0]}
              {...args}
            />
            <code>{icon[0]}</code>
          </div>
        </ListItem>
      ))}
    </BlockGrid>
  )
}

All.argTypes = {
  icon: {
    control: {
      disable: true,
    },
  },
}
