import { lighten } from '@theme-ui/color'
import { a } from './typo.js'

const resultStyles = {
  bg: lighten('background', 0.05),
  overflow: 'scroll',
  position: 'absolute',
  left: 0,
  top: [65, 65, 88],
  width: ['100%', '100%', '600px'],
  zIndex: 2,
  color: 'text',
  '.results': {
    fontWeight: 'body',
    py: 'xxs',
    px: 'l',
    fontSize: 's',
    ul: {
      px: 0,
    },

    a: {
      ...a,
      color: 'text',
      '&:hover': {
        color: 'primary',
      },
    },
  },

  boxShadow: 'default',
  borderRadius: '0 0 0 5px',
  header: {
    px: 'l',
    py: 'xs',
    bg: 'searchResultsHeaderBg',
    color: 'white',
    fontWeight: 300,
    fontSize: 's',
    '.stats': {
      fontStyle: 'italic',
    },
    h3: {
      mt: 0,
      mb: 'xxs',
      color: 'text',
    },
  },
  mark: {
    bg: 'highlightColor',
    color: 'text',
    p: '2px',
  },
}
export const search = {
  width: '100%',
  mb: ['-15px', 0],
  //searchIcon
  icon: {
    p: 0,
    pr: 'xs',
    mt: '-7px',
    svg: {
      stroke: 'searchColor',
      width: '20px',
      height: '20px',
      pr: 'xs',
      boxSizing: 'content-box',
      borderRight: t => `1px solid ${t.colors.accentDark}`,
    },
  },
  //searchBox
  box: {
    position: 'relative',

    'button[type=submit]': {
      display: 'none',
    },
    'button[type=reset]': {
      bg: 'transparent',
      border: 'none',
      color: 'light',
      position: 'absolute',
      right: 0,
      top: 8,
    },
    input: {
      bg: 'transparent',
      border: 'none',
      borderRadius: 0,
      WebkitAppearance: 'none',

      borderBottom: t => `1px solid ${t.colors.searchColor}`,
      boxShadow: t => `${t.colors.searchColor} 0 0 0 inset`,
      color: 'light',
      fontSize: 'xs',
      display: 'block',
      fontWeight: '300',
      minWidth: '100%',
      outlineOffset: '-2px',
      overflow: 'visible',
      p: 'xxs',
      transitionDelay: '0s',
      transitionDuration: '.3s',
      transitionProperty: 'all',
      transitionTimingFunction: 'ease',
      width: '100%',
      '&:focus': {
        boxShadow: t => `inset 0 -3px 0 ${t.colors.searchColor}`,
        outline: 'none',
      },
    },
  },
  //searchResults
  results: {
    ...resultStyles,
    top: [65, 65, 88],
    maxHeight: ['100vh', '100vh', '60vh'],

    '.headroom--pinned &': {
      top: 68,
    },
    li: {
      listStyleType: 'none',
      borderBottom: t => `1px solid ${t.colors.grey}`,
      pt: 's',
      pb: 'm',
      '&:last-child': {
        border: 'none',
      },
    },
    h4: {
      mb: 'xxs',
    },
  },
  resultsBasic: {
    ...resultStyles,
    top: [123, 123, 80],
    maxHeight: ['100vh', '100vh', '60vh'],

    '.headroom--pinned &': {
      top: 71,
    },
    h4: {
      borderBottom: t => `1px solid ${t.colors.grey}`,
      mb: 0,
      pt: 's',
      pb: 'm',
    },
    '.results div:last-child h4': {
      border: 'none',
    },
  },
}
