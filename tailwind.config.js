module.exports = {
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
    }
  },
  variants: {},
  plugins: []
};
