module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@react-native-community',
    '@nuxtjs',
    'plugin:prettier/recommended', // this line was updated
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    // add your custom rules here
    'prettier/prettier': 'error',
    extends: ['plugin:prettier/recommended'],
  },
};
