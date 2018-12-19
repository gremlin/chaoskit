import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import 'what-input';

import { styles } from '../helpers/styles';
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
      const { children } = props;

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
          {children}
        </Fragment>
      );
    }}
  />
);

Foundation.propTypes = {
  children: PropTypes.node,
};

export default Foundation;
