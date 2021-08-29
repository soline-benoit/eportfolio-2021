module.exports = {
  mode: 'jit',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      mono: ['var(--roboto-mono)', 'monospace'],

    },
    extend: {
      fontFamily: {
        'all-round-gothic': ['var(--all-round-gothic)', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        dark: 'var(--color-dark)',
        light: 'var(--color-light)',
      },
    },
  },
}
