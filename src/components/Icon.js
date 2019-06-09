import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Icons from '../assets/icons/icons.json';

const Icon = forwardRef(
  ({
    icon, additionalIcons, fallback, size, ...opts
  }, ref) => {
    const getIcon = () => {
      // Merge in base icons with anything additional
      const iconSource = Object.assign(Icons, additionalIcons);

      // Match on fallback prop if supplied
      const matchedIcon = iconSource[icon] || iconSource[fallback];

      // If we find an icon
      if (matchedIcon) {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            css={[
              {
                // 1. Help against rendering bug when scaling
                width: '1em',
                height: '1em',
                lineHeight: '1',
                position: 'relative',
                top: '-0.1em',
                maxWidth: '100%',
                backfaceVisibility: 'hidden', // 1

                '.icon-fill': {
                  fill: 'currentColor',
                },

                '.icon-stroke': {
                  stroke: 'currentColor',
                  strokeWidth: 1.5,
                  vectorEffect: 'non-scaling-stroke',

                  '*': {
                    vectorEffect: 'non-scaling-stroke',
                  },
                },
              },
              size === 'small' && {
                width: '0.65em',
                height: '0.65em',
              },
              size === 'large' && {
                width: '1.5em',
                height: '1.5em',
              },
              size === 'xlarge' && {
                width: '3em',
                height: '3em',
              },
            ]}
            className="CK__Icon"
            ref={ref}
            dangerouslySetInnerHTML={{ __html: matchedIcon }}
            {...opts}
          />
        );
      }

      console.error('Icon not found'); // eslint-disable-line no-console
      return false;
    };

    return getIcon();
  },
);

Icon.propTypes = {
  /** When icon is not found. Useful in generated content */
  fallback: PropTypes.string,
  icon: PropTypes.string.isRequired,
  /** Pass in (and override) additional icon data to search through */
  additionalIcons: PropTypes.object,
  size: PropTypes.oneOf(['small', 'large', 'xlarge']),
};

export default Icon;
