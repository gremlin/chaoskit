import Container from './Container'

export default {
  title: 'Components/Container',
  component: Container,
}

const Story = (args) => <Container {...args}>Children</Container>

export const Overview = Story.bind({})
