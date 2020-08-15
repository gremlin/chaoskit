import { addDecorator } from '@storybook/react'

import Wrapper from '../src/helpers/Wrapper'

export const decorators = [(Story) => <Wrapper><Story /></Wrapper>]
