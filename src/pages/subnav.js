import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import { Inline, ListItem } from '../components';
import Subnav, { SubnavMenuItemStyles } from '../components/Subnav';

const SubnavDocs = () => (
  <BaseLayout pageTitle="Subnav">
    <p>
      While no one likes to wait; great things come to those that do. For those
      times, a loader is available to notify users some magic is happening
      behind the scenes.
    </p>

    <Subnav>
      <Inline as="ul" size="large" wrap={false}>
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
  </BaseLayout>
);

export default SubnavDocs;
