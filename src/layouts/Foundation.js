import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import 'what-input';

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
    render={data => {
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
