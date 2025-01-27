import PropTypes from 'prop-types'
import { CacheProvider, Global, ThemeProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import { merge } from 'lodash'
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
    stylisPlugins: [prefixer],
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
