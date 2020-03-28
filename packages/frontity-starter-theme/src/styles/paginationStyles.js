export default {
  maxWidth: "l",
  display: "flex",
  justifyContent: "space-between",
  "a, .mutted": {
    fontWeight: 600,
    textTransform: "uppercase",
    fontSize: "xs",
    letterSpacing: 1.2
  },
  a: {
    "&:hover": {
      color: "accent"
    }
  },
  ".mutted": {
    color: "mutted",
    "&.prevLink": {
      ml: "1.5rem"
    },
    "&.nextLink": {
      mr: "1.5rem"
    }
  },
  ".pageNumbers": {
    a: {
      display: "inline-block",

      ".number": {
        justifyContent: "center",
        alignItems: "center"
      },
      "&:hover, &.active": {
        color: "accent"
      }
    }
  },
  ".link": {
    transition: ".6s",
    "&.prevLink": {
      transform: "translate3d(1.75rem, 0, 0)",
      mr: ["m", 0]
    },
    "&.nextLink": {
      transform: "translate3d(-1.75rem, 0, 0)",
      ml: ["m", 0]
    },
    "&:hover": {
      transform: "translate3d(0, 0, 0)"
    },
    "&.nextLink::before,&.prevLink::after": {
      content: '""',
      width: "1.5rem",
      height: "1px",
      mr: "0.25rem",
      bg: "currentColor",
      display: "inline-block",
      verticalAlign: "middle",
      transition: "0.6s",
      transform: "scaleX(0)"
    },
    "&:hover::before, &:hover::after": {
      transform: "scaleX(1)"
    }
  }
};
