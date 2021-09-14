const babelJestMd = require('babel-jest');
const babelJest = babelJestMd.__esModule ? babelJestMd.default : babelJestMd;

module.exports = babelJest.createTransformer({
  presets: ['next/babel'],
  plugins: [['@emotion/babel-plugin', { autoLabel: 'always', labelFormat: '[filename]--[local]' }]],
});
