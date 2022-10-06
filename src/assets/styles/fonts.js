import { css } from '@emotion/react'

import SohneVF from '../fonts/SohneVF-web.woff2'
import SohneMono from '../fonts/SohneMono-light.woff2'
import FrieghtDisplayPro from '../fonts/freightdisplay-pro-semibold.woff2'
import FrieghtSansPro from '../fonts/freightsans-pro-book.woff2'

export const fonts = (theme) => css`
  @font-face {
    font-family: 'Sohne VF';
    src: local(😜), url(${SohneVF}) format('woff2');
    font-style: normal;
    font-variation-ligatures: normal;
    font-weight: ${theme.fontWeight.base} ${theme.fontWeight.xbold};
  }

  @font-face {
    font-family: 'Sohne Mono';
    src: local(😜), url(${SohneMono}) format('woff2');
    font-weight: ${theme.fontWeight.light};
    font-style: normal;
  }

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
`
