import { select } from '@storybook/addon-knobs'

import icons from '../assets/icons/icons.json'

import BlockGrid from './BlockGrid'
import Icon from './Icon'
import ListItem from './ListItem'

export default {
  title: 'Components/Icon',
  component: Icon,
}

// @TODO For docs
// All UI-orientated icons follow the same \`viewBox\`, \`width/height\`, and \`stroke\` attributes for ease and re-usability. Icons are located within the \`src/assets/icons/\` directory and are optimized, mangled, and sent along via a JSON file that allows us to import and validate references more easily and only bundle what we actually use in our applications.
// Icons are just as maluable as any piece of text; with both their size and color inheritting from its own, or parent selectors.

export const Overview = () => (
  <BlockGrid size={{ small: 2, medium: 4 }}>
    {Object.entries(icons).map(icon => (
      <ListItem key={icon[0]}>
        <div
          css={theme => ({
            border: theme.border.base,
            borderRadius: theme.settings.ui.radius && theme.borderRadius.base,
            boxShadow: theme.boxShadow.base,
            padding: theme.space.base,
            textAlign: 'center',
          })}
        >
          <Icon
            css={theme => ({
              display: 'block',
              margin: `0 auto ${theme.space.small}px auto`,
            })}
            size={select(
              'Size',
              ['base', 'small', 'medium', 'large', 'xlarge'],
              'medium'
            )}
            icon={icon[0]}
          />
          <code>{icon[0]}</code>
        </div>
      </ListItem>
    ))}
  </BlockGrid>
)
