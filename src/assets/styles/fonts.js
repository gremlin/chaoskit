import { css } from '@emotion/react'

import FrieghtDisplayPro from '../fonts/freightdisplay-pro-semibold.woff2'
import FrieghtSansPro from '../fonts/freightsans-pro-book.woff2'
import Inconsolata from '../fonts/inconsolata-semiexpanded-regular.woff2'

export const fonts = (theme) => css`
  @font-face {
    font-family: 'FreightDisp Pro';
    src: local(😜), url(${FrieghtDisplayPro}) format('woff2');
    font-weight: ${theme.fontWeight.base} ${theme.fontWeight.bold};
    font-style: normal;
  }

  @font-face {
    font-family: 'FreightSans Pro';
    src: local(😜), url(${FrieghtSansPro}) format('woff2');
    font-weight: ${theme.fontWeight.base};
    font-style: normal;
  }

  @font-face {
    font-family: 'Inconsolata';
    src: local(😜), url(${Inconsolata}) format('woff2');
    font-weight: ${theme.fontWeight.light};
    font-style: normal;
  }
`
