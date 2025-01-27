import PropTypes from 'prop-types'
import * as React from 'react'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'

import { text } from '../assets/styles/utility'

import Icon from './Icon'

export const StylesAvatarVariables = (theme) => ({
  background: theme.color.panel.base,
  color: theme.fontColor.base,
  size: {
    xsmall: theme.height.xsmall,
    small: theme.height.small,
    base: theme.height.base,
    get large() {
      return this.base * 2
    },
  },
})

const StylesAvatarBase = (theme, props = {}) => [
  // 1. Fix issue with alignment of inlined avatars
  {
    backgroundColor: StylesAvatarVariables(theme).background,
    borderRadius: theme.borderRadius.rounded,
    color: StylesAvatarVariables(theme).color,
    display: 'inline-flex',
    marginBottom: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'relative',
    width: StylesAvatarVariables(theme).size[props.size],
    height: StylesAvatarVariables(theme).size[props.size],
  },
]

const Avatar = ({
  className,
  fallbackIcon = 'user-circle',
  image,
  name,
  size = 'base',
  ...rest
}) => {
  const theme = useTheme()
  const [error, setError] = React.useState(false)

  const nameProp = name ? name.trim() : ''

  // If image exists, use image for background
  if (image && !error) {
    return (
      <figure
        css={[StylesAvatarBase(theme, { size })]}
        className={clsx('CK__Avatar', className)}
        {...rest}
      >
        <img
          loading="lazy"
          alt={nameProp}
          onError={() => setError(true)}
          src={image}
          css={{
            objectFit: 'cover',
          }}
        />
      </figure>
    )
  }

  // If no image and no name, use icon
  if (!image && !nameProp) {
    return (
      <figure
        css={[StylesAvatarBase(theme, { size })]}
        className={clsx('CK__Avatar', className)}
        {...rest}
      >
        <Icon
          icon={fallbackIcon}
          css={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </figure>
    )
  }

  let splitName = null
  let initials = null

  if (nameProp) {
    splitName = name.split(' ')
    initials = splitName[0][0] + splitName[splitName.length - 1][0]
  }

  // https://stackoverflow.com/a/48841447/1026742
  // For text alignment
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      css={[StylesAvatarBase(theme, { size })]}
      className={clsx('CK__Avatar', className)}
      {...rest}
    >
      <circle
        cx="50"
        cy="50"
        r="50"
        css={[{ fill: StylesAvatarVariables(theme).background }]}
      />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dy="0.35em"
        fontSize="40"
        css={[
          {
            fill: StylesAvatarVariables(theme).color,
            fontWeight: theme.fontWeight.base,
            textTransform: 'uppercase',
          },
        ]}
      >
        {initials}
      </text>
    </svg>
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
  fallbackIcon: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'base', 'large']),
  src: PropTypes.string,
}

export default Avatar
