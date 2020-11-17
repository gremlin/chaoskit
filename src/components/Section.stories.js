import { useTheme } from '@emotion/react'

import Container from './Container'
import Section from './Section'
import SectionTitle from './SectionTitle'

export default {
  title: 'Components/Section',
  component: Section,
  subcomponents: { Container, SectionTitle },
}

const Story = (args) => {
  const theme = useTheme()

  return (
    <Section css={{ background: theme.color.panel.base }} {...args}>
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
}

export const Overview = Story.bind({})
