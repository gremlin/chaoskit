import { useTheme } from '@emotion/react'

import { Check, Search } from '../assets/icons'

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

export const Overview = (args) => <Check {...args} />

export const IconWithText = () => {
  const theme = useTheme()

  return (
    <div css={{ display: 'inline-flex', alignItems: 'center' }}>
      <div>Inline text</div> <Search css={{ marginLeft: theme.space.small }} />
    </div>
  )
}
