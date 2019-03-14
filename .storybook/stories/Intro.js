import React from 'react';
import { storiesOf } from '@storybook/react';

import Markdown from '../components/Markdown';
import overviewDocs from './Overview.docs.md';
import sassDocs from './Sass.docs.md';

storiesOf('Concepts|👋', module)
  .add('Overview', () => <Markdown content={overviewDocs} />, {
    info: { disable: true },
  })
  .add('Sass', () => <Markdown content={sassDocs} />, {
    info: { disable: true },
  });
