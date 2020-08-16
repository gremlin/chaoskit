import Pagination from './Pagination'

export default {
  title: 'Components/Pagination',
  component: Pagination,
}

const Story = (args) => <Pagination {...args} />

export const Overview = Story.bind({})
