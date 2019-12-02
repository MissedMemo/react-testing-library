const sum = (a,b) => a + b
const difference = (a,b) => a - b

const asyncSum = (a,b) => new Promise( (resolve, reject ) => {
  setTimeout( () => {
    resolve( a + b )
  })
})

const asyncDiff = (a,b) => Promise.resolve(a - b)

module.exports = {
  sum, difference, asyncDiff, asyncSum
}