module.exports = {
  important: true,
  purge: {
    enabled: true,
    content: [
      './src/pug/*.pug',
      './src/pug/**/*.pug'
    ]
  },
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    fontFamily: {
      display: ['sans-serif'],
      body: ['sans-serif']
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-debug-screens')
  ]
};
