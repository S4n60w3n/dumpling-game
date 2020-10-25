const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path')
const base = require('./base')

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.min.js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'assets', to: 'assets' },
      ],
    }),
  ],
  devtool: false,
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
})
