import PropTypes from 'prop-types'
import { Fragment } from 'react'

import { theme } from '../assets/styles/theme'

import BlockGrid from './BlockGrid'
import ListItem from './ListItem'

export default {
  title: 'General/Colors',
}

const ColorItem = ({ label, value }) => {
  const isFilter = label.includes('filter')

  return (
    <ListItem>
      <div
        css={{
          borderRadius: theme.borderRadius.base,
          padding: theme.space.small,
          boxShadow: theme.boxShadow.base,
          border: theme.border.base,
          textAlign: 'center',
        }}
      >
        <div
          css={{ paddingTop: '56.25%', marginBottom: theme.space.small }}
          style={{
            background: isFilter ? '#fff' : value,
            filter: isFilter && value,
          }}
        />
        <code>{label}</code>
      </div>
    </ListItem>
  )
}

ColorItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export const Overview = () => {
  return (
    <Fragment>
      <h3>Brand</h3>
      <div
        css={{
          marginTop: theme.space.base,
          marginBottom: theme.space.base,
        }}
      >
        <code>theme.brand</code>
      </div>
      <BlockGrid size={{ small: 2, medium: 4 }}>
        {Object.entries(theme.brand).map(([key, value]) => (
          <ColorItem key={key} label={key} value={value} />
        ))}
      </BlockGrid>

      <h3>Variables</h3>
      {Object.entries(theme.color).map(([colorKey]) => (
        <Fragment>
          <div
            css={{
              marginTop: theme.space.base,
              marginBottom: theme.space.base,
            }}
          >
            <code>theme.color.{colorKey}</code>
          </div>
          <BlockGrid size={{ small: 2, medium: 4 }}>
            {Object.entries(theme.color[colorKey]).map(([key, value]) => (
              <ColorItem key={key} label={key} value={value} />
            ))}
          </BlockGrid>
        </Fragment>
      ))}
    </Fragment>
  )
}
