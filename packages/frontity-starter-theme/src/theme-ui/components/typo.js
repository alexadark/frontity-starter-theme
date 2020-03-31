import { rem } from "polished";

export const fonts = {
  body: "khandmedium, sans-serif",
  heading: "baumansregular, sans-serif"
};

export const fontSizes = {
  xxs: rem("12px"),
  xs: rem("14px"),
  s: rem("16px"),
  m: rem("20px"),
  l: rem("24px"),
  xl: rem("32px"),
  xxl: rem("48px"),
  Big: rem("64px"),
  Bigger: rem("96px")
};

export const lineHeights = {
  body: 1.5,
  heading: 1.1,
  loose: 2,
  none: 1
};

const heading = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
  color: "text",
  a: {
    borderBottom: "none"
  }
};

export const a = {
  variant: "transitions.m",
  color: "accent",
  fontWeight: "bold",
  textDecoration: "none",
  color: "text",
  "&:hover": {
    color: "accent"
  }
};

export const p = {
  fontSize: ["m"],
  lineHeight: "body"
};

export const h1 = {
  ...heading,
  fontSize: ["xl", "xxl"],
  mt: "xxs"
};
export const h2 = {
  ...heading,
  fontSize: ["l", "xl"],
  mt: "xxs"
};

export const h3 = {
  ...heading,
  fontSize: ["m", "l"],
  mt: "xs"
};
export const h4 = {
  ...heading,
  fontSize: ["s", "m"]
};

export const h5 = {
  ...heading,
  fontSize: "xs"
};
export const h6 = {
  ...heading,
  fontSize: "xs",
  color: "muted",
  mb: "xxs"
};
export const blockquote = {
  fontStyle: "italic",
  bg: "background",
  px: [20, 50],
  py: 40,
  borderLeft: "5px solid",
  borderColor: "primary",
  maxWidth: "800px !important",
  mx: "auto"
};

export const base = {
  fontSize: "m",
  color: "text",
  fontFamily: "body",
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote
};
