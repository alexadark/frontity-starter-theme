import { colors, buttons, text, card, header, footer } from "./components";
import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  base
} from "./components/typo";

export default {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  text,
  buttons,
  card,
  header,
  footer,
  sizes: {
    container: 1200,
    s: 300,
    m: 600,
    l: 900
  },
  shadows: {
    small: `0px 1px 10px rgba(0,0,0,0.05)`,
    default: `0px 5px 12px rgba(0,0,0,0.15)`,
    medium: `0px 5px 15px rgba(0,0,0,0.25)`,
    large: `0 20px 40px rgba(0,0,0,.15)`,
    hover: `0px 10px 20px rgba(0,0,0,0.45)`
  },

  space: {
    xxs: 4 * 2, //8
    xs: 4 * 3, //12
    s: 4 * 4, //16
    m: 4 * 6, //24
    l: 4 * 8, //32
    xl: 4 * 12, //48
    xxl: 4 * 16, //64
    big: 4 * 32, //128
    bigger: 4 * 64 //256
  },

  breakpoints: [`600px`, `900px`, `1100px`],
  radii: {
    xs: `3px`,
    s: `5px`,
    m: `10px`,
    l: `20px`,
    round: `100px`
  },
  transitions: {
    s: { transition: `all .2s ease-in-out` },
    m: { transition: `all .4s ease-in-out` },
    l: { transition: `all .8s ease-in-out` },
    xl: { transition: `all 1s ease-in-out` }
  },
  layout: {
    backgroundColor: "background",
    color: "text",
    fontFamily: "body",
    fontSize: `s`,
    lineHeight: "text",
    container: {
      px: [20, 30, 0]
    }
  },
  styles: {
    root: base
  },
  //Grommet

  layer: {
    overlay: {
      background: "primary"
    }
  }
};
