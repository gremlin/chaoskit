import PropTypes from 'prop-types';

import Button from './Button';
import Icon from './Icon';

const SocialIcon = ({ className, service, title, url, ...opts }) => (
  <Button
    url={url}
    css={theme => ({
      transition: `all ${theme.timing.base} ${theme.transition.bounce}`,

      '&:hover, &:focus': {
        transform: 'scale(1.1)',
      },
    })}
    title={title}
    target="_blank"
    rel="noopener noreferrer"
    iconOnly
    size="small"
    type="default"
    {...opts}
  >
    <Icon icon={service} />
  </Button>
);

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
