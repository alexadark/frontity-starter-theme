import { keyframes } from "@emotion/core";
const fadeIn = keyframes`
  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0)
  }
`;
export default {
  fontFamily: "body",
  borderRadius: 0,
  bg: "mobileMenuBg",
  width: ["100%", "468px"],
  display: "flex",
  overflowY: "scroll",
  boxShadow: ["none", "-10px 0 40px rgba(0,0,0,0.3)"],
  animationDuration: "1s",

  p: "xl",
  "&.menu-closing": {
    animation: `${fadeIn} 1 .4s 0s cubic-bezier(0.165, 0.84, 0.44, 1)`,
    boxShadow: ["none", "-10px 0 0 rgba(0,0,0,0)"]
  },
  ".close": {
    cursor: "pointer",
    position: "fixed",
    top: 3,
    right: 3
  },
  nav: {
    ".menu-item": {
      color: "light",
      fontSize: "m",
      textTransform: "uppercase",
      letterSpacing: 1.2,
      py: 10,
      lineHeight: 1,
      borderBottom: "1px dotted",
      borderColor: "border",
      fontWeight: 300,

      "&:hover": {
        color: "mobileMenuHoverColor"
      }
    },

    "[aria-current='page']": {
      fontStyle: "italic",
      fontWeight: "body"
    },
    button: {
      top: -4
    }
  }
};
