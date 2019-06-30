import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import Container from './Container';
import { misc, text } from '../assets/styles/utility';

const StylesSubnavVariables = theme => ({
  height: theme.height.large,
});

export const SubnavMenuItemStyles = (theme, props = {}) => [
  text.heading(theme),
  {
    color: theme.fontColor.base,
    display: 'block',
    height: StylesSubnavVariables(theme).height,
    lineHeight: `${StylesSubnavVariables(theme).height}px`,
    position: 'relative',
    fontSize: theme.fontSize.small,
    letterSpacing: theme.letterSpacing.medium,
    textTransform: 'uppercase',
    transition: `color ${theme.timing.base} ${theme.transition.base}`,

    '&:hover, &:focus': {
      color: theme.color.primary.base,
    },

    '&[disabled]': {
      opacity: theme.opacity.base,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  },

  props.active && {
    color: theme.color.primary.base,

    '&::before': {
      content: "''",
      position: 'absolute',
      left: '0',
      width: '100%',
      bottom: '0',
      height: 3,
      background: theme.color.primary.base,
    },
  },
];

const Subnav = ({ children, className, ...opts }) => (
  <div
    css={theme => ({
      background: theme.color.panel.base,
      borderBottom: `1px solid ${theme.border.base}`,
    })}
    className={cx('CK__Subnav', className)}
    {...opts}
  >
    <Container
      css={theme => [
        misc.overflow,
        {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: StylesSubnavVariables(theme).height,
        },
      ]}
    >
      {children}
    </Container>
  </div>
);

Subnav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Subnav;
