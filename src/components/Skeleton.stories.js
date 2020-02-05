import ContrastWrapper from '../../.storybook/components/ContrastWrapper'

import Inline from './Inline'
import Skeleton from './Skeleton'
import ListItem from './ListItem'

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
}

const SkeletonExample = () => (
  <Inline>
    <ListItem>
      <Skeleton css={{ width: 200, height: 50 }} />
    </ListItem>
    <ListItem>
      <Skeleton css={{ width: 50, height: 50, borderRadius: '50%' }} />
    </ListItem>
  </Inline>
)

export const Overview = () => <SkeletonExample />

export const Contrast = () => (
  <ContrastWrapper>
    <SkeletonExample />
  </ContrastWrapper>
)
