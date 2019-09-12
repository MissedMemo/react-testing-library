
const sum = (a,b) => a + b

const sumAsync = (a,b) => new Promise( (resolve, reject) => {
  setTimeout( () => {
    resolve(a-b) // trigger error!
  })
})

const difference = (a,b) => a - b
const product = (a,b) => 42 // should trigger error!

module.exports = {
  sum, difference, product, sumAsync
}