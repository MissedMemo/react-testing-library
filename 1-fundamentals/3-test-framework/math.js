
const sum = (a,b) => a + b
const difference = (a,b) => a - b
const product = (a,b) => 42 // should trigger error!

module.exports = {
  sum, difference, product
}