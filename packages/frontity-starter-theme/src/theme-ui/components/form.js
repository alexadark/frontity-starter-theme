const sharedFormStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  'textarea, input[type="text"], input[type="email"], input[type="url"]': {
    color: 'inherit',
    bg: 'transparent',
    border: 'none',
    borderBottom: '1px solid',
    padding: 'xxs',
    boxShadow: 'inset 0 0 0 currentColor',
    transition: '.3s',
    '&:focus': {
      boxShadow: 'inset 0 -3px 0 currentColor',
      outline: 'none',
    },
  },
  'input[type = "text"], input[type = "email"], input[type = "url"], textarea': {
    width: '100%',
    minWidth: '100%',
    mb: 's',
    borderRadius: 0,
    WebkitAppearance: 'none',
  },
  label: {
    variant: 'text.special',
    fontSize: 'xs',
    fontWeight: 'bold',
  },
  'input[type="submit"], button[type=submit]': {
    variant: 'buttons.outline',
    margin: 'auto 0 auto auto',
  },
  '.comment-notes, .comment-form-comment, .comment-form-url, .form-field': {
    width: '100%',
  },
  '.comment-form-author, .comment-form-email, .form-field-name, .form-field-email': {
    width: ['100%', 'calc(50% - 1rem)'],
  },
  '.form-submit': {
    margin: 'auto 0 auto auto',
  },
  '.error': {
    fontSize: 'xxs',
    fontStyle: 'italic',
    display: 'block',
    mt: '-1rem',
  },
}

export const form = {
  ...sharedFormStyles,
  mb: 'l',
  py: 'xl',
  px: 'l',
  boxShadow: 'default',
  borderRadius: 5,

  raw: {
    ...sharedFormStyles,
  },
}
