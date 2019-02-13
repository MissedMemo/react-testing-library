const isTest = String( process.env.NODE_ENV === "test" )

module.exports = {
  "presets": [
    "@babel/preset-react",
    ["@babel/preset-env", {
      "loose": true,
      "modules": isTest ? 'commonjs' : false
    }]
  ]
}

// IMPORTANT: adding babel-plugin-emotion is HIGHLY recommended!
// (see https://github.com/emotion-js/emotion/tree/master/packages/babel-plugin-emotion )
