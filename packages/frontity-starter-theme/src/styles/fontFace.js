import React from "react";
import { Global, css } from "frontity";
import baumansWOFF from "../fonts/baumans_regular-webfont.woff";
import baumansWOFF2 from "../fonts/baumans_regular-webfont.woff2";
import khandmediumWOFF from "../fonts/khand_500-webfont.woff";
import khandmediumWOFF2 from "../fonts/khand_500-webfont.woff2";

const FontFace = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "khandmedium";
        src: url(${khandmediumWOFF2}) format("woff2"),
          url(${khandmediumWOFF}) format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: "baumansregular";
        src: url(${baumansWOFF2}) format("woff2"),
          url(${baumansWOFF}) format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `}
  />
);

export default FontFace;
