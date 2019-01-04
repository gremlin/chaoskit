import React from 'react';
import PropTypes from 'prop-types';

import BaseLayout from '../layouts/BaseLayout';

const Article = (props) => {
  const { children } = props;

  return <BaseLayout>{children}</BaseLayout>;
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Article;
