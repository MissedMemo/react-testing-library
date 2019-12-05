const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const SOURCE_DIR = resolve('src')

module.exports = {
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SOURCE_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'webpack.index.html.template'
    })
  ]
}