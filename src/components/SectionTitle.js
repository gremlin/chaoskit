import PropTypes from 'prop-types'
import cx from 'classnames'
import { useTheme } from 'emotion-theming'

import { misc } from '../assets/styles/utility'

export const StylesSectionTitleWrapper = (theme, props) => {
  // Translate "align" prop to work with `justifyItems`
  const getJustify = align => {
    if (align === 'left') return 'start'

    if (align === 'right') return 'end'

    return align
  }

  return [
    props.space === 'xlarge' &&
      misc.fluidSize({
        theme,
        property: 'marginBottom',
        from: theme.space.large,
        to: theme.space.xlarge,
      }),
    props.space === 'large' &&
      misc.fluidSize({
        theme,
        property: 'marginBottom',
        from: theme.space.medium,
        to: theme.space.large,
      }),
    {
      display: 'grid',
      gridTemplateColumns: 'minmax(auto, 1fr)',
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

export const StylesSectionTitleSub = theme => [
  {
    color: theme.fontColor.muted,
    fontSize: theme.fontSize.medium,
    maxWidth: 625,

    '.u-contrast &': {
      color: theme.contrast.muted,
    },
  },
]

const SectionTitle = ({
  title,
  titleProps,
  as: Component,
  sub,
  subProps,
  space,
  children,
  className,
  align,
  ...rest
}) => {
  const theme = useTheme()

  return (
    <div
      className={cx(
        `CK__SectionTitle ${theme.settings.classes.trim}`,
        className
      )}
      css={StylesSectionTitleWrapper(theme, { space, align })}
      {...rest}
    >
      <Component
        css={[
          misc.fluidSize({
            theme,
            property: 'marginBottom',
            from: theme.space.small,
            to: theme.space.base,
          }),
        ]}
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

SectionTitle.defaultProps = {
  as: 'h3',
  space: 'xlarge',
  align: { base: 'center' },
}

export default SectionTitle
