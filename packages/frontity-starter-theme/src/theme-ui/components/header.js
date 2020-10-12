export const header = {
  bg: 'headerBg',
  color: 'headerColor',
  fontWeight: 'bold',
  margin: 0,
  boxShadow: 'small',
  '.container': {
    display: ['flex'],
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontSize: 'm',
    margin: '0 auto',
    maxWidth: 'container',
    py: 'xs',
    width: '90vw',
  },

  '.headroom--pinned &': {
    '>div': {
      py: 'xxs',
    },
  },
  '.search-box': {
    width: ['80%', '90%', 'auto'],
  },
}
