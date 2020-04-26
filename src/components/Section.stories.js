import { select } from '@storybook/addon-knobs'

import Container from './Container'
import RowColumn from './RowColumn'
import Section from './Section'
import SectionTitle from './SectionTitle'

export default {
  title: 'Components/Section',
  component: Section,
}

export const Overview = () => (
  <Section
    as={RowColumn}
    css={(theme) => ({
      background: theme.color.panel.base,
    })}
    slant={select('Slant', ['', 'top', 'bottom', 'bottom-shadow'], null)}
    space={select(
      'Space',
      ['xsmall', 'small', 'base', 'medium', 'large', 'xlarge'],
      'large'
    )}
  >
    <Container>
      <SectionTitle
        align={{ medium: 'left' }}
        space="large"
        title="Title"
        sub="Subtitle"
      />
      <p>Section content.</p>
    </Container>
  </Section>
)
