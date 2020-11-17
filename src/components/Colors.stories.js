import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import { Fragment } from 'react'

import ListItem from './ListItem'
import Inline from './Inline'

export default {
  title: 'General/Color',
}

const ColorBlock = ({ title, ...rest }) => {
  const theme = useTheme()

  return (
    <div
      css={{
        borderRadius: theme.borderRadius.large,
        border: theme.border.base,
        boxShadow: theme.boxShadow.base,
        padding: theme.space.xsmall,
      }}
    >
      <div
        css={{
          height: theme.height.large,
          borderRadius: theme.borderRadius.large,
        }}
        {...rest}
      />
      <div
        css={{
          marginTop: theme.space.small,
          fontFamily: theme.fontFamily.code,
        }}
      >
        {title}
      </div>
    </div>
  )
}

ColorBlock.propTypes = {
  title: PropTypes.string.isRequired,
}

const Story = () => {
  const theme = useTheme()

  return Object.entries(theme.color).map(([label, value]) => {
    return (
      <Fragment key={label}>
        <h5>{label}</h5>
        <Inline>
          {Object.entries(value).map(([colorLabel, colorValue]) => {
            return (
              <ListItem key={colorValue}>
                <ColorBlock
                  title={colorLabel}
                  css={[
                    colorLabel.includes('filter') && {
                      background: '#000',
                      filter: theme.color[label][colorLabel],
                    },

                    !colorLabel.includes('filter') && {
                      background: theme.color[label][colorLabel],
                    },
                  ]}
                />
              </ListItem>
            )
          })}
        </Inline>
      </Fragment>
    )
  })
}

export const Overview = Story.bind({})
