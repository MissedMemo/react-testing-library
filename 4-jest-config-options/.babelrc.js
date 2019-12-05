/* jest runs in node with modules set to commonjs, switching to false otherwise, to support tree-shaking */

const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [ ['@babel/preset-env', { modules: isTest ? 'commonjs' : false } ], '@babel/preset-react' ]
}