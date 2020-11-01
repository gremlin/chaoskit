import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import clsx from 'clsx'

import { text } from '../assets/styles/utility'

export default {
  title: 'General/Typography',
}

const TypographyColumn = ({ className, title, children, ...rest }) => {
  const theme = useTheme()

  return (
    <div
      className={clsx(theme.settings.classes.trim, className)}
      css={{
        borderRadius: theme.borderRadius.large,
        border: theme.border.base,
        boxShadow: theme.BETA__boxShadow.base,
      }}
      {...rest}
    >
      <header
        className="u-contrast"
        css={[
          text.heading(theme),
          {
            background: theme.color.dark.base,
            borderTopLeftRadius: theme.borderRadius.large,
            borderTopRightRadius: theme.borderRadius.large,
            padding: theme.space.xsmall,
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: theme.fontSize.small,
            letterSpacing: theme.letterSpacing.small,
          },
        ]}
      >
        {title}
      </header>
      <div
        css={{
          padding: theme.space.base,
        }}
      >
        {children}
      </div>
    </div>
  )
}

TypographyColumn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

const Story = () => {
  const theme = useTheme()

  return (
    <div
      css={{
        display: 'grid',
        gap: theme.space.base,

        [theme.mq.medium]: {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
      }}
    >
      <TypographyColumn title="Headings">
        {['h1', 'h2', 'h3', 'h4', 'h5'].map((heading) => {
          const Component = heading

          return <Component key={heading}>Heading {heading}</Component>
        })}
      </TypographyColumn>
      <TypographyColumn title="Font sizes">
        {Object.entries(theme.fontSize).map(([label, value]) => {
          return (
            <p
              key={label}
              css={[
                typeof value === 'object' && [value],

                typeof value !== 'object' && {
                  fontSize: value,
                },
              ]}
            >
              {label}
            </p>
          )
        })}
      </TypographyColumn>
      <TypographyColumn title="Font colors">
        {Object.entries(theme.fontColor).map(([label, value]) => {
          return (
            <p
              key={label}
              css={[
                typeof value === 'object' && [value],

                typeof value !== 'object' && [
                  label.includes('filter') && {
                    filter: value,
                  },

                  !label.includes('filter') && {
                    color: value,
                  },
                ],
              ]}
            >
              {label}
            </p>
          )
        })}
      </TypographyColumn>
    </div>
  )
}

export const Overview = Story.bind({})
