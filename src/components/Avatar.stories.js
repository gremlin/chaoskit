import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Avatar } from '.';

storiesOf('Components|Avatar', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .add('Overview', () => (
    <Avatar
      image="https://images.unsplash.com/photo-1543126705-599ab38c7ccf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be9f31b2aff937a5f21120cec91fe816&auto=format&fit=crop&w=1234&q=80"
      ame="Zach Schnackel"
    />
  ));
