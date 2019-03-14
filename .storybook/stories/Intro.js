import React from 'react';
import { storiesOf } from '@storybook/react';

import Overview from '../components/Overview';
import docs from './Intro.docs.md';

storiesOf('Intro', module).add('Overview', () => <Overview content={docs} />, {
  info: { disable: true },
});
