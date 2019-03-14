import React from 'react';
import { storiesOf } from '@storybook/react';

import Overview from '../../.storybook/components/Overview';
import docs from './Sass.docs.md';

storiesOf('Sass', module).add('Overview', () => <Overview content={docs} />, {
  info: { disable: true },
});
