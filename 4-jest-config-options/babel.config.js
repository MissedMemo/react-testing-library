/* jest runs in node with modules set to commonjs, switching to false otherwise, to support tree-shaking */

const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: isTest ? 'commonjs' : false,
        debug: false,
      },
    ],
    '@babel/preset-react',
  ],
}
