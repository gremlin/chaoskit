import PropTypes from 'prop-types'
import { useRef } from 'react'
import clsx from 'clsx'

import useGSAPInteraction from '../hooks/useGSAPInteraction'

import Button from './Button'
import Icon from './Icon'

const SocialIcon = ({ className, service, url, type = 'default', ...rest }) => {
  const ref = useRef()

  const interactions = useGSAPInteraction({
    ref,
    click: {
      scale: 1,
    },
  })

  return (
    <Button
      ref={ref}
      url={url}
      css={{
        transition: 'auto', // Reset to avoid conflict with GSAP animations
      }}
      className={clsx('CK__SocialIcon', className)}
      target="_blank"
      rel="noopener noreferrer nofollow"
      iconOnly
      size="small"
      type={type}
      {...interactions}
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
