import { useTheme } from '@emotion/react'

import * as Icons from '../assets/icons'

export default {
  title: 'Components/Icon',
  parameters: {
    docs: {
      description: {
        component: `All UI-orientated icons follow the same \`viewBox\`, \`width/height\`, and \`stroke\` attributes for ease and re-usability.

Icons are just as maluable as any piece of text; with both their size and color inheritting from its own, or parent selectors.`,
      },
    },
  },
}

export const Overview = (args) => <Icons.Check {...args} />

export const IconWithText = () => {
  const theme = useTheme()

  return (
    <div css={{ display: 'inline-flex', alignItems: 'center' }}>
      <div>Inline text</div>
      <Icons.Search css={{ marginLeft: theme.space.small }} />
    </div>
  )
}

export const AllIcons = () => {
  const theme = useTheme()

  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 120px)',
        gap: theme.space.small,
      }}
    >
      {Object.values(Icons).map((icon) => {
        const IconComponent = icon

        return (
          <div
            key={icon.render.name}
            css={{
              border: theme.border.base,
              height: 120,
              display: 'grid',
              gap: theme.space.small,
              placeItems: 'center',
            }}
          >
            <IconComponent css={{ fontSize: theme.fontSize.large }} />
            <div
              css={{
                fontSize: theme.fontSize.small,
                fontFamily: theme.fontFamily.code,
              }}
            >
              {icon.render.name.replace('Svg', '')}
            </div>
          </div>
        )
      })}
    </div>
  )
}
