import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from './Icon';

const SocialIcon = ({ className, service, title, url }) => {
  const classes = cx('socialIcon', className);

  return (
    <a
      href={url}
      className={classes}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={service} />
    </a>
  );
};

SocialIcon.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
  service: PropTypes.oneOf([
    'twitter',
    'facebook',
    'instagram',
    'youtube',
    'linkedin',
    'hacker-news',
    'rss',
  ]),
  title: PropTypes.string,
};

export default SocialIcon;
