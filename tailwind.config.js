var colors = {
  'm-primary': '#141738',
  'm-secondary': '#3E458D',
  'm-tertiary': '#7B6AB5',
  'm-text': '#E8E4F5',
  'm-bg': '#FFF'
}

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: colors,
      textColors: colors,
      backgroundColors: colors
    },
  },
  variants: {},
  plugins: [
      require('@tailwindcss/custom-forms'),
  ],
}
