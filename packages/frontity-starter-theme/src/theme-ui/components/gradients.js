export const gradients = {
  primary: {
    backgroundImage: t =>
      `linear-gradient(60deg, ${t.colors.primary},${t.colors.yellow})`,
  },
  secondary: {
    backgroundImage: t =>
      `linear-gradient(60deg, ${t.colors.primary}, ${t.colors.purple} )`,
  },
  blue: {
    backgroundImage: t =>
      `linear-gradient(60deg,${t.colors.secondary}, #65D9E5  )`,
  },
}
