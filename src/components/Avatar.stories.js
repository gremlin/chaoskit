import { select, text } from '@storybook/addon-knobs'

import Avatar from './Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
}

const params = {
  image: () => text('image', 'https://source.unsplash.com/random'),
  size: () => select('size', ['xsmall', 'small', 'base', 'large'], 'base'),
  name: () => text('name', 'Zach Schnackel'),
  fallbackIcon: () => text('fallback icon', 'user-circle'),
}

// @TODO For docs
// Without the `image` prop, Avatars will first attempt to create a monogram version based on the `name` prop; ultimately falling back to a generic user icon.

export const overview = () => (
  <Avatar
    fallbackIcon={params.fallbackIcon()}
    image={params.image()}
    size={params.size()}
    name={params.name()}
  />
)
