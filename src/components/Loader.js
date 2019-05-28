import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/core';

const loaderRotateKeyframes = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const loaderCircleKeyframes = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

const Loader = ({ ...opts }) => (
  <span
    css={css`
      position: relative;
      width: 1em;
      display: inline-block;
      vertical-align: bottom;

      &::before {
        content: '';
        display: block;
        padding-top: 100%;
      }
    `}
    {...opts}
  >
    <svg
      css={css`
        animation: ${loaderRotateKeyframes} 1.5s linear infinite;
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      `}
      viewBox="25 25 50 50"
    >
      <circle
        css={css`
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
          animation: ${loaderCircleKeyframes} 1.5s ease-in-out infinite;
          stroke-linecap: round;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
        `}
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
