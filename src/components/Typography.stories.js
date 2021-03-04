import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
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
        boxShadow: theme.boxShadow.base,
      }}
      {...rest}
    >
      <header
        className="u-contrast"
        css={[
          {
            background: theme.color.dark.base,
            borderTopLeftRadius: theme.borderRadius.large,
            borderTopRightRadius: theme.borderRadius.large,
            padding: theme.space.xsmall,
            textAlign: 'center',
            fontWeight: theme.fontWeight.bold,
            ...text.expanded(theme),
            ...theme.text.small,
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
      <TypographyColumn title="Content">
        <h2>Heading 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          reprehenderit corporis magnam atque praesentium et, ab tempore eveniet
          non, delectus vel, odit ipsa nulla fugiat reiciendis ullam laudantium
          consequatur quidem!
        </p>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          reprehenderit corporis magnam atque praesentium et, ab tempore eveniet
          non, delectus vel, odit ipsa nulla fugiat reiciendis ullam laudantium
          consequatur quidem!
        </p>
        <h4>Heading 4</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          reprehenderit corporis magnam atque praesentium et, ab tempore eveniet
          non, delectus vel, odit ipsa nulla fugiat reiciendis ullam laudantium
          consequatur quidem!
        </p>
      </TypographyColumn>
    </div>
  )
}

export const Overview = Story.bind({})
