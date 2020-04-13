const {
  override,
  useBabelRc,
  useEslintRc,
  addWebpackModuleRule,
} = require('customize-cra');

module.exports = override(
  useBabelRc(),
  useEslintRc(),
  addWebpackModuleRule({
    test: /\.pug$/,
    use: ['babel-loader', 'pug-as-jsx-loader'],
  }),
);
