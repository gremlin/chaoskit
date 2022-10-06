import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'

import Button from './Button'
import Icon from './Icon'

const SocialIcon = ({ className, service, url, type = 'default', ...rest }) => {
  const theme = useTheme()

  return (
    <Button
      url={url}
      css={{
        transition: `all ${theme.timing.base} ${theme.transition.bounce}`,
        transformOrigin: 'center center',
        borderColor: 'transparent !important',
        backgroundColor: 'transparent',

        '&:hover, &:focus': {
          transform: 'scale(1.1)',
        },
      }}
      className={clsx('CK__SocialIcon', className)}
      target="_blank"
      rel="noopener noreferrer nofollow"
      iconOnly
      size="small"
      type={type}
      {...rest}
    >
      <Icon icon={service} />
    </Button>
  )
}

SocialIcon.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
  service: PropTypes.oneOf([
    'twitter',
    'facebook',
    'instagram',
    'youtube',
    'linkedin',
    'hacker-news',
    'rss',
  ]),
  type: PropTypes.oneOf([
    'reset',
    'default',
    'primary',
    'secondary',
    'danger',
    'outlinePrimary',
  ]),
}

export default SocialIcon
