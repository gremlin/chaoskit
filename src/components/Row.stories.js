import { storiesOf } from '@storybook/react';

import { Row, RowColumn } from '.';
import { flex } from '../assets/styles/utility';
import ExampleFill from '../../.storybook/components/ExampleFill';

storiesOf('Components|Row', module)
  .add(
    'Overview',
    () => (
      <Row>
        <RowColumn size={{ base: 3 }}>
          <ExampleFill />
        </RowColumn>
        <RowColumn size={{ base: 4 }}>
          <ExampleFill />
        </RowColumn>
        <RowColumn size={{ base: 5 }}>
          <ExampleFill />
        </RowColumn>
        <RowColumn size={{ base: 6 }}>
          <ExampleFill />
        </RowColumn>
        <RowColumn size={{ base: 6 }}>
          <ExampleFill />
        </RowColumn>
        <RowColumn size={{ base: 8 }}>
          <ExampleFill />
        </RowColumn>
        <RowColumn size={{ base: 4 }}>
          <ExampleFill />
        </RowColumn>
      </Row>
    ),
    {
      notes: `We use a 12-column grid with a default grid-gutter of \`16px\`.
      Columns that add-up to more than 12 automatically get some space
      in-between. So you can use grids for dayz 'yo.

      > There should be no whitespace modifiers attached to the \`<Row />\` component
        or its direct child - \`<RowColumn />\`. You can attach them on adjacent DOM or by
        wrapping the component.`,
    }
  )
  .add('Gutter Spacing', () => (
    <Row gutter={{ base: 'collapse', medium: 'small', large: 'xlarge' }}>
      <RowColumn size={{ base: 6 }}>
        <ExampleFill />
      </RowColumn>
      <RowColumn size={{ base: 6 }}>
        <ExampleFill />
      </RowColumn>
      <RowColumn size={{ base: 6 }}>
        <ExampleFill />
      </RowColumn>
      <RowColumn size={{ base: 6 }}>
        <ExampleFill />
      </RowColumn>
    </Row>
  ))
  .add('Column Sizing', () => (
    <Row>
      <RowColumn size={{ medium: 6 }}>
        <ExampleFill />
      </RowColumn>
      <RowColumn size={{ medium: 6 }}>
        <ExampleFill />
      </RowColumn>
      <RowColumn size={{ base: 6, large: 5 }}>
        <ExampleFill />
      </RowColumn>
      <RowColumn size={{ base: 6 }}>
        <ExampleFill />
      </RowColumn>
    </Row>
  ))
  .add('Alignment Modifiers', () => (
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
  ))
  .add('Source Order', () => (
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
  ))
  .add('Deep Match', () => (
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
  ));
