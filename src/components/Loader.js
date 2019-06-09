import PropTypes from 'prop-types';
import { keyframes } from '@emotion/core';

const loaderRotateKeyframes = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const loaderCircleKeyframes = keyframes({
  '0%': {
    strokeDasharray: '1, 200',
    strokeDashoffset: 0,
  },

  '50%': {
    strokeDasharray: '89, 200',
    strokeDashoffset: '-35px',
  },

  '100%': {
    strokeDasharray: '89, 200',
    strokeDashoffset: '-124px',
  },
});

const Loader = ({ ...opts }) => (
  <span
    css={{
      position: 'relative',
      width: '1em',
      display: 'inline-block',
      verticalAlign: 'bottom',

      '&::before': {
        content: "''",
        display: 'block',
        paddingTop: '100%',
      },
    }}
    {...opts}
  >
    <svg
      css={{
        animation: `${loaderRotateKeyframes} 1.5s linear infinite`,
        height: '100%',
        transformOrigin: 'center center',
        width: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
      }}
      viewBox="25 25 50 50"
    >
      <circle
        css={{
          strokeDasharray: '1, 200',
          strokeDashoffset: 0,
          animation: `${loaderCircleKeyframes} 1.5s ease-in-out infinite`,
          strokeLinecap: 'round',
          stroke: 'currentColor',
          fill: 'none',
          strokeWidth: 2,
        }}
        cx="50"
        cy="50"
        r="20"
        strokeMiterlimit="10"
      />
    </svg>
  </span>
);

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
