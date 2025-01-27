import ExampleFill from '../../.storybook/components/ExampleFill'

import Inline from './Inline'
import ListItem from './ListItem'

export default {
  title: 'Components/Inline',
  component: Inline,
  parameters: {
    docs: {
      description: {
        component: `"Free-form" content that you'd like to have proper spacing horizontally and vertically when they stack can utilize the \`<Inline />\` component. You can modify alignment by using flexbox properties.

\`<ListItem />\` should always be the wrapper of any child component.`,
      },
    },
  },
}

const Story = (args) => (
  <Inline {...args}>
    <ListItem>
      <ExampleFill css={{ width: 100 }} />
    </ListItem>
    <ListItem>
      <ExampleFill css={{ width: 200 }} />
    </ListItem>
    <ListItem>
      <ExampleFill css={{ width: 50 }} />
    </ListItem>
    <ListItem>
      <ExampleFill css={{ width: 250 }} />
    </ListItem>
    <ListItem>
      <ExampleFill css={{ width: 100 }} />
    </ListItem>
  </Inline>
)

export const Overview = Story.bind({})
