import React from 'react';
import PropTypes from 'prop-types';

import FoundationLayout from './Foundation';

const Article = (props) => {
  const { children } = props;

  return (
    <FoundationLayout>
      {children}
    </FoundationLayout>
  );
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Article;
