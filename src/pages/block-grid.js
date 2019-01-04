import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import { Alert } from '../components';
import Live from '../docs/Live';

const BlockGridExample = `
<ul className="blockGrid blockGrid-4">
  <li>
    <div className="docs__box--fill" />
  </li>
  <li>
    <div className="docs__box--fill" />
  </li>
  <li>
    <div className="docs__box--fill" />
  </li>
  <li>
    <div className="docs__box--fill" />
  </li>
  <li>
    <div className="docs__box--fill" />
  </li>
  <li>
    <div className="docs__box--fill" />
  </li>
  <li>
    <div className="docs__box--fill" />
  </li>
</ul>
`.trim();

const BlockGridSpacingExample = `
<ul className="blockGrid blockGrid-4 blockGrid--collapse blockGrid--largeGutter@small blockGrid--xlargeGutter@medium">
  <li>
    <div className="docs__box--fill" />
  </li>
  <li>
    <div className="docs__box--fill" />
  </li>
  <li>
    <div className="docs__box--fill" />
  </li>
  <li>
    <div className="docs__box--fill" />
  </li>
</ul>
`.trim();

const BlockGridSizingExample = `
<ul className="blockGrid blockGrid-2@medium blockGrid-3@large">
  <li>
    <div className="docs__box--fill" />
  </li>
  <li>
    <div className="docs__box--fill" />
  </li>
  <li>
    <div className="docs__box--fill" />
  </li>
  <li>
    <div className="docs__box--fill" />
  </li>
</ul>
`.trim();

const BlockGridAlignmentExample = `
<ul className="blockGrid blockGrid-2@small blockGrid-3@medium u-flexEnd">
  <li>
    <div className="docs__box--fill" />
  </li>
  <li>
    <div className="docs__box--fill" />
  </li>
</ul>
`.trim();

const BlockGridScope = {};

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

    <Live
      code={BlockGridAlignmentExample}
      scope={BlockGridScope}
      showDocs={false}
    />
  </BaseLayout>
);

export default BlockGridDocs;
