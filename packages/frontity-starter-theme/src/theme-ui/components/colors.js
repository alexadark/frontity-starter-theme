import { darken, lighten } from "polished";

const dark = "#082737";
const dark0 = lighten(0.08, "#082737");
const dark2 = darken(0.04, "#082737");
const dark3 = darken(0.1, "#082737");
const light = "#FBEED9";
const light2 = lighten(0.04, "#FBEED9");
const primary = "tomato";
const secondary = "#4C959B";
const lightGrey = "#cfd8dc";
const grey = "#90a4ae";
const yellow = "#FCB458";
const purple = "#9725A3";
const accentDark = "#FCB458";
const accentLight = "tomato";

export const colors = {
  primary,
  secondary,
  light,
  dark,
  lightGrey,
  accentDark,
  yellow,
  purple,
  accent: accentLight,
  background: light,
  bgInverse: dark,
  text: dark0,
  textInverse: light,
  white: "white",
  black: "black",
  brand: primary,
  mutted: lightGrey,
  grey: grey,
  border: lightGrey,
  headerBg: dark,
  headerColor: light,
  footerBg: dark,
  footerColor: light,
  cardBg: light2,
  highlightColor: accentDark,
  focusOutline: grey,
  mobileMenuBg: dark,
  modes: {
    dark: {
      text: light,
      background: dark,
      cardBg: dark2,
      headerBg: dark3,
      footerBg: dark3,
      accent: accentDark
    }
  }
};
