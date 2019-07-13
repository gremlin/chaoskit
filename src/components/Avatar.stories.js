import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import { Avatar } from '.';

const params = {
  image: () => text('image', 'https://source.unsplash.com/random'),
  size: () => select('size', ['default', 'large'], 'default'),
  name: () => text('name', 'Zach Schnackel'),
};

storiesOf('Components|Avatar', module).add('Overview', () => (
  <Avatar image={params.image()} size={params.size()} name={params.name()} />
));
