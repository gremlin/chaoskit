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
                  <ListItem>
                    <Link to="/inline/" activeClassName={config.classes.active}>Inline</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/list/" activeClassName={config.classes.active}>List</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/loader/" activeClassName={config.classes.active}>Loader</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/modal/" activeClassName={config.classes.active}>Modal</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/reveal/" activeClassName={config.classes.active}>Reveal</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/tooltip/" activeClassName={config.classes.active}>Tooltip</Link>
                  </ListItem>
                </List>
                <h5>Forms</h5>
                <List>
                  <ListItem>
                    <Link to="/checkbox/" activeClassName={config.classes.active}>Checkbox</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/choices-single/" activeClassName={config.classes.active}>Choices Single</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/choices-multi/" activeClassName={config.classes.active}>Choices Multi</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/input/" activeClassName={config.classes.active}>Input</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/radio/" activeClassName={config.classes.active}>Radio</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/select/" activeClassName={config.classes.active}>Select</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/textarea/" activeClassName={config.classes.active}>Textarea</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/toggle/" activeClassName={config.classes.active}>Toggle</Link>
                  </ListItem>
                </List>
                <h5>Utilities</h5>
                <List>
                  <ListItem>
                    <Link to="/flex/" activeClassName={config.classes.active}>Flex</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/typography/" activeClassName={config.classes.active}>Typography</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/whitespace/" activeClassName={config.classes.active}>Whitespace</Link>
                  </ListItem>
                </List>
              </aside>
              <main className="docs__content">
                {pageTitle && <h1>{pageTitle}</h1>}
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
