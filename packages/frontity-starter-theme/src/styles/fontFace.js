import React from "react";
import { Global, css } from "frontity";
import baumansWOFF2 from "../fonts/baumans_regular-webfont.woff2";
import khandmediumWOFF2 from "../fonts/khand_500-webfont.woff2";

const FontFace = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "khandmedium";
        src: url(${khandmediumWOFF2}) format("woff2");

        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: "baumansregular";
        src: url(${baumansWOFF2}) format("woff2");

        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `}
  />
);

export default FontFace;
