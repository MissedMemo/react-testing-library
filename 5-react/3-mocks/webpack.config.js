const htmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

const SOURCE_DIR = resolve('src')

module.exports = {
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: SOURCE_DIR,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'webpack.html.template'
    })
  ]
}
