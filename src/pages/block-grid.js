import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import { Alert, BlockGrid, ListItem } from '../components';
import Live from '../docs/Live';
import ExampleFill from '../../.storybook/components/ExampleFill';

const BlockGridExample = `
<BlockGrid size={{base: 4}}>
  <ListItem>
    <ExampleFill />
  </ListItem>
  <ListItem>
    <ExampleFill />
  </ListItem>
  <ListItem>
    <ExampleFill />
  </ListItem>
  <ListItem>
    <ExampleFill />
  </ListItem>
  <ListItem>
    <ExampleFill />
  </ListItem>
  <ListItem>
    <ExampleFill />
  </ListItem>
  <ListItem>
    <ExampleFill />
  </ListItem>
</BlockGrid>
`.trim();

const BlockGridSpacingExample = `
<BlockGrid size={{base: 4}} gutter={{base: 'collapse', small: 'large', medium: 'xlarge'}}>
  <ListItem>
    <ExampleFill />
  </ListItem>
  <ListItem>
    <ExampleFill />
  </ListItem>
  <ListItem>
    <ExampleFill />
  </ListItem>
  <ListItem>
    <ExampleFill />
  </ListItem>
</BlockGrid>
`.trim();

const BlockGridSizingExample = `
<BlockGrid size={{medium: 2, large: 3}}>
  <ListItem>
    <ExampleFill />
  </ListItem>
  <ListItem>
    <ExampleFill />
  </ListItem>
  <ListItem>
    <ExampleFill />
  </ListItem>
  <ListItem>
    <ExampleFill />
  </ListItem>
</BlockGrid>
`.trim();

const BlockGridScope = { BlockGrid, ListItem, ExampleFill };

const BlockGridDocs = () => (
  <BaseLayout pageTitle="BlockGrid">
    <p>
      Block Grids allow us to evenly split list items within a grid by
      specifying the number of items per row. Block Grids inherently add a
      negative left and right offset so it is flush with the edge of the column
      it is in.
    </p>

    <Alert type="warning" title="Note‍" className="u-mb--regular">
      <p>
        There should be no whitespace modifiers attached to{' '}
        <code>.blockGrid</code> or its direct children. You can attach them on
        adjacent DOM or by wrapping the component in a <code>&lt;div&gt;</code>
      </p>
    </Alert>

    <Live code={BlockGridExample} scope={BlockGridScope} showDocs={false} />

    <h3>Spacing modifiers</h3>

    <p>
      You can change the spacing in-between each block with the following
      modifiers to <code>.blockGrid</code>
    </p>

    <Alert type="warning" title="Note">
      <code>{'{small,medium,large}'}</code> indicate rule declarations at
      respective screen-sizes.
    </Alert>

    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code>.blockGrid--collapse</code>
            <br />
            <code>.blockGrid--collapse@{'{small,medium,large}'}</code>
          </td>
          <td>Remove gutters</td>
        </tr>
        <tr>
          <td>
            <code>.blockGrid--largeGutter</code>
            <br />
            <code>.blockGrid--largeGutter@{'{small,medium,large}'}</code>
          </td>
          <td>
            Gutters will have the equivalent spacing of <code>32px</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>.blockGrid--xlargeGutter</code>
            <br />
            <code>.blockGrid--xlargeGutter@{'{small,medium,large}'}</code>
          </td>
          <td>
            Gutters will have the equivalent spacing of <code>64px</code>
          </td>
        </tr>
      </tbody>
    </table>

    <Live
      code={BlockGridSpacingExample}
      scope={BlockGridScope}
      showDocs={false}
    />

    <h3>Size modifiers</h3>

    <p>
      Just like columns from the <a href="/grid/">Grid component</a>, Block
      Grids are constructed with the following naming pattern:{' '}
      <code>.blockGrid-{'{1-12}'}</code>. If you&apos;d like to present
      different block widths on certain breakpoints, you can use the following:{' '}
      <code>
        .blockGrid-{'{1-12}'}@{'{small,medium,large}'}
      </code>
      .
    </p>

    <p>
      You can chain these classes together for unique widths based on our global
      breakpoints:{' '}
      <code>.blockGrid-8@small blockGrid-6@medium blockGrid-4@large</code>.
    </p>

    <Alert type="warning" title="Note" className="u-mb--regular">
      Block Grids automatically have a width of <code>100%</code> when broken
      down to the smallest breakpoint unless specified (like{' '}
      <code>.blockGrid-4</code>); so <code>.blockGrid-12</code> is not needed.
    </Alert>

    <Live
      code={BlockGridSizingExample}
      scope={BlockGridScope}
      showDocs={false}
    />

    <h3>Alignment modifiers</h3>

    <p>
      You can use alignment properties attached to <code>.blockGrid</code> from
      the <a href="/flex/">Flex</a> utility.
    </p>

    <BlockGrid
      size={{ small: 2, medium: 3 }}
      css={{ justifyContent: 'flex-end' }}
    >
      <ListItem>
        <ExampleFill />
      </ListItem>
      <ListItem>
        <ExampleFill />
      </ListItem>
    </BlockGrid>
  </BaseLayout>
);

export default BlockGridDocs;
