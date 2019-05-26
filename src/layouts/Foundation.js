import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'emotion-theming';
import { CacheProvider, Global } from '@emotion/core';
import createCache from '@emotion/cache';
import 'what-input';

import { theme } from '../assets/styles/theme';
import { misc, contrast } from '../assets/styles/utility';
import { fonts } from '../assets/styles/fonts';

import { globalStyles } from '../assets/styles/global';

const ckCache = createCache({
  key: 'ck',
  // Only prefix the following style properties
  prefix: (key) => {
    switch (key) {
      case 'appearance':
      case 'user-select':
      case ':placeholder':
        return true;
      default:
        return false;
    }
  },
});

const Foundation = props => (
  <StaticQuery
    query={graphql`
      query FoundationPageData {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data) => {
      const {
        site: {
          siteMetadata: { title, description },
        },
      } = data;
      const { children } = props;

      return (
        <Fragment>
          <Helmet
            title={title}
            meta={[{ name: 'description', content: description }]}
          />
          <CacheProvider value={ckCache}>
            <ThemeProvider theme={theme}>
              <Global
                styles={{
                  ...globalStyles(theme),
                  ...contrast.styles(theme),
                }}
              />
              <Global styles={fonts(theme)} />
              <div
                className="u-contrast"
                css={{
                  padding: 100,
                  background: `linear-gradient(to right, ${
                    theme.color.primary.base
                  }, ${theme.color.primary.dark})`,

                  '&:hover, &:focus': {
                    background: theme.color.primary.dark,
                  },

                  [theme.mq.large]: {
                    background: theme.color.danger.base,
                  },
                }}
              >
                <h1>Test</h1>
                <div
                  css={{
                    ...misc.spaceChildren({ theme, property: 'marginTop' }),
                  }}
                >
                  <div>test1</div>
                  <div>test1</div>
                  <a href="http://www.google.com">Google</a>
                </div>
              </div>
              {children}
            </ThemeProvider>
          </CacheProvider>
        </Fragment>
      );
    }}
  />
);

Foundation.propTypes = {
  children: PropTypes.node,
};

export default Foundation;
