import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { Container, Section, SectionTitle } from '.';

storiesOf('Components|Section', module).add('Overview', () => (
  <Section
    css={theme => ({
      background: theme.color.panel.base,
    })}
    slant={select('Slant', ['', 'top', 'bottom', 'bottom-shadow'], null)}
    space={select(
      'Space',
      ['small', 'base', 'medium', 'large', 'xlarge'],
      'large'
    )}
  >
    <Container>
      <SectionTitle title="Title" sub="Subtitle" />
      <p>Section content.</p>
    </Container>
  </Section>
));
