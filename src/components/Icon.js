import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icons from '../assets/icons/icons.json';

export const StylesIconVariables = {
  small: '0.65em',
  base: '1em',
  large: '1.65em',
  xlarge: '3em',
};

const Icon = forwardRef(
  ({
    className, icon, additionalIcons, fallback, size, ...opts
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
                width: StylesIconVariables.base,
                height: StylesIconVariables.base,
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
                width: StylesIconVariables.small,
                height: StylesIconVariables.small,
              },
              size === 'large' && {
                width: StylesIconVariables.large,
                height: StylesIconVariables.large,
              },
              size === 'xlarge' && {
                width: StylesIconVariables.xlarge,
                height: StylesIconVariables.xlarge,
              },
            ]}
            className={cx('CK__Icon', className)}
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
  className: PropTypes.string,
  /** When icon is not found. Useful in generated content */
  fallback: PropTypes.string,
  icon: PropTypes.string.isRequired,
  /** Pass in (and override) additional icon data to search through */
  additionalIcons: PropTypes.object,
  size: PropTypes.oneOf(['small', 'large', 'xlarge']),
};

export default Icon;
