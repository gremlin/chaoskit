import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'

import Button from './Button'

const SocialIcon = ({
  className,
  children,
  url,
  type = 'default',
  ...rest
}) => {
  const theme = useTheme()

  return (
    <Button
      url={url}
      css={{
        transition: `all ${theme.timing.base} ${theme.transition.bounce}`,
        transformOrigin: 'center center',

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
      {children}
    </Button>
  )
}

SocialIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
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
