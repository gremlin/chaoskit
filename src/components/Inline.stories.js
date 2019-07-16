import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import { Inline } from '.';
import ExampleFill from '../../.storybook/components/ExampleFill';

storiesOf('Components|Inline', module).add(
  'Overview',
  () => (
    <Inline
      size={select(
        'Size',
        ['small', 'base', 'medium', 'large', 'xlarge'],
        'base'
      )}
      wrap={boolean('Wrap', true)}
    >
      <ExampleFill />
      <ExampleFill />
      <ExampleFill />
      <ExampleFill />
      <ExampleFill />
    </Inline>
  ),
  {
    notes: `Sometimes your content doesn&apos;t belong in a grid system. So, for when
      you have more "free-form" content that you'd like proper
      spacing horizontally and vertically when they stack, we created the Inline
      component. You can modify alignment by using flexbox properties.

      > There should be no whitespace modifiers attached to the \`<Inline />\` component
        or its direct children. You can attach them on adjacent DOM or by
        wrapping the component.`,
  }
);
