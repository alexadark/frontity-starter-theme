const sharedStyles = {
  p: ['m', 'l', 'xl'],
  boxShadow: 'small',
}

export const card = {
  remove: {
    p: 0,
    bg: 'transparent',
  },
  default: {
    ...sharedStyles,
    bg: 'cardBg',
    color: 'text',
  },
  primary: {
    ...sharedStyles,
    bg: 'primary',
    color: 'white',
  },
  secondary: {
    ...sharedStyles,
    bg: 'secondary',
    color: 'white',
  },
}
