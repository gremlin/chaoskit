import PropTypes from 'prop-types'
import { ThemeProvider, CacheProvider, Global } from '@emotion/react'
import createCache from '@emotion/cache'
import { merge } from 'lodash-es'
import 'what-input'

import { theme } from '../assets/styles/theme'
import { fonts } from '../assets/styles/fonts'
import { globalStyles } from '../assets/styles/global'

// Handy-dandy utility function to deep-merge themes
export function extendTheme(...themes) {
  return merge({}, ...themes)
}

export const createCKCache = () =>
  createCache({
    key: 'ck',
    // Only prefix the following style properties
    prefix: (key) => {
      switch (key) {
        case 'appearance':
        case 'backdrop-filter':
        case 'box-decoration-break':
        case 'clip-path':
        case 'mask-border-outset':
        case 'mask-border-repeat':
        case 'mask-border-slice':
        case 'mask-border-source':
        case 'mask-border-width':
        case 'mask-border':
        case 'mask-clip':
        case 'mask-composite':
        case 'mask-image':
        case 'mask-origin':
        case 'mask-position':
        case 'mask-repeat':
        case 'mask-size':
        case 'mask':
        case 'text-emphasis-color':
        case 'text-emphasis-position':
        case 'text-emphasis-style':
        case 'text-emphasis':
          return true
        default:
          return false
      }
    },
  })

export const ckCache = createCKCache()

const Wrapper = ({ children }) => (
  <CacheProvider value={ckCache}>
    <ThemeProvider theme={theme}>
      <Global styles={[globalStyles(theme), fonts(theme)]} />
      {children}
    </ThemeProvider>
  </CacheProvider>
)

Wrapper.propTypes = {
  children: PropTypes.node,
}

export default Wrapper
