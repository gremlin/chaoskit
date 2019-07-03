import PropTypes from 'prop-types';
import { rgba } from 'polished';

import { misc } from '../assets/styles/utility';

const StylesSectionVariables = {
  slantOffset: 2.5,
};

export const StylesSectionTitleWrapper = theme => [
  misc.trimChildren,
  misc.fluidSize({
    theme,
    property: 'marginBottom',
    from: theme.space.large,
    to: theme.space.xlarge,
  }),
  {
    textAlign: 'center',
  },
];

export const StylesSectionTitleSub = theme => ({
  color: theme.fontColor.muted,
  fontSize: theme.fontSize.medium,
  maxWidth: 625,
  margin: '0 auto',

  '.u-contrast &': {
    color: theme.contrast.muted,
  },
});

const Section = ({ space, slant, ...opts }) => (
  <section
    css={theme => [
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
            borderBottom: `${StylesSectionVariables.slantOffset
              * 2.25}vw solid ${rgba(theme.color.dark.base, 0.03)}`,
            filter: 'blur(5px)',
          },
        },
      ],
    ]}
    {...opts}
  />
);

Section.propTypes = {
  space: PropTypes.oneOf(['small', 'base', 'medium', 'large', 'xlarge']),
  slant: PropTypes.oneOf(['top', 'bottom', 'bottom-shadow']),
};

Section.defaultProps = {
  space: 'large',
};

export default Section;
