import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'emotion-theming';
import { CacheProvider, Global } from '@emotion/core';
import createCache from '@emotion/cache';
import 'what-input';

import { theme } from '../assets/styles/theme';
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
              <Global styles={{ ...globalStyles(theme) }} />
              {console.log({ theme })}
              <div
                css={{
                  padding: 100,
                  background: theme.color.danger.base,
                  '&:hover': {
                    background: theme.color.danger.dark,
                  },
                  color: theme.fontColor.heading,
                  ...theme.fontSize.h1__fluid,
                }}
              >
                <h1>Test</h1>
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
