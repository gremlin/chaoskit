import React from 'react';
import PropTypes from 'prop-types';
import remark from 'remark';
import html from 'remark-html';

const Overview = props => {
  const { content } = props;

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: remark()
          .use(html)
          .processSync(content)
          .toString(),
      }}
    />
  );
};

Overview.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Overview;
