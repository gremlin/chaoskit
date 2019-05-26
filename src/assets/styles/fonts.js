import { css } from '@emotion/core';

import GiraLight from '../fonts/gira-sans-light.woff';
import GiraMedium from '../fonts/gira-sans-regular.woff';
import GiraBold from '../fonts/gira-sans-bold.woff';
import CircularBook from '../fonts/lineto-circular-book.woff';
import CircularMedium from '../fonts/lineto-circular-medium.woff';
import CircularBlack from '../fonts/lineto-circular-black.woff';

export const fonts = theme => css`
  @font-face {
    font-family: Gira;
    src: local(😜), url(${GiraLight}) format('woff');
    font-weight: ${theme.fontWeight.base};
    font-style: normal;
  }
  @font-face {
    font-family: Gira;
    src: local(😜), url(${GiraMedium}) format('woff');
    font-weight: ${theme.fontWeight.medium};
    font-style: normal;
  }
  @font-face {
    font-family: Gira;
    src: local(😜), url(${GiraBold}) format('woff');
    font-weight: ${theme.fontWeight.bold};
    font-style: normal;
  }
  @font-face {
    font-family: Circular;
    src: local(😜), url(${CircularBook}) format('woff');
    font-weight: ${theme.fontWeight.base};
    font-style: normal;
  }
  @font-face {
    font-family: Circular;
    src: local(😜), url(${CircularMedium}) format('woff');
    font-weight: ${theme.fontWeight.medium};
    font-style: normal;
  }
  @font-face {
    font-family: Circular;
    src: local(😜), url(${CircularBlack}) format('woff');
    font-weight: ${theme.fontWeight.bold};
    font-style: normal;
  }
`;
