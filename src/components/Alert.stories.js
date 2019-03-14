import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Alert } from '.';

const params = {
  children: () => text('Body', 'Alert body text.'),
  className: () => text('Class', ''),
  collapse: () => boolean('Collapse', false),
  close: () => boolean('Close', false),
  title: () => text('Title', 'Title'),
  type: () => select('Type', ['default', 'primary', 'warning', 'danger'], 'default'),
};

storiesOf('Components|Alert', module).add('Variations', () => (
  <Alert
    className={params.className()}
    collapse={params.collapse()}
    close={params.close()}
    title={params.title()}
    type={params.type()}
  >
    {params.children()}
  </Alert>
));
