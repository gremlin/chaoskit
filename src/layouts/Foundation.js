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

import { globalStyles } from '../assets/styles/global';

const ckCache = createCache({
  key: 'ck',
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
                styles={{ ...globalStyles(theme), ...contrast.styles(theme) }}
              />
              {console.log({ theme })}
              <div
                className="u-contrast"
                css={{
                  padding: 100,
                  background: theme.color.primary.base,
                  '&:hover': {
                    background: theme.color.primary.dark,
                  },
                  color: theme.fontColor.heading,
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
