import { addDecorator } from '@storybook/react'

import Wrapper from '../src/helpers/Wrapper'

addDecorator((storyFn) => (
  <Wrapper>
    {storyFn()}
  </Wrapper>
))
