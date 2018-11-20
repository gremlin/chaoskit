import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import 'what-input';

import { styles } from '../helpers/styles';
import { config } from '../helpers/config';
import { List, ListItem } from '../components';

import mascot from '../assets/media/logo-mascot.svg';
import GiraLight from '../assets/fonts/gira-sans-light.woff';
import GiraMedium from '../assets/fonts/gira-sans-regular.woff';
import GiraBold from '../assets/fonts/gira-sans-bold.woff';
import CircularBook from '../assets/fonts/lineto-circular-book.woff';
import CircularMedium from '../assets/fonts/lineto-circular-medium.woff';
import CircularBlack from '../assets/fonts/lineto-circular-black.woff';
import '../assets/styles/site.scss';

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
          siteMetadata: {
            title, description,
          },
        },
      } = data;
      const { children, pageTitle } = props;

      return (
        <Fragment>
          <Helmet
            title={title}
            meta={[
              { name: 'description', content: description },
            ]}
          >
            {/* Adding in webfonts here to get around strange Gatsby issue https://github.com/gatsbyjs/gatsby/issues/9826 */}
            <style type="text/css">{`
              @font-face {
                font-family: Gira;
                src: local(😜), url(${GiraLight}) format('woff');
                font-weight: ${styles.typography.weight.normal};
                font-style: normal;
              }

              @font-face {
                font-family: Gira;
                src: local(😜), url(${GiraMedium}) format('woff');
                font-weight: ${styles.typography.weight.medium};
                font-style: normal;
              }

              @font-face {
                font-family: Gira;
                src: local(😜), url(${GiraBold}) format('woff');
                font-weight: ${styles.typography.weight.bold};
                font-style: normal;
              }

              @font-face {
                font-family: Circular;
                src: local(😜), url(${CircularBook}) format('woff');
                font-weight: ${styles.typography.weight.normal};
                font-style: normal;
              }

              @font-face {
                font-family: Circular;
                src: local(😜), url(${CircularMedium}) format('woff');
                font-weight: ${styles.typography.weight.medium};
                font-style: normal;
              }

              @font-face {
                font-family: Circular;
                src: local(😜), url(${CircularBlack}) format('woff');
                font-weight: ${styles.typography.weight.bold};
                font-style: normal;
              }
            `}
            </style>
          </Helmet>
          <div className="container">
            <div className="docs__wrapper">
              <aside className="docs__sidebar">
                <Link to="/" className="docs__mascot">
                  <img src={mascot} alt="ChaosKit" />
                </Link>
                <h5>Concepts</h5>
                <List>
                  <ListItem>
                    <Link to="/sass/" activeClassName={config.classes.active}>Sass</Link>
                  </ListItem>
                </List>
                <h5>Components</h5>
                <List>
                  <ListItem>
                    <Link to="/button/" activeClassName={config.classes.active}>Button</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/icon/" activeClassName={config.classes.active}>Icon</Link>
                  </ListItem>
                </List>
                <h5>Utilities</h5>
                <List>
                  <ListItem>
                    <Link to="/flex/" activeClassName={config.classes.active}>Flex</Link>
                  </ListItem>
                </List>
              </aside>
              <main className="docs__content">
                <h1>{pageTitle}</h1>
                {children}
              </main>
            </div>
          </div>
        </Fragment>
      );
    }}
  />
);

Foundation.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string,
};

export default Foundation;
