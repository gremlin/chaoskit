import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import { Alert, Row, RowColumn } from '../components';
import Live from '../docs/Live';
import ExampleFill from '../../.storybook/components/ExampleFill';

import { flex } from '../assets/styles/utility';

const GridExample = `
<Row>
  <RowColumn size={{base: 3}}><ExampleFill/></RowColumn>
  <RowColumn size={{base: 4}}><ExampleFill/></RowColumn>
  <RowColumn size={{base: 5}}><ExampleFill/></RowColumn>
  <RowColumn size={{base: 6}}><ExampleFill/></RowColumn>
  <RowColumn size={{base: 6}}><ExampleFill/></RowColumn>
  <RowColumn size={{base: 8}}><ExampleFill/></RowColumn>
  <RowColumn size={{base: 4}}><ExampleFill/></RowColumn>
</Row>
`.trim();

const GridSpacingExample = `
<Row gutter={{base: 'collapse', medium: 'small', large: 'xlarge'}}>
  <RowColumn size={{base: 6}}><ExampleFill/></RowColumn>
  <RowColumn size={{base: 6}}><ExampleFill/></RowColumn>
  <RowColumn size={{base: 6}}><ExampleFill/></RowColumn>
  <RowColumn size={{base: 6}}><ExampleFill/></RowColumn>
</Row>
`.trim();

const GridSizingExample = `
<Row>
  <RowColumn size={{medium: 6}}><ExampleFill /></RowColumn>
  <RowColumn size={{medium: 6}}><ExampleFill /></RowColumn>
  <RowColumn size={{base: 6, large: 5}}><ExampleFill /></RowColumn>
  <RowColumn size={{base: 6}}><ExampleFill /></RowColumn>
</Row>
`.trim();

const GridScope = { Row, RowColumn, ExampleFill };

const GridDocs = () => (
  <BaseLayout pageTitle="Grid">
    <p>
      We use a 12-column grid with a default grid-gutter of <code>16px</code>.
      Columns that add-up to more than 12 automatically get some space
      in-between. So you can use grids for dayz &apos;yo.
    </p>

    <Alert type="warning" title="Note‍" className="u-mb--regular">
      <p>
        There should be no whitespace modifiers attached to <code>.row</code> or
        its direct children. You can attach them on adjacent DOM or by wrapping
        the component in a <code>&lt;div&gt;</code>
      </p>
    </Alert>

    <Live code={GridExample} scope={GridScope} showDocs={false} />

    <h3>Spacing modifiers</h3>

    <p>
      You can change the spacing in-between each block with the following
      modifiers to <code>.row</code>
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
            <code>.row--collapse</code>
            <br />
            <code>.row--collapse@{'{small,medium,large}'}</code>
          </td>
          <td>Remove gutters</td>
        </tr>
        <tr>
          <td>
            <code>.row--largeGutter</code>
            <br />
            <code>.row--largeGutter@{'{small,medium,large}'}</code>
          </td>
          <td>
            Gutters will have the equivalent spacing of <code>32px</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>.row--xlargeGutter</code>
            <br />
            <code>.row--xlargeGutter@{'{small,medium,large}'}</code>
          </td>
          <td>
            Gutters will have the equivalent spacing of <code>64px</code>
          </td>
        </tr>
      </tbody>
    </table>

    <Live code={GridSpacingExample} scope={GridScope} showDocs={false} />

    <h3>Size modifiers</h3>

    <p>
      Columns are constructed with the following naming pattern:{' '}
      <code>.column-{'{1-12}'}</code>. If you&apos;d like to present different
      block widths on certain breakpoints, you can use the following:{' '}
      <code>
        .column-{'{1-12}'}@{'{small,medium,large}'}
      </code>
      .
    </p>

    <p>
      You can chain these classes together for unique widths based on our global
      breakpoints: <code>.column-8@small column-6@medium column-4@large</code>.
    </p>

    <Alert type="warning" title="Note" className="u-mb--regular">
      Columns automatically have a width of <code>100%</code> when broken down
      to the smallest breakpoint unless specified (like <code>.column-4</code>);
      so <code>.column-12</code> is not needed.
    </Alert>

    <Live code={GridSizingExample} scope={GridScope} showDocs={false} />

    <h3>Alignment modifiers</h3>

    <p>
      You can use alignment properties attached to <code>.row</code> from the{' '}
      <a href="/flex/">Flex</a> utility.
    </p>

    <Row css={{ alignItems: 'center', justifyContent: 'flex-end' }}>
      <RowColumn size={{ base: 4 }}>
        <ExampleFill>
          <p>
            Guards! Bring me the forms I need to fill out to have her taken
            away! Why would a robot need to drink? Soothe us with sweet lies.
            THE BIG BRAIN AM WINNING AGAIN! I AM THE GREETEST! NOW I AM LEAVING
            EARTH, FOR NO RAISEN!
          </p>
        </ExampleFill>
      </RowColumn>
      <RowColumn size={{ base: 4 }}>
        <ExampleFill>
          <p>
            Now Fry, it's been a few years since medical school, so remind me.
            Disemboweling in your species: fatal or non-fatal? Why would I want
            to know that? Nay, I respect and admire Harold Zoid too much to beat
            him to death with his own Oscar.
          </p>
          <p>
            Bender, quit destroying the universe! Switzerland is small and
            neutral! We are more like Germany, ambitious and misunderstood! I'm
            just glad my fat, ugly mama isn't alive to see this day. I usually
            try to keep my sadness pent up inside where it can fester quietly as
            a mental illness.
          </p>
        </ExampleFill>
      </RowColumn>
    </Row>

    <h3>Source order modifiers</h3>

    <p>
      Depending on the screen-size, you may need to adjust the order of
      illustrations and/or text. You may use the <code>.column--first</code> or{' '}
      <code>.column--last</code> modifier attached directly to a specific{' '}
      <code>.column</code>.
    </p>

    <Row>
      <RowColumn size={{ base: 4 }} order={{ medium: 'last' }}>
        <ExampleFill>
          <p>Last on medium breakpoint and up</p>
        </ExampleFill>
      </RowColumn>
      <RowColumn size={{ base: 4 }}>
        <ExampleFill>
          <p>First until medium breakpoint</p>
        </ExampleFill>
      </RowColumn>
    </Row>

    <h3>Deep Match</h3>

    <Row css={flex.deepMatch}>
      <RowColumn size={{ medium: 4 }}>
        <ExampleFill>
          <p>Should be just as tall as next column.</p>
        </ExampleFill>
      </RowColumn>
      <RowColumn size={{ medium: 4 }}>
        <ExampleFill>
          <p>
            Now Fry, it's been a few years since medical school, so remind me.
            Disemboweling in your species: fatal or non-fatal? Why would I want
            to know that? Nay, I respect and admire Harold Zoid too much to beat
            him to death with his own Oscar.
          </p>
          <p>
            Bender, quit destroying the universe! Switzerland is small and
            neutral! We are more like Germany, ambitious and misunderstood! I'm
            just glad my fat, ugly mama isn't alive to see this day. I usually
            try to keep my sadness pent up inside where it can fester quietly as
            a mental illness.
          </p>
        </ExampleFill>
      </RowColumn>
    </Row>
  </BaseLayout>
);

export default GridDocs;
