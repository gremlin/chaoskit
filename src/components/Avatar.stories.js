import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import { Avatar } from '.';

const params = {
  className: () => text('className', ''),
  image: () => text(
    'image',
    'https://images.unsplash.com/photo-1543126705-599ab38c7ccf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be9f31b2aff937a5f21120cec91fe816&auto=format&fit=crop&w=1234&q=80',
  ),
  size: () => select('size', ['default', 'large'], 'default'),
  name: () => text('name', 'Zach Schnackel'),
};

storiesOf('Components|Avatar', module).add('Overview', () => (
  <Avatar
    className={params.className()}
    image={params.image()}
    size={params.size()}
    name={params.name()}
  />
));
