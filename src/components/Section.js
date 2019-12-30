import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { rgba } from 'polished';
import { useTheme } from 'emotion-theming';

import { misc } from '../assets/styles/utility';

const StylesSectionVariables = {
  slantOffset: 2.5,
};

const Section = forwardRef(
  ({ as: Component, space, slant, className, ...opts }, ref) => {
    const theme = useTheme();

    return (
      <Component
        ref={ref}
        className={cx('CK__Section', className)}
        css={[
          misc.trimChildren,

          misc.fluidSize({
            theme,
            property: 'paddingTop',
            from: theme.space[space],
            to: theme.space[space] * 2,
          }),
          misc.fluidSize({
            theme,
            property: 'paddingBottom',
            from: theme.space[space],
            to: theme.space[space] * 2,
          }),

          slant === 'top' && {
            clipPath: `polygon(
            0 0,
            100% ${StylesSectionVariables.slantOffset}vw,
            100% 100%,
            0 calc(100% - ${StylesSectionVariables.slantOffset}vw)
          )`,
            marginTop: `-${StylesSectionVariables.slantOffset}vw`,
          },

          (slant === 'bottom' || slant === 'bottom-shadow') && [
            {
              clipPath: `polygon(
          0 0,
          100% 0,
          100% 100%,
          0 calc(100% - ${StylesSectionVariables.slantOffset}vw)
        )`,
            },

            slant === 'bottom-shadow' && {
              position: 'relative',

              '&::after': {
                content: "''",
                position: 'absolute',
                right: 0,
                left: 0,
                bottom: `-${StylesSectionVariables.slantOffset}vw`,
                zIndex: -1,
                borderBottom: `${StylesSectionVariables.slantOffset *
                  2.25}vw solid ${rgba(theme.color.dark.base, 0.03)}`,
                filter: 'blur(5px)',
              },
            },
          ],
        ]}
        {...opts}
      />
    );
  }
);

Section.propTypes = {
  space: PropTypes.oneOf([
    'xsmall',
    'small',
    'base',
    'medium',
    'large',
    'xlarge',
  ]),
  slant: PropTypes.oneOf(['top', 'bottom', 'bottom-shadow']),
  className: PropTypes.string,
};

Section.defaultProps = {
  as: 'section',
  space: 'large',
};

export default Section;
