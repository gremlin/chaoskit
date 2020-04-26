import { addDecorator } from '@storybook/react';

import Wrapper from '../src/helpers/Wrapper';

addDecorator(storyFn => (
  <Wrapper>
    <div
      css={theme => ({
        padding: theme.space.base,
      })}
    >
      {storyFn()}
    </div>
  </Wrapper>
));
