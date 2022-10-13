import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'

import { misc, text } from '../assets/styles/utility'

import Container from './Container'

const StylesSubnavVariables = (theme) => ({
  height: theme.height.large,
})

export const SubnavMenuItemStyles = (theme) => [
  {
    color: theme.fontColor.muted,
    display: 'block',
    height: StylesSubnavVariables(theme).height,
    lineHeight: `${StylesSubnavVariables(theme).height}px`,
    position: 'relative',
    fontSize: theme.fontSize.small,
    fontWeight: theme.fontWeight.bold,
    ...text.expanded(theme),
    transition: `color ${theme.timing.base} ${theme.transition.base}`,

    '&:hover, &:focus': {
      color: theme.fontColor.base,
    },

    '&[disabled]': {
      opacity: theme.opacity.base,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },

    '&.is-active': {
      color: theme.fontColor.base,

      '&::before': {
        content: "''",
        position: 'absolute',
        left: 0,
        width: '100%',
        bottom: 0,
        height: 3,
        background: theme.color.primary.base,
      },
    },
  },
]

const Subnav = ({ children, className, ...rest }) => {
  const theme = useTheme()

  return (
    <div
      css={{
        background: theme.brand.stone50,
        borderBottom: theme.border.large,
      }}
      className={clsx('CK__Subnav', className)}
      {...rest}
    >
      <Container
        css={[
          misc.overflow,
          {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: StylesSubnavVariables(theme).height,
          },
        ]}
      >
        {children}
      </Container>
    </div>
  )
}

Subnav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Subnav
