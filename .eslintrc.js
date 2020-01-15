module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': 0,
    'indent': ['off', 2],
    'space-before-function-paren': 0,
    'eol-last': 0,
    'space-infix-ops': 0,
    'key-spacing': 0,
    'semi': 0,
    'quotes': 0,
    'padded-blocks': 0,
    'no-unused-vars': 0,
    'keyword-spacing': 0,
    'comma-dangle': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
