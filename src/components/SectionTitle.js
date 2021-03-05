import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@emotion/react'

export const StylesSectionTitleWrapper = (theme, props) => {
  // Translate "align" prop to work with `justifyItems`
  const getJustify = (align) => {
    if (align === 'left') return 'start'

    if (align === 'right') return 'end'

    return align
  }

  return [
    props.space === 'xlarge' && {
      marginBottom: theme.space.large,

      [theme.mq.medium]: {
        marginBottom: theme.space.xlarge,
      },
    },

    props.space === 'large' && {
      marginBottom: theme.space.medium,

      [theme.mq.medium]: {
        marginBottom: theme.space.large,
      },
    },

    {
      display: 'grid',
      justifyItems: 'center',
      textAlign: 'center',
    },

    props.align.base &&
      props.align.base !== 'center' && {
        textAlign: props.align.base,
        justifyItems: getJustify(props.align.base),
      },

    props.align.small && {
      [theme.mq.small]: {
        textAlign: props.align.small,
        justifyItems: getJustify(props.align.small),
      },
    },

    props.align.medium && {
      [theme.mq.medium]: {
        textAlign: props.align.medium,
        justifyItems: getJustify(props.align.medium),
      },
    },

    props.align.large && {
      [theme.mq.large]: {
        textAlign: props.align.large,
        justifyItems: getJustify(props.align.large),
      },
    },

    props.align.xlarge && {
      [theme.mq.xlarge]: {
        textAlign: props.align.xlarge,
        justifyItems: getJustify(props.align.xlarge),
      },
    },
  ]
}

export const StylesSectionTitleSub = (theme) => [
  {
    color: theme.fontColor.base,
    ...theme.text.medium,
    maxWidth: 750,

    '.u-contrast &': {
      color: theme.contrast.base,
    },
  },
]

const SectionTitle = ({
  align = { base: 'center' },
  as: Component = 'h3',
  children,
  className,
  space = 'xlarge',
  sub,
  subProps,
  title,
  titleProps,
  ...rest
}) => {
  const theme = useTheme()

  return (
    <div
      className={clsx(
        `CK__SectionTitle ${theme.settings.classes.trim}`,
        className
      )}
      css={StylesSectionTitleWrapper(theme, { space, align })}
      {...rest}
    >
      <Component
        css={{
          marginBottom: theme.space.small,

          [theme.mq.medium]: {
            marginBottom: theme.space.base,
          },
        }}
        className="CK__SectionTitle__Header"
        {...titleProps}
      >
        {title}
      </Component>
      {sub && (
        <div
          className="CK__SectionTitle__Sub"
          css={StylesSectionTitleSub(theme)}
          {...subProps}
        >
          {sub}
        </div>
      )}
      {children}
    </div>
  )
}

SectionTitle.propTypes = {
  children: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  titleProps: PropTypes.object,
  as: PropTypes.string,
  sub: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subProps: PropTypes.object,
  className: PropTypes.string,
  space: PropTypes.string,
  align: PropTypes.shape({
    base: PropTypes.oneOf(['left', 'center', 'right']),
    small: PropTypes.oneOf(['left', 'center', 'right']),
    medium: PropTypes.oneOf(['left', 'center', 'right']),
    large: PropTypes.oneOf(['left', 'center', 'right']),
    xlarge: PropTypes.oneOf(['left', 'center', 'right']),
  }),
}

export default SectionTitle
