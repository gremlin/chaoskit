import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'emotion-theming';
import { CacheProvider, Global, css } from '@emotion/core';
import createCache from '@emotion/cache';
import 'what-input';

import { theme } from '../assets/styles/theme';
import { contrast } from '../assets/styles/utility';
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
                css={css`
                  padding: ${theme.space.xlarge}px;
                  background: ${theme.color.primary.base};

                  &:hover,
                  &:focus {
                    color: ${theme.color.danger.base};
                    background: ${theme.color.warning.base};
                  }

                  ${theme.mq.large} {
                    color: ${theme.color.dark.base};
                  }
                `}
              >
                Test
              </div>
              <div
                className="u-contrast"
                css={css`
                  padding: 100px;
                `}
              >
                <h1>Heading H1</h1>
                <h2>Heading H2</h2>
                <h3>Heading H3</h3>
                <h4>Heading H4</h4>
                <h5>Heading H5</h5>
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
