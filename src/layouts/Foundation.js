import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
// import stylisAtomic from 'stylis-atomic';
// import stylisCalc from 'stylis-calc';
import { ThemeProvider } from 'emotion-theming';
import { CacheProvider, Global } from '@emotion/core';
import createCache from '@emotion/cache';
import 'what-input';

import { Section, SectionTitle } from '../components';

import { theme } from '../assets/styles/theme';
import { contrast, misc } from '../assets/styles/utility';
import { fonts } from '../assets/styles/fonts';
import { globalStyles } from '../assets/styles/global';

const ckCache = createCache({
  key: 'ck',
  // Only prefix the following style properties
  prefix: key => {
    switch (key) {
      case 'appearance':
      case 'box-decoration-break':
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
        return true;
      default:
        return false;
    }
  },
  // stylisPlugins: [stylisCalc],
});

const Foundation = ({ children }) => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(graphql`
    query FoundationPageData {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Fragment>
      <Helmet
        title={title}
        meta={[{ name: 'description', content: description }]}
      />
      <CacheProvider value={ckCache}>
        <ThemeProvider theme={theme}>
          <Global
            styles={[globalStyles(theme), contrast.styles(theme), fonts(theme)]}
          />
          <div
            className="u-contrast"
            css={{
              padding: theme.space.xlarge,
              background: theme.color.primary.base,

              '&:hover, &:focus': {
                color: theme.color.danger.base,
                background: theme.color.warning.base,
              },

              [theme.mq.large]: {
                color: theme.color.dark.base,
              },
            }}
          >
            Test
          </div>
          <div
            css={[
              misc.fluidSize({
                theme,
                property: 'padding',
                from: theme.space.base,
                to: theme.space.large,
              }),
            ]}
          >
            fluid padding
          </div>
          <Section
            className="u-contrast"
            css={{ background: theme.color.danger.base }}
            slant="bottom"
          >
            <SectionTitle title="Header" sub="Sub" />
          </Section>
          <div
            className="u-contrast"
            css={[misc.trimChildren, { background: theme.color.primary.base }]}
          >
            <a href="https://www.google.com">Link</a>
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
};

Foundation.propTypes = {
  children: PropTypes.node,
};

export default Foundation;
