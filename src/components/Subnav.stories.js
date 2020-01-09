import { storiesOf } from '@storybook/react';

import { Inline, ListItem, Subnav } from '.';
import { SubnavMenuItemStyles } from './Subnav';

storiesOf('Components|Subnav', module).add('Overview', () => (
  <Subnav>
    <Inline size="large" wrap={false}>
      <ListItem>
        <a
          href="https://www.google.com"
          css={theme => SubnavMenuItemStyles(theme)}
        >
          Test
        </a>
      </ListItem>
      <ListItem>
        <a
          href="https://www.google.com"
          css={theme => SubnavMenuItemStyles(theme)}
        >
          Test
        </a>
      </ListItem>
      <ListItem>
        <a
          href="https://www.google.com"
          disabled
          css={theme => SubnavMenuItemStyles(theme)}
        >
          Disabled
        </a>
      </ListItem>
      <ListItem>
        <a
          href="https://www.google.com"
          css={theme => SubnavMenuItemStyles(theme)}
        >
          Test
        </a>
      </ListItem>
      <ListItem>
        <a
          href="https://www.google.com"
          css={theme => SubnavMenuItemStyles(theme)}
        >
          Test
        </a>
      </ListItem>
      <ListItem>
        <a
          href="https://www.google.com"
          css={theme => SubnavMenuItemStyles(theme, { active: true })}
        >
          Active
        </a>
      </ListItem>
    </Inline>
  </Subnav>
));
