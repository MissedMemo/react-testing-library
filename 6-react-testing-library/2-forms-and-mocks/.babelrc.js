const isTest = String(process.env.NODE_ENV === "test")

module.exports = {
  presets: [
    ["@babel/preset-env", {
      modules: isTest ? 'commonjs' : false,
      loose: true
    }],
    "@babel/preset-react"
  ],
  plugins: ["@babel/plugin-transform-runtime"]
}