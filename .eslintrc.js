module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'settings': {
    'polyfills': [
      'fetch'
    ]
  },
  'plugins': [
    'babel',
    'compat'
  ],
  'rules': {
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'comma-dangle': ['error', {
      'imports': 'never',
      'exports': 'never',
      'functions': 'ignore'
    }],
    'curly': 'error',
    'indent': ['error', 2],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'no-console': 'off',
    'no-debugger': 'off',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never']
  }
};
